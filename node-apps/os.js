var http = require('http');

var os = require('os');
let platform = os.platform();
let architecture = os.arch();
let message = `Hello computer. You're using a ${platform} system with ${architecture} architecture`;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(message);
}).listen(8080);