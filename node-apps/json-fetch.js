const fetch = require("node-fetch");
const http = require("http")

fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => console.log(json))

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("See your JSON in the console!");
}).listen(8080);