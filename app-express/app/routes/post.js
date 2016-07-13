var express = require('express');
var router = express.Router();
var Post = require("../controllers/post-controller");
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.params.id);
	console.log("enter");
	Post.get(function(err, data) {
		res.send(data);
	})
//    res.render("Hello");
});

router.post("/create", function(req, res, next) {
	Post.create(req, res);
})
 
router.get("/get/:id", function(req, res, next) {
	console.log(req.params.id);
	console.log("enter here");
	Post.getById(req, res);
})

router.get("/show/:id", function(req, res, next) {
	console.log(req.params.id);
	Post.show(req, res);
})

router.get("/remove/:id", function(req, res, next) {
	Post.remove(req, res);
})

router.post("/save", function(req, res) {
	Post.save(req, res);
})
module.exports = router;
