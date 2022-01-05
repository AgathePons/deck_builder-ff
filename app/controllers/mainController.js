const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: (req, res) => {
    dataMapper.getAllCards( (err, results) => {
      if(err) {
        console.error(err);
        return;
      } 
      res.render('cardList', {
        cards: results.rows,
        title: 'Liste des cartes'
      })
    });
  },
  cardDetail: async (req, res, next) => {
    const id = req.params.id;
    try {
      const card = await dataMapper.getOneCard(id);
      //! log
      console.log(card);
      if(card) {
        res.render('cardDetail', {
          card,
          title: 'Détail d\'une carte'
        });
      } else {
        next();
      }
    } catch(error) {
      console.error('hmm, an error occured:', error);
      res.status(500).send('Oops!');
    }
  }
};

module.exports = mainController;