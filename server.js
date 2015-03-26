var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from  this is for Jenkins, work!\n');
}).listen(process.env.PORT);
