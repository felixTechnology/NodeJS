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
/*webserver that does different things depending on which route we enter*/
/*
const http = require('http');

const server = http.createServer(function (req, res) {

    //console.log(req)
    //console.log(req.url, req.method, req.headers);

    const url = req.url;
    if(url === '/'){
        res.setHeader('content-Type','text/html');
        res.write(`<html>`)
        res.write(`<head><title>Enter Message</title></head>`)
        res.write(`<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="button">Send</button></form></h1></body>`)
        res.write(`</html>`)

         return res.end();
    }
    res.setHeader('content-Type','text/html');
    res.write(`<html>`)
    res.write(`<head><title>My FirstPage</title></head>`)
    res.write(`<body><h1>Hello from my Node.js</h1></body>`)
    res.write(`</html>`)

    res.end();

//process.exit();
});

server.listen(3000);
*/
/******************************************************************************************************************************/

/*const http = require('http');
const fs = require('fs');//allows us to with with file system

const server = http.createServer(function (req, res) {

    //console.log(req)
    //console.log(req.url, req.method, req.headers);

    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('content-Type','text/html');
        res.write(`<html>`)
        res.write(`<head><title>Enter Message</title></head>`)
        res.write(`<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="button">Send</button></form></h1></body>`)
        res.write(`</html>`)

        return res.end();
    }
    /!*
    * The condition below is to ensure we handle POST request and not GET
    * We enter into this consition if we have POST request to /message which has been created for the form
    * We want to redirect the USER back  to slash nothing. Not to leave USER on /message
    * create a new file and store the message the user entered in it
    * *!/
    if(url === '/message' && method === 'POST' ){
        fs.writeFileSync('message.txt','JOY GHANA');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('content-Type','text/html');
    res.write(`<html>`)
    res.write(`<head><title>My FirstPage</title></head>`)
    res.write(`<body><h1>Hello from my Node.js</h1></body>`)
    res.write(`</html>`)

    res.end();

//process.exit();
});

server.listen(3000);*/


/*************************************************************************************************************************/
/*
const http = require('http');
const fs = require('fs');//allows us to with with file system

const server = http.createServer(function (req, res) {

    //console.log(req)
    //console.log(req.url, req.method, req.headers);

    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('content-Type','text/html');
        res.write(`<html>`)
        res.write(`<head><title>Enter Message</title></head>`)
        res.write(`<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="button">Send</button></form></h1></body>`)
        res.write(`</html>`)

        return res.end();
    }
    /!*
    * The condition below is to ensure we handle POST request and not GET
    * We enter into this consition if we have POST request to /message which has been created for the form
    * We want to redirect the USER back  to slash nothing. Not to leave USER on /message
    * create a new file and store the message the user entered in it
    * *!/
    if(url === '/message' && method === 'POST' ){
         const body = [];
        req.on('data', (chunk)=>{//on method allows us to listen to data event
            console.log(chunk)
            body.push(chunk);

        });
        /!*
        * Understand that the (request on) or code like (http create server) are some examples Node.js uses a pattern
        * where you pass a function to a function and Node will execute these passed functions later point in time which we call asynchronously
        * Note, it is not always the case that a passed in function execute later time
        * In a case of async node wont immediately run that function instead when it encounters the (request on) line below it simply
        * add new event listener internally and manages the even listeners internally .
        * For the (end event) on the request which will be triggered automatically once Node.js is done passing the request .This is what NODE.JS does.
        * It will then call the (end request) function for you. It is like Node.js having internal registry of event and listeners to these events
        * And a function like (req.on) (end) is a listener.
        * So when Node.js is done passing the request it will go through the registry and see if it's done witht the request and then send the
        * (end) event
        * As the (return res.end()) is moved into the call-back function, the flow is as below
        * - It will reach the IF-STATEMENT , and if condtion are are met it will go inside of it
        * -It will then register the two handlers (reg.on('data')) and (req.on('end')) and not immediately execute the two functions handlers
        * -instead the functions are registered internally in its event emitter registry
        * -and then it will jump to the next line (res.setHeader .....) ..so when the server is restart
        * -With the (status code) moved inside the call-back function, it will let the status not to be passed immediately
        * -when you restart the server and pass a value as a request from the web browser form.
        * -Because Node.js will not execute the call-back function rightaway and therefore thr (return res-end()) statement will not quit the
        * - entire condition it finds itself , instead it just registers this call-back and immediately moves onto the next lines
        * -and eventually execute the call-back at a time it will be too late and that will not let the header to be set.
        * -Because it has executed the (res-setHeader) and parsing of the request is finished and executed the code and again tried to send a response
        * -which will be too late
        * -To avoid this from happening apply return on req.on('end')
        * -which will prevent the res.setHeader from executed again .
        *writeFileSync - the sync means synchronous which is a special method which blocks code execution until this file is created
        * -working with files is available in two modes (synchronous Mode) to block execution of next line of code until file is done
        * - The next line which is short text entered is super fast
        * -assuming of huge files (couple of hundreds of megabytes) it will mean everything has to be read till done before you move to next line of code
        * -new incoming request wont be done until that operation is done . There using (Sync) for writeFile shouldnt be entertained .Use it (writeFileSync) when you have short operation
        * -Use (writeFile) which does not only accept (path & data) but also accept third argument like a call back. that is a function which has to be executed when done
        * -(Example: fs.writeFile('message.txt', 'you are great', ()=>{})
        *
        * *!/
         return req.on('end', ()=>{//this will be fired onw its done parsing the incoming request data

            const parseBody = Buffer.concat(body).toString();
            //console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message);//writefile

            /!*fs.writeFileSync('message.txt','JOY GHANA');*!/
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
        /!*!/!*fs.writeFileSync('message.txt','JOY GHANA');*!/
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();*!/
    }
    res.setHeader('content-Type','text/html');
    res.write(`<html>`)
    res.write(`<head><title>My FirstPage</title></head>`)
    res.write(`<body><h1>Hello from my Node.js</h1></body>`)
    res.write(`</html>`)

    res.end();

//process.exit();
});

server.listen(3000);
*/
/*********************************************************************************************************************************************************/

