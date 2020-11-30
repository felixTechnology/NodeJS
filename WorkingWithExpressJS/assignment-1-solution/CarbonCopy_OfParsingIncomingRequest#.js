
/*const http = require('http');*/
/*const fs = require('fs');*///allows us to with with file system

const express = require('express');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',  (req,res,next) =>  {


    /*res.send(`<h1>Add your product</h1>` ) *///this (send();) is a new utility function, which allows us to send a response to continue to te next middleware in line
    res.send(`<html lang="fr"><form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form></html>` )


})

//this will also executine for incoming data get request though we need only POST request
//app.use('/product', (req,res, next), note that app.use() processes for both GET & POST request but to limit to only GET use , app.get()
//also for only POST request use , app.post()

app.post('/product', (req,res, next) =>{

    console.log(req.body);
    res.redirect('/')

})
app.use('/',  (req,res,next) =>  {

    res.send(`<h1>Hello this from Express</h1>` ) //this (send();) is a new utility function, which allows us to send a response to continue to te next middleware in line



})

/*const server = http.createServer(app);

server.listen(3000);*/

app.listen(3000);