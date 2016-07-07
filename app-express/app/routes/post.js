var express = require('express');
var router = express.Router();
var Post = require("../controllers/post-controller");
/* GET home page. */
router.get('/', function(req, res, next) {
	Post.get(function(err, data) {
		res.send(data);
	})
//    res.render("Hello");
});


module.exports = router;
