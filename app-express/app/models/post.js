var mongoose = require("./mongoose")

var post = mongoose.Schema({
	title: String,
	author: String,
	content: String,
	time: {type: Date, default: Date.now},
	comments: [{body: String, date: {type:Date, default: Date.now}, author: String, email: String}]
})

post.methods.show = function() {
	console.log(this.content);
}

post.methods.edit = function(title, content) {
	if (title != "")
		this.title = title;
	if (content != "")
		this.content = content;
	this.update();
}

post.methods.findByAuthor = function(author, callback) {
	return this.model('post').find({author: author}, callback);
}

var Post = mongoose.model("Post", post);

module.exports = Post;


