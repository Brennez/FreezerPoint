module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mylist', {
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
      id_livros: {
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
    })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mylist');
  }
};
