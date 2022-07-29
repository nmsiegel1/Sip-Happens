const router = require('express').Router();
const { Comment, Wine, Vote, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET api/comments
router.get('/', (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST api/comments
router.post('/', withAuth, (req, res) => {
  //expects {'username': 'example', 'email': 'example@example.com', 'password': '****'}
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      wine_id: req.body.wine_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// DELETE api/comments/:id
router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
