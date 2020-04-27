var express = require('express');
var router = express.Router();
var crypto = require('crypto');
const DB = require('../modules/DBhelper');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ msg: 'Test' });
});
router.post('/login', function (req, res, next) {
  // console.log(req);
  const {
    body: { account, password },
  } = req;
  // console.log('account' + account, 'password' + password);
  DB.getUserData(account)
    .then(result => {
      //解構賦職重新命名account password ,分辨一個是req body 來的account 一個是DB撈出來的結果  作比較
      let { account: DBaccount, password: DBpassword, address, email, name, phone } = result[0];
      if (account === DBaccount && password === DBpassword) {
        res.json({ name, address, email, phone });
      } else {
        res.json({ msg: 'Login Failed' });
      }
    })
    .catch(err => {
      console.log(err);
      res.json({ msg: 'Login Failed', err });
    });
});

router.post('/create', function (req, res, next) {
  const {
    body: { account, password, name, address, email, phone },
  } = req;
  const salt = crypto.randomBytes(16).toString('base64');
  DB.createUser(account, password, salt, name, address, email, phone)
    .then(result => {
      if (result) {
        const { userId, profileId, name } = result;
        res.json({ msg: `insert Name : ${name} userId : ${userId} ProfileId: ${profileId}` });
        return;
      }
    })
    .catch(err => {
      res.status(400).json({ msg: err });
      console.log(err);
    });
});

module.exports = router;
