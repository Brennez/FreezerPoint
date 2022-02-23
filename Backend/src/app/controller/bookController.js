import Book from '../models/book';

class BookController {
  async store(req, res) {
    const { name, author, category, genre, edition, synopsis, imageurl } =
      req.body;
    const book = await Book.create({
      name,
      author,
      category,
      genre,
      edition,
      synopsis,
      imageurl,
    });
    res.json(book);
  }

  async get(req, res, next) {
    const books = await Book.findAll();
    res.json(books);
  }

  async getId(req, res, next) {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ error: 'Esse Livro nao existe' });
    } else {
      res.json(book);
    }
  }

  async update(req, res) {
    const { name } = req.body;
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ error: 'Esse Livro nao existe' });
    } else {
      const newBook = await book.update({ name: name });
      res.json(newBook);
    }
  }

  async updateAuthor(req, res) {
    const { author } = req.body;
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ error: 'Esse Livro nao existe' });
    } else {
      const newBook = await book.update({ author: author });
      res.json(newBook);
    }
  }

  async updateGenre(req, res) {
    const { genre } = req.body;
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ error: 'Esse Livro nao existe' });
    } else {
      const newBook = await book.update({ genre: genre });
      res.json(newBook);
    }
  }

  async updateCategory(req, res) {
    const { category } = req.body;
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ error: 'Esse Livro nao existe' });
    } else {
      const newBook = await book.update({ category: category });
      res.json(newBook);
    }
  }

  async updateEdition(req, res) {
    const { edition } = req.body;
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ error: 'Esse Livro nao existe' });
    } else {
      const newBook = await book.update({ edition: edition });
      res.json(newBook);
    }
  }

  async searchBook(req, res) {
    const { name } = req.body;

    const myBooks = await Book.findAll({
      where: {
        name: name,
      },
    });
    return res.json(myBooks);
  }

  async updateSynopsis(req, res) {
    const { synopsis } = req.body;
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ error: 'Esse Livro nao existe' });
    } else {
      const newBook = await book.update({ synopsis: synopsis });
      res.json(newBook);
    }
  }

  async updateImage(req, res) {
    const { imageurl } = req.body;
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ error: 'Este livro não existe' });
    } else {
      const newBook = await book.update({ imageurl: imageurl });
      res.json(newBook);
    }
  }

  async deleteBook(req, res) {
    const mylist = await Book.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json('Livro excluido');
  }
}

export default new BookController();
