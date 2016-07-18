var express = require('express');
var router = express.Router();
var userCtrl = require("../controllers/user-controller")
multiparty = require('connect-multiparty')
multipartyMiddleware = multiparty()
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

router.post("/edit", function(req, res) {
	console.log("enter edit here");
	userCtrl.edit(req, res);
})

router.post("/uploadFile",multipartyMiddleware, function(req, res) {
	userCtrl.uploadFile(req, res);
})

router.get("/:email", function(req, res) {
	userCtrl.get(req, res);
})
module.exports = router;
