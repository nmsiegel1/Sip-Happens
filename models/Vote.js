const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Vote model
class Vote extends Model {}

Vote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    wine_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'wine',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vote',
  }
);

module.exports = Vote;
