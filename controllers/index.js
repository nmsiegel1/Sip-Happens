const router = require('express').Router();

const apiRoutes = require('./api');
const htmlRoutes = require('./html-routes.js');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;
