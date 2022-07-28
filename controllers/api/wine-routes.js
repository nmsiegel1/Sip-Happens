const router = require('express').Router();
const { User, Vote, Wine, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

//GET api/wine
router.get('/', (req, res) => {
  Wine.findAll({
    attributes: [
      'id',
      'name',
      'description',
      'type',
      'food_pairing',
      'wine_image',
      'wine_url',
      'food_image',
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
        as: 'voted_wine',
        attributes: ['username'],
      },
    ],
  })
    .then((dbWineData) => {
      const wines = dbWineData.map((wine) => wine.get({ plain: true }));
      res.render('wine-gallery', { wines, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET api/wine/:id
router.get('/:id', (req, res) => {
  Wine.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'name',
      'description',
      'type',
      'food_pairing',
      'wine_image',
      'wine_url',
      'food_image',
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
        as: 'voted_wine',
        attributes: ['username'],
      },
    ],
  })
    .then((dbWineData) => {
      const wines = dbWineData.map((wine) => wine.get({ plain: true }));
      res.render('wine-gallery', { wines, loggedIn: req.session.loggedIn });
      if (!dbWineData) {
        res.status(404).json({ message: 'No wine found with this id' });
        return;
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT/api/wine/upvote
// expects user_id: '', wine_id: ''
router.put('/upvote', withAuth, (req, res) => {
  //make sure session exists first
  if (req.session) {
    //pass session id along with all destructured properties on req.body
    Wine.upvote(
      { ...req.body, user_id: req.session.user_id },
      // custom static method created in models/Post.js
      { Vote, Comment, User }
    )
      .then((updatedVoteData) => res.json(updatedVoteData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

module.exports = router;
