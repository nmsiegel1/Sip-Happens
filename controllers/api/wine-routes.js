const router = require('express').Router();
const { User, Vote, Wine, Comment } = require('../../models');
// const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

//GET api/wine
router.get('/', (req, res) => {
  Wine.findAll({
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
    .then((dbWineData) => res.json(dbWineData))
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
      if (!dbWineData) {
        res.status(404).json({ message: 'No wine found with this id' });
        return;
      }
      res.json(dbWineData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST api/wine/
router.post('/', (req, res) => {
  Post.create({
    name: req.body.name,
    description: req.body.description,
    varietal: req.body.varietal,
    food_pairing: req.body.food_pairing,
    wine_image: req.body.wine_image,
    wine_url: req.body.wine_url,
    food_image: req.body.food_image,
    food_url: req.body.food_url,
  })
    .then((dbWineData) => res.json(dbWineData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//DELETE api/wine/:id
router.delete('/:id', (req, res) => {
  Wine.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbWineData) => {
      if (!dbWineData) {
        res.status(404).json({ message: 'No wine found with this id' });
        return;
      }
      res.json(dbWineData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
