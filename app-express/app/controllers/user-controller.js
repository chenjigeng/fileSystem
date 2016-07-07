var user = require("../models/user")

var userCtrl = {};
module.exports = userCtrl;

userCtrl.regist = function(req, res) {
	var User = new user(req.body.user);
	User.save(function(err, User) {
		if (err) return res.send(401);
		console.log("regist successfully");
		res.send(true);
	})
}