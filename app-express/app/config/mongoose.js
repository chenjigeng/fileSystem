var mongoose = require("mongoose");
var config = require("./config")
var blueBird = require("bluebird")

module.exports = function() {
  console.log("hello");

  mongoose.Promise = blueBird;
  db = mongoose.connect(config.host)


	mongoose.connection.on("error", console.error.bind(console, "connection error"))
	mongoose.connection.on("open", function(callback) {
		console.log("open!");
	})

  user = require("../models/user")
  post = require("../models/post")
	return db;
}