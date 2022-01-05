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
  }
};


module.exports = dataMapper;