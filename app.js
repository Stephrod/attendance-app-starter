const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const names = require('./routes/names');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use('names', names);
app.use(bodyParser.urlencoded({ extended: false}));

const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`));
