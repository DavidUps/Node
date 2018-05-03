var http = require('http');
var date = require('./dateModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('The date is '+date.myDateTime() + '\n');
    res.write('\n The World is a Vampire')
    res.end();
}).listen(8080);
