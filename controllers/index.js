const router = require('express').Router();

const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes.js');
const featuredRoutes = require('./featured-routes.js');
const pairingRoutes = require('./pairing-routes');

router.use('/', featuredRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/pairings', pairingRoutes);

module.exports = router;
