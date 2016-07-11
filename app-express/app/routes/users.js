var express = require('express');
var router = express.Router();
var userCtrl = require("../controllers/user-controller")
/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
router.post('/regist', function(req, res) {
	console.log("enter");
	console.log("hello");
	userCtrl.regist(req, res);
})

router.post("/login", function(req, res) {
	userCtrl.login(req, res);
})
module.exports = router;
