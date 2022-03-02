import Sequelize, { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        author: Sequelize.STRING,
        category: Sequelize.STRING,
        genre: Sequelize.STRING,
        edition: Sequelize.STRING,
        synopsis: Sequelize.STRING,
        imageurl: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

export default Book;
