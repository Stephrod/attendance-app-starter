const express = require('express');
const router = express.Router();

const names = {
  Rick: 1
};

router.get('/', function(req, res, next) {
  return res.render('names.ejs', { names: names });
});

router.post('/', function(req, res, next){
  const name = req.body.name;

  if (!names[name]) {
    names[name] = 0;
  }

  names[name] += 1;

  res.redirect('/names');
});

module.exports = router;
