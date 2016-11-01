var express = require('./app-express/app/config/express');
var mongoose = require("./app-express/app/config/mongoose")
var path = require("path")

db = mongoose();

app = express();
var port = 8080;
app.listen(port, function() {
  console.log('server is listening on port ' + port);
});

