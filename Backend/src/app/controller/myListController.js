import Livro from '../models/livro';
import MyList from '../models/mylist';
import Usuario from '../models/usuario';

class MyListController {
    async store(req, res) {
        const {
            id_user,
            id_livros,
        } = req.body;
        const myList = await MyList.create({
            id_user,
            id_livros,
        });
        return res.json(myList);
      }

    async index(req,res) {
        const mylist = await MyList.findAll({
            where:{
                id_user: req.params.id
            },
            include: [
                {
                    model: Livro,
                    as: "livros",
                    attributes: [
                        "nome",
                        "autor",
                        "categoria"
                    ]
                }
            ]
        });
        return res.json(mylist);
    }

    async getUserId(req,res) {
        const mylist = await MyList.findAll({
            where:{
                id_livros: req.params.id
            }, 
            include: [{
                model:Usuario,
                as:"usuarios",
                atribute:[
                    "nome",
                    "telefone"
                ]
            }]  
        })
        return res.json(mylist);
    }

    async deleteLivro(req,res) {
        const mylist = await MyList.destroy(
            {
                where: {
                    id:req.params.id
                }
            }
        )
        return res.json("Livro excluido");
    }
}


export default new MyListController();