import Sequelize, { Model } from 'sequelize';

class Livro extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        autor: Sequelize.STRING,
        categoria: Sequelize.STRING,
        genero: Sequelize.STRING,
        edicao: Sequelize.STRING,
        sinopse: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

export default Livro;

/*
Livros:
Anúncio de livros;
    Nome;
    ID;
    Autor;
    Unidades;
    Edição;
    Cliente (Que está anunciando);
    Sinopse;
    Imagem;
    Condição (Usado, Novo, Semi-Novo);
    Gênero;
    Categoria (Venda,  Troca ou Doação);
Listar Livros (Feed de livros disponíveis);
Pesquisa de Livros;
    Gênero;
    Categoria;
    Condição;
    Autor;
    Nome;
Atualizar Dados Cadastrais de Livro (Apenas para anunciante) ;
Excluir Livro;

*/
