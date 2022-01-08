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
      text: 'SELECT * FROM "card" WHERE id=$1',
      values: [Number(id)]
    };
    return (await database.query(query)).rows[0];
  },
  getCardsByElement: async (element) => {
    const query = {
      text: 'SELECT * FROM "card" WHERE element',
    };
    if(element === 'null') {
      query.text += ' IS NULL';
    } else {
      query.values = [element],
      query.text += '=$1';
    }
    //! log
    console.log('query:', query);
    return (await database.query(query)).rows;
  },
  getCardsByLevel: async (level) => {
    const query = {
      text: 'SELECT * FROM "card" WHERE level=$1',
      values: [Number(level)]
    };
    return (await database.query(query)).rows;
  },
  getCardsByValues: async (direction, value) => {
    const query = {
      text: `SELECT * FROM "card" WHERE 
      $1='north' AND Value_north >= $2 
      OR $1='south' AND Value_south >= $2
      OR $1='east' AND Value_east >= $2
      OR $1='west' AND Value_west >= $2`,
      values: [direction, value]
    };
    return (await database.query(query)).rows;
  },
  getCardsByname: async (name) => {
    const query = {
      text: 'SELECT * FROM "card" WHERE name LIKE $1',
      values: [`%${name}%`]
    };
    return (await database.query(query)).rows;
  }
};


module.exports = dataMapper;