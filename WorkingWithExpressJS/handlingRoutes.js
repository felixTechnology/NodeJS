
/*const http = require('http');*/
/*const fs = require('fs');*///allows us to with with file system

const express = require('express');

const app = express();


app.use('/',  (req,res,next) =>  {

    console.log('In the another middleware');
    next();



})
app.use('/add-product',  (req,res,next) =>  {

    console.log('In the another middleware');
    res.send(`<h1>Add your product</h1>` ) //this (send();) is a new utility function, which allows us to send a response to continue to te next middleware in line



})

app.use('/',  (req,res,next) =>  {

    console.log('In  middleware');
    res.send(`<h1>Hello this from Express</h1>` ) //this (send();) is a new utility function, which allows us to send a response to continue to te next middleware in line



})

/*const server = http.createServer(app);

server.listen(3000);*/

app.listen(3000);