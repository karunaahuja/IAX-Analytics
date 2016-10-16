var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http!\n');
});
console.log('Server listening on port 8080...');
server.listen(8080);
