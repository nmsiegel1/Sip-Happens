const router = require('express').Router();

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes.js');
// const featuredRoutes = require('./featured-routes.js');
const wineRoutes = require('./wine-routes.js');

router.use('/', featuredRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/pairings', wineRoutes);

module.exports = router;
