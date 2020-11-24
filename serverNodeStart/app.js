/*const http = require('http');*/

/*function rqListener(request, response){

}

http.createServer(rqListener);*///This createSever method takes request Listener as an argument
/***********************************************************************************************************************/
/*second option - receiving request and send response to the client*/
/*
const http = require('http');

const server = http.createServer(function (req, res) {
/!*console.log(req);*!/
    console.log(req.url, req.method, req.headers);
    res.setHeader('content-Type','text/html');
    res.write(`<html>`)
    res.write(`<head><title>My FirstPage</title></head>`)
    res.write(`<body><h1>Hello from my Node.js</h1></body>`)
   res.write(`</html>`)

    res.end();

//process.exit();
});

server.listen(3000);*/

/************************************************************************************************************************/