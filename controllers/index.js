const router = require('express').Router();

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes.js');
const featuredRoutes = require('./featured-routes.js');
const recRoutes = require('./recomendation-routes.js');

router.use('/', featuredRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/recommendations', recRoutes);

module.exports = router;
