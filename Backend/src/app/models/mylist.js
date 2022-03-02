import Sequelize, { Model } from 'sequelize';

class MyList extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'id_user',
      as: 'users',
    });
    this.belongsTo(models.Book, {
      foreignKey: 'id_books',
      as: 'books',
    });
  }
}

export default MyList;
