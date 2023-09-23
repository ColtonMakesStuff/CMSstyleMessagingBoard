const router = require('express').Router();

const apiRoutes = require('./api');
const blogHomeRoutes = require('./blogHomeRoutes');

router.use('/api', apiRoutes);
router.use('/', blogHomeRoutes)

module.exports = router;