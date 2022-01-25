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
        imageurl: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

export default Livro;
