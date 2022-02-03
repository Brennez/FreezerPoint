class CartList {
  livros = new Array();

  getId(id) {
    const idLivro = this.livros.find((id) => livros.id === id);
    return idLivro;
  }

  list() {
    return this.livros;
  }

  async store(req, res) {
    const { id } = await req.params;
    idLivro = this.livros.push(id);
    return res.status(200).json({ message: 'Livro adicionado com sucesso' });
  }
}

export default CartList;
