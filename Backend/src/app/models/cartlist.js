import Sequelize, { Model } from 'sequelize';

class CartList extends Model {

  static init(sequelize) {
    super.init(
      {
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, {
        foreignKey: 'id_user',
        as: "usuarios"}
      )
    this.belongsTo(models.Livro, {
      foreignKey: 'id_livro',
      as: "livros"}
    )
  }
}

export default CartList;
