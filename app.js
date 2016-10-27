const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const namesRoutes = require('./routes/names');
const ejs = require('ejs');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use('names', names);
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/names', namesRoutes);

app.get('/*', function(req, res, next) {
  res.redirect('/names');
});

const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`));
