var mongoose = require("mongoose")
var Schema = mongoose.Schema
var userSchema = new mongoose.Schema({
	name: String,
	password: String,
	email: String,
	phone: String,
	link: String,
	url: String,
  files: [{type: Schema.Types.ObjectId, ref: "File"} ]
})

var fileSchema = new mongoose.Schema({
  url: String,
  pdfUrl: String,
  kind: String,
  fileName: String,
  owner: {type: Schema.Types.ObjectId, ref: "User"}
})

var User = mongoose.model("User", userSchema);
var File = mongoose.model("File", fileSchema);

module.exports = {
  User: User,
  File: File
}