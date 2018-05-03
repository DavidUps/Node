var http = require('http');
var fs   = require('fs');

http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.write(data);
        res.end();
    });
    //
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    //
    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });
}).listen(8080);
