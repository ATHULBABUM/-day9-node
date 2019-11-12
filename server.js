/*var ahttp=require('http');
var server= ahttp.createServer(function(req,resp){
    resp.write("<h1>hello world</h1>");
  resp.end("hello");
});
server.listen(3000);*/

/*var ahttp=require('http');
var server= ahttp.createServer(function(req,resp){
    resp.write("<h1>hello world</h1>");
  resp.end("hello");
});
server.listen(3000);
console.log(server.address());*/

var ahttp=require('http');
var server= ahttp.createServer(function(req,resp){
    resp.write("<h1>hello world</h1>");
  resp.end("hello");
});
server.listen(3000);
console.log(server);//can see server as an object in http
