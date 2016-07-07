var post = require("../models/post")
var PostCtrl = {};

module.exports = PostCtrl;

PostCtrl.get = function(callback) {
	post.find(callback);
}
