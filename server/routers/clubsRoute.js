const router = require('express').Router();
const clubsController = require('../controllers/clubsControllers');

router.get('/', clubsController.listClub);

module.exports = router;
