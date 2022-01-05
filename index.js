const dotenv = require('dotenv');
const express = require('express');
const session = require('express-session');
dotenv.config();

const PORT = process.env.PORT || 1234;
const router = require('./app/router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(session({
  // doc express-session : npmjs.com/package/express-session
  secret: 'MonSup3rS!t3d3F!gur!nes',
  resave: true,
  saveUninitialized: true,
  cookie : {
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));

app.use(express.static('public'));

app.use(router);

app.use((req, res) => {
  res.status(404).render('notFound', {
    title: '404 not found'
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
