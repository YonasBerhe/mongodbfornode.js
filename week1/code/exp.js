var http = require('http');

//logic to tell server what to do when it gets a request
// request argument for actually storing the request\6  from client. response argument for doing something with that request
var server = http.createServer(function (request, response ) {
    //giving a bit of info about the line of code below 200 means that server reponds with a successful page rendering
    response.writeHead(200, {'Content Type' : 'text/plain'});
    response.end('Hello World'\n);

});

server.listen(8000);
console.log('Hey go to localhost800');
