var express = require('express');
var router = express.Router();
var userCtrl = require("../controllers/user-controller")
/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
router.get('/regist', function(req, res, next) {
	userCtrl.regist(req, res);
})
module.exports = router;
