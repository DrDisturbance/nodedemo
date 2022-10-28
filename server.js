// server.js
const http = require("http");

http.createServer(function(request, response) {    
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello, Node.js!</h1>");    
   response.write("<h2>Josh Harvey - x87b678</h2>");    
   response.write("<p>Running Node Server on port 3071</p>");    
   response.end();
}).listen(3071);