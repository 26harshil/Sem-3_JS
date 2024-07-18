const http = require('http');

 server =  http.createServer((req , res) => {
    res.end("hello my friend");
});
server.listen(5080);
