var mongoose = require("./mongoose")

var userSchema = new mongoose.Schema({
	name: String,
	password: String,
	email: String,
	phone: String,
	link: String,
	url: String
})

var User = mongoose.model("User", userSchema);

module.exports = User;