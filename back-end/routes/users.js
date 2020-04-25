var express = require('express');
var router = express.Router();
var crypto = require('crypto');
const DB = require('../modules/DBhelper');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ msg: 'Test' });
});
router.post('/login', function (req, res, next) {
  console.log(req);
  const {
    body: { account, password },
  } = req;
  console.log('account' + account, 'password' + password);
  if (account === 'admin' && password === 'admin') {
    res.json({ msg: 'Login Success' });
  } else {
    res.json({ msg: 'Login Failed' });
  }
});

router.post('/create', function (req, res, next) {
  const {
    body: { account, password, name, address, email, phone },
  } = req;
  const salt = crypto.randomBytes(16).toString('base64');
  DB.createUser(account, password, salt, name, address, email, phone)
    .then(result => {
      if (result) {
        res.json({ msg: `insert ${JSON.stringify(result)}` });
        return;
      }
    })
    .catch(err => {
      res.status(400).json({ msg: err });
      console.log(err);
    });
});

module.exports = router;
