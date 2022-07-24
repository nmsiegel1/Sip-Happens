const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');
const Wine = require('./Wine');

// associations
User.belongsToMany(Wine, {
  through: Vote,
  as: 'voted_wine',

  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Wine.belongsToMany(User, {
  through: Vote,
  as: 'voted_wine',
  foreignKey: 'wine_id',
  onDelete: 'SET NULL',
});

Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Vote.belongsTo(Wine, {
  foreignKey: 'wine_id',
});

User.hasMany(Vote, {
  foreignKey: 'user_id',
});

Wine.hasMany(Vote, {
  foreignKey: 'wine_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Comment.belongsTo(Wine, {
  foreignKey: 'wine_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Wine.hasMany(Comment, {
  foreignKey: 'wine_id',
});

module.exports = { User, Vote, Comment, Wine };
