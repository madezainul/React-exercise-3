'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class moviedetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      moviedetail.belongsTo(models.movie)
    }
  }
  moviedetail.init({
    movieId: DataTypes.INTEGER,
    release: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    studio: DataTypes.STRING,
    desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'moviedetail',
  });
  return moviedetail;
};