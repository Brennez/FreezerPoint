import Book from '../models/book';
import MyList from '../models/mylist';
import User from '../models/user';

class MyListController {
  async store(req, res) {
    const { id_user, id_books } = req.body;
    const myList = await MyList.create({
      id_user,
      id_books,
    });
    return res.json(myList);
  }

  async index(req, res) {
    const mylist = await MyList.findAll({
      where: {
        id_user: req.params.id,
      },
      include: [
        {
          model: Book,
          as: 'books',
          attributes: ['name', 'author', 'category'],
        },
      ],
    });
    return res.json(mylist);
  }

  async getUserId(req, res) {
    const mylist = await MyList.findAll({
      where: {
        id_books: req.params.id,
      },
      include: [
        {
          model: User,
          as: 'users',
          atribute: ['name', 'phone'],
        },
      ],
    });
    return res.json(mylist);
  }

  async deleteBook(req, res) {
    const mylist = await MyList.destroy({
      where: {
        id_user: req.params.id_user,
        id_books: req.params.id_book,
      },
    });
    return res.json('Livro excluido com sucesso!');
  }
}

export default new MyListController();
