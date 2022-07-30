const { Comment } = require('../models');

const commentData = [
  {
    id: 1,
    comment_text: 'Great fruity notes',
    user_id: 1,
    wine_id: 2,
  },
  {
    id: 2,
    comment_text: 'Not my fav',
    user_id: 2,
    wine_id: 1,
  },
  {
    id: 3,
    comment_text: 'Looks delicious',
    user_id: 3,
    wine_id: 3,
  },
  {
    id: 4,
    comment_text: 'Love this pairing',
    user_id: 1,
    wine_id: 4,
  },
  {
    id: 5,
    comment_text: 'Cant wait to try it',
    user_id: 2,
    wine_id: 5,
  },
  {
    id: 6,
    comment_text: 'Ill have to try it for Thanksgiving',
    user_id: 2,
    wine_id: 6,
  },
  {
    id: 7,
    comment_text: 'Love a pinot noir',
    user_id: 3,
    wine_id: 7,
  },
  {
    id: 8,
    comment_text: 'Classic pairing',
    user_id: 2,
    wine_id: 8,
  },
  {
    id: 9,
    comment_text: 'Not a huge fan of blue cheese',
    user_id: 1,
    wine_id: 9,
  },
  {
    id: 10,
    comment_text: 'Perfect for a picnic',
    user_id: 1,
    wine_id: 10,
  },
  {
    id: 11,
    comment_text: 'This works great with blue cheese',
    user_id: 2,
    wine_id: 11,
  },
  {
    id: 12,
    comment_text: 'PIZZAA!!!!',
    user_id: 3,
    wine_id: 12,
  },
  {
    id: 13,
    comment_text: 'I like this one',
    user_id: 2,
    wine_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
