const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Wine model
class Wine extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      wine_id: body.wine_id,
    }).then(() => {
      return Wine.findOne({
        where: {
          id: body.wine_id,
        },
        attributes: [
          'id',
          'type',
          'name',
          'description',
          'food_pairing',
          'food_image',
          'wine_image',
          'wine_url',
          [
            sequelize.literal(
              '(SELECT COUNT(*) FROM vote WHERE wine.id = vote.wine_id)'
            ),
            'vote_count',
          ],
        ],
        include: [
          {
            model: models.Comment,
            attributes: [
              'id',
              'comment_text',
              'wine_id',
              'user_id',
              'created_at',
            ],
            include: {
              model: models.User,
              attributes: ['username'],
            },
          },
        ],
      });
    });
  }
}
Wine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    food_pairing: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wine_image: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    wine_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    food_image: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'wine',
  }
);

module.exports = Wine;
