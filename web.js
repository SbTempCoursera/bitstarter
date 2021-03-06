var express = require('express');

var app = express.createServer(express.logger());
app.use(express.static(__dirname));
var fs = require('fs');

app.get('/', function(request, response) {
    var buff = fs.readFileSync("index.html");
    response.send(buff.toString());
  //response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
