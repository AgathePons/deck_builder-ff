const database = require('./database');

const dataMapper = {

  getAllCards: function (callback) {
    const query = {
      text : 'SELECT * FROM "card"'
    };
    database.query(query, callback);
  },
  getOneCard: async (id) => {
    const query = {
      text: `SELECT * FROM "card" WHERE id=${Number(id)}`
    };
    return (await database.query(query)).rows[0];
  },
  getCardsByElement: async (element) => {
    const query = {
      text: 'SELECT * FROM "card" WHERE element'
    };
    if(element === 'null') {
      query.text += ' IS NULL';
    } else {
      query.text += `='${element}'`;
    }
    //! log
    console.log('query:', query);
    return (await database.query(query)).rows;
  },
  getCardsByLevel: async (level) => {
    const query = {
      text: `SELECT * FROM "card" WHERE level=${Number(level)}`
    };
    return (await database.query(query)).rows;
  }
};


module.exports = dataMapper;