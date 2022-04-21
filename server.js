const http = require('http');

const server= http.createServer((req, res) =>{
    res.end('Hello my server is running');
});

server.listen(process.env.PORT | 2004);