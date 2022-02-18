import Livro from '../models/livro';

class LivroController {
  async store(req, res) {
    const {
      nome,
      autor,
      categoria,
      genero,
      edicao,
      sinopse,
      imageurl,
      venda,
      troca,
      doacao,
      preco,
    } = req.body;
    const livro = await Livro.create({
      nome,
      autor,
      categoria,
      genero,
      edicao,
      sinopse,
      imageurl,
      venda,
      troca,
      doacao,
      preco,
    });
    res.json(livro);
  }

  async get(req, res, next) {
    const livros = await Livro.findAll();
    res.json(livros);
  }

  async getId(req, res, next) {
    const { id } = req.params;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      res.json(livro);
    }
  }

  async update(req, res) {
    const { nome } = req.body;
    const { id } = req.params;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      const novo = await livro.update({ nome: nome });
      res.json(novo);
    }
  }

  async updateAutor(req, res) {
    const { autor } = req.body;
    const { id } = req.params;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      const novo = await livro.update({ autor: autor });
      res.json(novo);
    }
  }
  async updateGenero(req, res) {
    const { genero } = req.body;
    const { id } = req.params;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      const novo = await livro.update({ genero: genero });
      res.json(novo);
    }
  }

  async updateCategoria(req, res) {
    const { categoria } = req.body;
    const { id } = req.params;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      const novo = await livro.update({ categoria: categoria });
      res.json(novo);
    }
  }
  async updateEdicao(req, res) {
    const { edicao } = req.body;
    const { id } = req.params;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      const novo = await livro.update({ edicao: edicao });
      res.json(novo);
    }
  }

  async searchLivro(req,res) {
    const { nome } = req.params; 

    const myBooks = await Livro.findAll({
      where: {
        nome: nome
      }
    });
    return res.json(myBooks);
  }


  async updateSinopse(req, res) {
    const { sinopse } = req.body;
    const { id } = req.params;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Esse Livro nao existe' });
    } else {
      const novo = await livro.update({ sinopse: sinopse });
      res.json(novo);
    }
  }

  async updateImage(req, res) {
    const { imageurl } = req.body;
    const { id } = req.params;
    const livro = await Livro.findByPk(id);
    if (!livro) {
      res.status(404).json({ erro: 'Este livro não existe' });
    } else {
      const novo = await livro.update({ imageurl: imageurl });
      res.json(novo);
    }
  }

  async deleteLivro(req,res) {
    const mylist = await Livro.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    return res.json("Livro excluido");
}
}

export default new LivroController();
