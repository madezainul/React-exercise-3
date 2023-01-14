'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class moviegenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      moviegenre.belongsTo(models.movie)
      moviegenre.belongsTo(models.genre)
    }
  }
  moviegenre.init({
    movieId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'moviegenre',
  });
  return moviegenre;
};