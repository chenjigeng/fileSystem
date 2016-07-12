var post = require("../models/post")
var PostCtrl = {};

module.exports = PostCtrl;

PostCtrl.get = function(callback) {
	post.find(callback);
}

PostCtrl.create = function(req, res) {
	var Post = new post(req.body);
	console.log(Post);
	Post.save(function(err, newpost) {
		if (err) {
			console.log(error);
			return res.send(401);
		}
		console.log(newpost);
		res.send(true);
	})
}

PostCtrl.getById = function(req, res) {
	post.find({author: req.params.id}, function(err, target) {
		if (err) {
			console.log(err);
			return res.send(401);
		}
		res.send({data:target});
	})
}

PostCtrl.show = function(req, res) {
	post.find({_id: req.params.id}, function(err, target) {
		if (err) {
			console.log(err);
			return res.send(401);
		}
		res.send({data:target});
	})
}