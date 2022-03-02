import Sequelize, { Model } from 'sequelize';

class CartList extends Model {
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
      foreignKey: 'id_book',
      as: 'books',
    });
  }
}

export default CartList;
