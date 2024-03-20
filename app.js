const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Varsha');
    console.log(req);
});

server.listen(4000);