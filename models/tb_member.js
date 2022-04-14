'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_member.init({
    id: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    jenis_kelamin: DataTypes.ENUM,
    tlp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_member',
  });
  return tb_member;
};