const http = require('http');
const fs = require('fs');//allows us to with with file system

const server = http.createServer(function (req, res) {

    //console.log(req)
    //console.log(req.url, req.method, req.headers);

    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('content-Type','text/html');
        res.write(`<html>`)
        res.write(`<head><title>Enter Message</title></head>`)
        res.write(`<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="button">Send</button></form></h1></body>`)
        res.write(`</html>`)

        return res.end();
    }
    /*
    * The condition below is to ensure we handle POST request and not GET
    * We enter into this consition if we have POST request to /message which has been created for the form
    * We want to redirect the USER back  to slash nothing. Not to leave USER on /message
    * create a new file and store the message the user entered in it
    * */
    if(url === '/message' && method === 'POST' ){
        const body = [];
        req.on('data', (chunk)=>{//on method allows us to listen to data event
            console.log(chunk)
            body.push(chunk);

        });
        /*
        * Understand that the (request on) or code like (http create server) are some examples Node.js uses a pattern
        * where you pass a function to a function and Node will execute these passed functions later point in time which we call asynchronously
        * Note, it is not always the case that a passed in function execute later time
        * In a case of async node wont immediately run that function instead when it encounters the (request on) line below it simply
        * add new event listener internally and manages the even listeners internally .
        * For the (end event) on the request which will be triggered automatically once Node.js is done passing the request .This is what NODE.JS does.
        * It will then call the (end request) function for you. It is like Node.js having internal registry of event and listeners to these events
        * And a function like (req.on) (end) is a listener.
        * So when Node.js is done passing the request it will go through the registry and see if it's done witht the request and then send the
        * (end) event
        * As the (return res.end()) is moved into the call-back function, the flow is as below
        * - It will reach the IF-STATEMENT , and if condtion are are met it will go inside of it
        * -It will then register the two handlers (reg.on('data')) and (req.on('end')) and not immediately execute the two functions handlers
        * -instead the functions are registered internally in its event emitter registry
        * -and then it will jump to the next line (res.setHeader .....) ..so when the server is restart
        * -With the (status code) moved inside the call-back function, it will let the status not to be passed immediately
        * -when you restart the server and pass a value as a request from the web browser form.
        * -Because Node.js will not execute the call-back function rightaway and therefore thr (return res-end()) statement will not quit the
        * - entire condition it finds itself , instead it just registers this call-back and immediately moves onto the next lines
        * -and eventually execute the call-back at a time it will be too late and that will not let the header to be set.
        * -Because it has executed the (res-setHeader) and parsing of the request is finished and executed the code and again tried to send a response
        * -which will be too late
        * -To avoid this from happening apply return on req.on('end')
        * -which will prevent the res.setHeader from executed again .
        *writeFileSync - the sync means synchronous which is a special method which blocks code execution until this file is created
        * -working with files is available in two modes (synchronous Mode) to block execution of next line of code until file is done
        * - The next line which is short text entered is super fast
        * -assuming of huge files (couple of hundreds of megabytes) it will mean everything has to be read till done before you move to next line of code
        * -new incoming request wont be done until that operation is done . There using (Sync) for writeFile shouldnt be entertained .Use it (writeFileSync) when you have short operation
        * -Use (writeFile) which does not only accept (path & data) but also accept third argument like a call back. that is a function which has to be executed when done
        * -(Example: fs.writeFile('message.txt', 'you are great', ()=>{}). the call back receives an (err) object which will be null if no error occurs
        *
        * */
        return req.on('end', ()=>{//this will be fired onw its done parsing the incoming request data

            const parseBody = Buffer.concat(body).toString();
            //console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message, ()=>{
                /*fs.writeFileSync('message.txt','JOY GHANA');*/
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();

            });//writefile

           /* /!*fs.writeFileSync('message.txt','JOY GHANA');*!/
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();*/
        })
        /*/!*fs.writeFileSync('message.txt','JOY GHANA');*!/
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();*/
    }
    res.setHeader('content-Type','text/html');
    res.write(`<html>`)
    res.write(`<head><title>My FirstPage</title></head>`)
    res.write(`<body><h1>Hello from my Node.js</h1></body>`)
    res.write(`</html>`)

    res.end();

//process.exit();
});

server.listen(3000);
