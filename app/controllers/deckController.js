const dataMapper = require('../dataMapper.js');

const deckController = {
  checkDeckSet: (req, _res, next) => {
    if(!req.session.deck) {
      req.session.deck = [];
    }
    console.log(req.session.deck);
    next();
  },
  deckPage: (req, res) => {
    res.render('cardList', {
      cards: req.session.deck,
      title: 'Mon deck'
    });
  },
  addToDeck: async (req, res) => {
    const id = req.params.id;
    // check if card already
    const cardInDeck = req.session.deck.find(card => {
      return card.id === Number(id);
    });
    if(!cardInDeck && req.session.deck.length < 5) {
      try {
        const card = await dataMapper.getOneCard(id);
        req.session.deck.push(card);
      } catch(error) {
        console.error('hmm, an error occured:', error);
        res.status(500).send('Oops!');
      }
    }
    res.redirect('/deck');
  },
  removeFromDeck: (req, res) => {
    const id = req.params.id;
    req.session.deck = req.session.deck.filter(card => card.id !== Number(id));
    res.redirect('/deck');
  }
};

module.exports = deckController;