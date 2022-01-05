const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');


router.get('/', mainController.homePage);
router.get('/card/:id', mainController.cardDetail);
router.get('/search', searchController.searchPage);
router.get('/search/element/', searchController.searchResult);



module.exports = router;