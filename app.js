var express = require('./app-express/app/config/express');
var mongoose = require("./app-express/app/config/mongoose")
var path = require("path")

app = express();
db = mongoose();


var port = 8080;
app.listen(port, function() {
  console.log('server is listening on port ' + port);
});

