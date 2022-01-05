const express = require('express');
const deckController = require('./controllers/deckController');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');


router.get('/', mainController.homePage);
router.get('/card/:id', mainController.cardDetail);

router.get('/search', searchController.searchPage);
router.get('/search/element/', searchController.searchByElement);
router.get('/search/level/', searchController.searchByLevel);
router.get('/search/values/', searchController.searchByValues);
router.get('/search/name/', searchController.searchByName);


router.use('/deck', deckController.checkDeckSet);
router.get('/deck', deckController.deckPage);
router.get('/deck/add/:id', deckController.addToDeck);
router.get('/deck/remove/:id', deckController.removeFromDeck);


module.exports = router;