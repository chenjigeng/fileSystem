var mongoose = require("mongoose");
var config = require("./config/config")
console.log(config.host);
mongoose.connect(config.host);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(callback) {
	console.log("open!");
})

module.exports = mongoose;