var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var send_string = fs.readFileSync("index.html").toString();

app.get('/', function(request, response) {
  response.send(send_string);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
