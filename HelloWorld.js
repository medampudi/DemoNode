/**
 * New node file
 */
// Testing out concurrency by printing messages to console log. 

var http = require("http");
function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Server has started.");



//We are creating a server for to listen at port 8888 and print out hello world at the location. 

//var http = require('http');
//
//http.createServer(function(request, response){
//    response.writeHead(200,{"Content-Type":"text/plain"});
//    response.write('hello world');
//    response.end();
//
//}).listen(8888);




// A console program to get a log at the console without any server or anything like that. 
//console.log('Hello world');