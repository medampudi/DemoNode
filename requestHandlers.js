/**
 * New node file
 */
 var querystring = require("querystring");
 
 //var exec = require("child_process").exec;
 
function start(response,postData) {
  console.log("Request handler 'start' was called.");
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

  
  
//  var content = "empty";
  
//  exec("find /",
//  		{timeout: 10000, maxBuffer: 20000*1024},
// 		function(error,stdout,stderr){
  	response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end(); 
  
 
  
  //return content;
  
//  function sleep(milliseconds){
//  	var startTime = new Date().getTime();
// 	while (new Date().getTime() < startTime + milliseconds);
//   }
//	sleep(10000); 
// 
//  return "Hello Start";
}

function upload(response,postData) {
  console.log("Request handler 'upload' was called.");
   response.writeHead(200, {"Content-Type": "text/plain"});
   response.write("You've sent: "+ querystring.parse(postData).text);   
   response.end();
}

exports.start = start;
exports.upload = upload;