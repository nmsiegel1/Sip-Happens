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
    comment_text: 'This works great with blue cheese',
    user_id: 3,
    wine_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
