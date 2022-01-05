const dataMapper = require('../dataMapper.js');

const searchController = {
  searchPage: (_req, res) => {
    res.render('search');
  },
  searchByElement: async (req, res) => {
    const element = req.query.element;
    //! log
    console.log(req.query);
    try {
      const cards = await dataMapper.getCardsByElement(element);
      if(cards) {
        res.render('cardList', {
          cards,
          title: 'Résultat de la recherche'
        });
      } else {
        res.render('search');
      }
    } catch(error) {
      console.error('hmm, an error occured:', error);
      res.status(500).send('Oops!');
    }
  },
  searchByLevel: async (req, res) => {
    const level = req.query.level;
    try {
      const cards = await dataMapper.getCardsByLevel(level);
      if(cards) {
        res.render('cardList', {
          cards,
          title: 'Résultat de la recherche'
        });
      } else {
        res.render('search');
      }
    } catch(error) {
      console.error('hmm, an error occured:', error);
      res.status(500).send('Oops!');
    }
  }
};

module.exports = searchController;