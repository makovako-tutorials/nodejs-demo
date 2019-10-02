if (false) { // example of custom module usage
    const Person = require('./person');
    const person1 = new Person("john", 20);
    person1.greeting();
}

if (false) { // example of event emitter

    const Logger = require('./logger');

    const logger = new Logger();

    logger.on('message', (data) => console.log('Called Listener: ', data));

    logger.log('Hello world')
}

if (false) { // example of custom web server // inefficient
    const http = require('http');
    const path = require('path');
    const fs = require('fs');
    const server = http.createServer((req, res) => {
        if (req.url === '/') {

            fs.readFile(path.join(__dirname, '/public', 'index.html'), (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': "text/html" }); // write to header
                res.end(content);
                // res.end('<h1>Homepage</h1>'); // shortcut for write and end
            });
        } else if (req.url === '/about') {
            fs.readFile(path.join(__dirname, '/public', 'about.html'), (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': "text/html" }); // write to header
                res.end(content);
            });
        } else if (req.url === '/api/users') {
            const users = [
                { name: 'Bob', age: 20},
                { name: 'John', age: 30}
            ];
            res.writeHead(200, { 'Content-Type': "application/json" }); // write to header
            res.end(JSON.stringify(users));
        }
    });
    const PORT = process.env.PORT || 5000; // system decides port, if not found use 5000
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

if (true) { // web server with file path dynamic
    const http = require('http');
    const path = require('path');
    const fs = require('fs');
    const server = http.createServer((req, res) => {
        // build filepath
        let filePath = path.join(__dirname, '/public', req.url === '/' ? 'index.html' : req.url); //if root load index esle requested file
        // extension of file
        let extName = path.extname(filePath);
        // initial contenttype
        let contentType = 'text/html';
        //check ext and set content type
        switch (extName) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
        }

        // read file
        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code == 'ENOENT') { // page is not found as a file, i want to load error page
                    fs.readFile(path.join(__dirname,'/public','404.html'), (err, content) => {
                        res.writeHead(200, { 'Content-Type': "text/html" }); // write to header
                        res.end(content, 'utf8')
                    });
                } else {
                    // some server error
                    res.writeHead(500);
                    res.end(`Server errorL ${err.code}`);
                }
            } else { //success
                res.writeHead(200, { 'Content-Type' : contentType});
                res.end(content, 'utf8');
            }

        });

    });
    const PORT = process.env.PORT || 5000; // system decides port, if not found use 5000
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}