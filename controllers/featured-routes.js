const router = require('express').Router();
const { User, Wine, Comment, Vote } = require('../models');
const sequelize = require('../config/connection');

// GET featured wines
router.get('/', (req, res) => {
  res.render('featured');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/wine/:id', (req, res) => {
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
        attributes: ['username'],
      },
    ],
  })
    .then((dbWineData) => {
      if (!dbWineData) {
        res.status(404).json({ message: 'No wine found with this id' });
        return;
      }

      // serialize the data
      const wine = dbWineData.get({ plain: true });

      // pass data to template
      res.render('wineRec', { wine, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
