const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes');
const wineRoutes = require('./wine-routes.js');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/wine', wineRoutes);

module.exports = router;
