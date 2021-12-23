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
        venda: Sequelize.BOOLEAN,
        troca: Sequelize.BOOLEAN,
        doacao: Sequelize.BOOLEAN,  
        preco: Sequelize.DOUBLE,
      },
      {
        sequelize,
      },
    );
  }
}

export default Livro;
