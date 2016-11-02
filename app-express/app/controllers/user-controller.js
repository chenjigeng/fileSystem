var mongoose = require("mongoose")
var user = require("../models/user").User
var File = require("../models/user").File
var fs = require("fs")
var _ = require("lodash");
var transform = require("../utils/transform.js")
var userCtrl = {};
module.exports = userCtrl;

userCtrl.regist = function(req, res) {
	user.find({email: req.body.email}, function(err, users) {
		if (users.length > 0) {
			return res.send("该邮箱已被注册");
		}
		else {
			var User = new user(req.body);
			User.save(function(err, Users) {
				if (err) return res.send(401);
				console.log("regist successfully");
				res.send(Users);
			})
		}
	})
}

userCtrl.login = function(req, res) {
	user.find({email: req.body.email, password: req.body.password}).populate("files").exec(function(err, user) {
		if(err) console.log("err");
		if (user.length > 0) {
			res.send(user);
		}
		else {
			return res.send(401);
		}
	})
}

//上传图片
userCtrl.uploadImage = function(req, res) {
	var file = req.files.file;
	var content;
	var username = req.body.username;

	try {
		if (_.isArray(file)) {
			file.forEach( function(element, index) {
				console.log(index);
				content = fs.readFileSync(element.path)
				var dir = "public/files/image/" + username;
				if (!fs.existsSync(dir)) {
					fs.mkdirSync(dir);
				}
				var target = dir + '/' + element.name;
				var newFile = {
					fileName : element.name,
					url: target,
					owner: req.body.userId,
					kind: 1
				}
				var newfile = new File(newFile);
				newfile.save(function(err, file) {
					if (err) {
						console.log(err)
					}
					else {
						user.findById(req.body.userId, function(err, User) {
							User.files.push(file._id);
							User.save(function(err) {
								if (!err) {
									console.log('success');
								}
							})
						})
					}
				})
				fs.writeFileSync(target, content);
			});
			res.send(200);
		}
	}
	catch (err) {
		console.log(err)
	}
}

userCtrl.edit = function(req, res) {
	user.update({_id:req.body._id}, {$set: req.body}, function(err, target) {
		if (err)  {
			console.log(err);
			return res.send(401);
		}
		res.send(target);
	})

}

//获取用户所上传的所有文件
userCtrl.getAllFiles = function(req, res) {
	console.log(req.body.id)
	console.log(req.query.id);
	
}

//上传文件
userCtrl.uploadFile = function(req, res) {
	console.log("Hello gird");
	var file = req.files.file;
	var content;
	var username = req.body.username;
	try {
		if (_.isArray(file)) {
			file.forEach( function(element, index) {
				content = fs.readFileSync(element.path);
				var dir = "public/files/docs/" + username;
				var dir1 = "public/files/pdfs/" + username;
				var target = "public/files/docs/" + username + "/" + element.name;
				var output = "public/files/pdfs/" + username + "/" + element.name;
				var type = element.name.substring(element.name.lastIndexOf(".") + 1, element.name.length);
	
				output = output.substring(0, output.lastIndexOf(".")) + ".pdf";
				var newFile = {
					fileName : element.name,
					url: target,
					pdfUrl: output,
					owner: req.body.userId,
					kind: 0
				}
				var newfile = new File(newFile);
				newfile.save(function(err, file) {
					if (err) {
						console.log(err)
					}
					else {
						user.findById(req.body.userId, function(err, User) {
							User.files.push(file._id);
							User.save(function(err) {
								if (!err) {
									console.log('success');
								}
							})
						})
					}
				})
				//若目录不存在，则创建目录
				if (!fs.existsSync(dir)) {
					fs.mkdirSync(dir);
				}
				if (!fs.existsSync(dir1)) {
					fs.mkdirSync(dir1);
				}
				fs.writeFileSync(target, content);
				transform(target, output, type);
			})
			res.send(200)
		}
		else {
			content = fs.readFileSync(file.path);
			var target = "public/files/docs/" + file.name;
			fs.writeFileSync(target, content);
			res.send(200);
			transform(file.name);
		}
	}
	catch(err) {
		console.log(err);
	}
}

userCtrl.logout = function(req, res) {
	res.session.email = null;
}

userCtrl.get = function(req, res) {
	console.log("enter files");
	user.findById(req.query.id).populate("files").exec(function(err, User) {
		if (err) res.send(err);
		else {
			res.send(User);
		}
	})
}

userCtrl.deleteFileById = function(req, res) {
	File.findById(req.params.fileId).populate("owner").exec(function(err, file) {
		User = file.owner;
		index = User.files.indexOf(file._id);
		User.files.splice(index, 1);
		user.update({_id:User._id}, {$set: User}, function(err, u) {
		});	
		File.remove({_id: req.params.fileId});
		res.send(200);
	})
}