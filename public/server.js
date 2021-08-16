/*const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  /*if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("../public/home.html", "UTF-8").pipe(res);
    res.end();

  if (req.url === "/") {
    fs.readFile("../public/home.html", function (error, data) {
      if (error) {
        res.writeHead(404);
        res.write("Contents you are looking are Not Found");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(3000, function () {
  console.log("Server running at 3000 ");
});
*/

var http = require("http");
var fs = require("fs");
var path = require("path");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      fs.readFile(__dirname + "/home.html", "UTF-8", function (err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    } else if (req.url.match(".css")) {
      var cssPath = path.join(__dirname, req.url);
      var fileStream = fs.createReadStream(cssPath, "UTF-8");
      res.writeHead(200, { "Content-Type": "text/css" });
      fileStream.pipe(res);
    } else if (req.url.match(".jpg")) {
      var imagePath = path.join(__dirname, req.url);
      var fileStream = fs.createReadStream(imagePath);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      fileStream.pipe(res);
    } else if (req.url === "/editor") {
      fs.readFile("../public/editor.html", "UTF-8", function (err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("No Page Found");
    }
  })
  .listen(3000);
