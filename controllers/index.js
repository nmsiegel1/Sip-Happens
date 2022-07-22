const router = require('express').Router();

const apiRoutes = require('./api');
const featuredRoutes = require('./featured-routes.js');

router.use('/', featuredRoutes);
router.use('/api', apiRoutes);

module.exports = router;
