const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      //use the id from the session
      user_id: req.session.user_id,
      favorite: req.body.favorite,
      // TODO is this right?
    },
    attributes: [
      'id',
      'name',
      'description',
      'varietal',
      'food_pairing',
      'wine_image',
      'wine_url',
      'food_image',
      'food_url',
      [
        sequelize.literal(
          '(SELECT COUNT(*) FROM vote WHERE wine.id = vote.wine_id)'
        ),
        'vote_count',
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'wine_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbWineData) => {
      //serialize data before passing to template
      const favs = dbWineData.map((wine) => wine.get({ plain: true }));
      res.render('dashboard', { favs, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
