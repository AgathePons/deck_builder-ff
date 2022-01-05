const dotenv = require('dotenv');
const express = require('express');
dotenv.config();

const PORT = process.env.PORT || 1234;
const router = require('./app/router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

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
