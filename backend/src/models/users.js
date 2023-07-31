'use strict';
import { Model } from 'sequelize';
const createModel = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      name: DataTypes.STRING, //データの型を設定
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'users', //usersモデル
      underscored: true, //jsプロパティ名を共通化
    }
  );
  return users;
};

export default createModel;
