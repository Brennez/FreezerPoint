import Sequelize from 'sequelize';
import User from '../app/models/user';
import Book from '../app/models/book';
import databaseConfig from '../config/database';
import MyList from '../app/models/mylist';
import MyCartList from '../app/models/cartlist';

const models = [User, Book, MyList, MyCartList];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models),
    );
  }
}
export default new Database();
