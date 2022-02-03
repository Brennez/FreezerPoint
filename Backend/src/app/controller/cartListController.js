import Livro from '../models/livro';
import MyCartList from '../models/cartlist';

class MyCartListController {
  async store(req, res) {
    const idExist = await MyCartList.findOne({
      where: { id_livro: req.body.id_livro },
    });

    if (idExist) {
      return res.status(400).json({ mensagem: 'ID já existe' });
    }

    const { id_user, id_livro } = req.body;

    const myCartList = await MyCartList.create({
      id_user,
      id_livro,
    });
    return res.json(myCartList);
  }

  async index(req, res) {
    const myCartlist = await MyCartList.findAll({
      where: {
        id_user: req.params.id,
      },
      include: [
        {
          model: Livro,
          as: 'livros',
          attributes: ['nome', 'autor', 'categoria'],
        },
      ],
    });
    return res.json(myCartlist);
  }
}

export default new MyCartListController();
