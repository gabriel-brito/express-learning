const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Hello World');
})

router.get('/json', (req, res, next) => {
    const data = {
      greetings: 'Hello',
      fuckingShit: 'test'
    };

    res.json(data);
});

router.get('/home', (req, res, next) => {
  res.render('home', null);
});

module.exports = router;