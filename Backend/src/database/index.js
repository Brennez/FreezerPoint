import Sequelize from 'sequelize';
import Usuario from '../app/models/usuario';
import Livro from '../app/models/livro';
import databaseConfig from '../config/database';

const models = [Usuario, Livro];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}
export default new Database();
