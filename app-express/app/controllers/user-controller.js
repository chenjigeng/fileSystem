var user = require("../models/user")
var fs = require("fs")
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
				res.send(User);
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

userCtrl.edit = function(req, res) {
	console.log(req.body); 
	user.update({_id:req.body._id}, {$set: req.body}, function(err, target) {
		if (err)  {
			console.log(err);
			return res.send(401);
		}
		console.log(target);
		res.send(target);
	})

}

userCtrl.uploadFile = function(req, res) {
	console.log("I am here");
	console.log(req);
	var file = req.files.file;
	console.log(file);
	var content;
	try {
		content = fs.readFileSync(file.path);
		console.log("enter here");
		console.log(content);
		var target = "public/img/" + req.body.username + ".jpg"
		fs.writeFileSync(target, content);
	}
	catch(err) {
		console.log(err);
	}
	res.send(200);
}