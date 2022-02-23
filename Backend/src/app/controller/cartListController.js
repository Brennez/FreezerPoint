import Book from '../models/book';
import MyCartList from '../models/cartlist';

class MyCartListController {
  async store(req, res) {
    const idExist = await MyCartList.findOne({
      where: { id_book: req.body.id_book },
    });

    if (idExist) {
      return res.status(400).json({ message: 'ID já existe' });
    }

    const { id_user, id_book } = req.body;

    const myCartList = await MyCartList.create({
      id_user,
      id_book,
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
          model: Book,
          as: 'books',
          attributes: [
            'name',
            'author',
            'category',
            'imageurl',
            'category',
            'genre',
          ],
        },
      ],
    });
    return res.json(myCartlist);
  }

  async deleteBook(req, res) {
    const mylist = await MyCartList.destroy({
      where: {
        id_user: req.params.id_user,
        id_book: req.params.id_book,
      },
    });
    return res.json('Livro excluido');
  }
}

export default new MyCartListController();
