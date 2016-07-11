var user = require("../models/user")

var userCtrl = {};
module.exports = userCtrl;

userCtrl.regist = function(req, res) {
	console.log("Hello, I am registing");
	console.log(req.body);
	user.find({email: req.body.email}, function(err, users) {
		if (users.length > 0) {
			return res.send("该邮箱已被注册");
		}
		else {
			var User = new user(req.body);
			User.save(function(err, User) {
				if (err) return res.send(401);
				console.log("regist successfully");
				res.send(true);
			})
		}
	})
}

userCtrl.login = function(req, res) {
	console.log(req.body);
	user.find({email: req.body.email, password: req.body.password}, function(err, user) {
		if(err) console.log("err");
		if (user.length > 0) {
			res.send(user);
		}
		else {
			return res.send(401);
		}
		console.log(user);
	})
}