var http = require('http');

var os = require('os');
let platform = "Platform: " + os.platform();
let architecture = "Architecture: " + os.arch();
let message = "Hello computer. You're using " + platform + architecture;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(message);
}).listen(8080);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`What's your name?`, (name) => {
    console.log(`Hi ${name}!`)
    readline.close()
  })  