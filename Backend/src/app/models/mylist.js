import Sequelize, { Model } from 'sequelize';

class MyList extends Model {

  static init(sequelize) {
    super.init(
      {
      },
      {
        sequelize,
      },
    );
  }
}

export default MyList;
