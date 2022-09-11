var express = require('express');
var router = express.Router();

const json = require('../dist/manifest.json');

const indexJSFile = json['index.js'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    appJSFile: indexJSFile,
  });
});

module.exports = router;
