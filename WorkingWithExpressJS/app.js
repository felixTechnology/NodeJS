
const http = require('http');
/*const fs = require('fs');*///allows us to with with file system

const express = require('express');

const app = express();


//middleware
app.use(  (req,res,next) =>  {

console.log('In the middleware');
next();//allows the request to continue to te next middleware in line

})

app.use(  (req,res,next) =>  {

    console.log('In the another middleware');
    next();

})

const server = http.createServer(app);

server.listen(3000);
