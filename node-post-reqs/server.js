//Fill in vars here
var http = require('http') /* Missing require statment */,
    fs = require('fs')/* Missing require statment */,
    url = require('url')/* Missing require statment */

http.createServer(function (request, response) {
  var path = url.parse(request.url, true).pathname;
  
  if (request.method === 'POST') {
    /*========YOUR CODE HERE=========*/
    if(path === '/hifive'){
      fs.readFile("./assets/hifive.jpg", 
        function(err, data){
          if(err){
            throw err;
          }else{         
            response.end(data)
          }
        })
    }
//
    if(path === '/lowfive'){
      fs.readFile("./assets/lowfive.jpg", 
        function(err, data){
          if(err){
            throw err;
          }else{
            response.end(data)
          }
        })
    }

  } else if (request.method === 'GET') {
    if(path === '/'){
      response.writeHead(200,{'Content-Type':'text/html'});
      fs.readFile(__dirname + '/index.html', function(err, data){
        if(err) console.log(err);
        response.end(data);
      });
    }
  } else {
    response.end(404);
  }

}).listen(4568, '127.0.0.1');

console.log('Listening...');
