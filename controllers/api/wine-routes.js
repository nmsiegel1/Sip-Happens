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
        // as: 'comments',
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
        as: 'comments',
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

// PUT/api/wine/upvote
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
  // Vote.created({
  //   user_id: req.body.user_id,
  //   wine_id: req.body.wine_id,
  // })
  //   .then((dbWineData) => res.json(dbWineData))
  //   .catch((err) => res.json(err));
});

//POST api/wine/
// router.post('/', (req, res) => {
//   Post.create({
//     name: req.body.name,
//     description: req.body.description,
//     type: req.body.type,
//     food_pairing: req.body.food_pairing,
//     wine_image: req.body.wine_image,
//     wine_url: req.body.wine_url,
//     food_image: req.body.food_image,
//   })
//     .then((dbWineData) => res.json(dbWineData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// //DELETE api/wine/:id
// router.delete('/:id', (req, res) => {
//   Wine.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbWineData) => {
//       if (!dbWineData) {
//         res.status(404).json({ message: 'No wine found with this id' });
//         return;
//       }
//       res.json(dbWineData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
