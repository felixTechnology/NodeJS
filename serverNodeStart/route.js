const fs = require('fs');

const requestHandler = (req, res)=> {

    const url = req.url;
    const method = req.method;

    if (url === '/') {

        res.write(`<html>`)
        res.write(`<head><title>Enter Message</title></head>`)
        res.write(`<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="button">Send</button></form></h1></body>`)
        res.write(`</html>`)

        return res.end();
    }


    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {//on method allows us to listen to data event
            console.log(chunk)
            body.push(chunk);

        });

        return req.on('end', () => {//this will be fired onw its done parsing the incoming request data

            const parseBody = Buffer.concat(body).toString();
            //console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFileSync('info.txt', message, () => {
                /*fs.writeFileSync('message.txt','JOY GHANA');*/
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();

            })
        })

    }
    res.setHeader('content-Type', 'text/html');
    res.write(`<html>`)
    res.write(`<head><title>My FirstPage</title></head>`)
    res.write(`<body><h1>Hello from my Node.js</h1></body>`)
    res.write(`</html>`)

    res.end();
}
/*
module.exports = requestHandler;*/
/*module.exports ={
    handler: requestHandler,
    someText: 'Some hard coded text'
}*/

module.exports.handler = requestHandler;
module.exports.someText = 'Some hard coded text';