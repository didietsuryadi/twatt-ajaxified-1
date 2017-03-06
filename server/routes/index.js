var express = require('express');
var router = express.Router();
var controllers = require('../controllers/twitter')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});

router.post('/newtwatt', controllers.posting)
router.get('/twatt',controllers.feeder)

module.exports = router;
