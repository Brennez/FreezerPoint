import Livro from '../models/livro';

class LivroController {
  async store(req, res) {
    const { nome, autor, edicao, sinopse, genero, categoria } = req.body;
    const livro = await Livro.create({
      nome,
      autor,
      edicao,
      sinopse,
      genero,
      categoria,
    });
    res.json(livro);
  }

  async get(req, res, next) {
    const livros = await Livro.findAll();
    res.json(livros);
  }

  async getId(req, res, next) {
    const { id } = req.body;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      const { nome, autor, edicao, sinopse, genero, categoria } = livro;
      res.json({ nome, autor, edicao, sinopse, genero, categoria });
    }
  }

  async update(req, res) {
    const { id, nome } = req.body;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      const novo = await livro.update({ nome: nome });
      res.json(novo);
    }
  }

  async updateAutor(req, res) {
    const { id, autor } = req.body;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      const novo = await livro.update({ autor: autor });
      res.json(novo);
    }
  }
  async updateGenero(req, res) {
    const { id, genero } = req.body;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      const novo = await livro.update({ genero: genero });
      res.json(novo);
    }
  }
  async updateCategoria(req, res) {
    const { id, categoria } = req.body;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      const novo = await livro.update({ categoria: categoria });
      res.json(novo);
    }
  }
  async updateEdicao(req, res) {
    const { id, edicao } = req.body;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      const novo = await livro.update({ edicao: edicao });
      res.json(novo);
    }
  }
  async updateSinopse(req, res) {
    const { id, sinopse } = req.body;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      const novo = await livro.update({ sinopse: sinopse });
      res.json(novo);
    }
  }
}

export default new LivroController();
