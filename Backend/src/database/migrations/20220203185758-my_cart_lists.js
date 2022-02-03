module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cart_lists', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key:  'id',
        },
      },
      id_livro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'livros',
          key:  'id',
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cart_lists');
  }
};
