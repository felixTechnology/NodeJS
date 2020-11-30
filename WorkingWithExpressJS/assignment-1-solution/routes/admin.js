const path = require('path');

const express = require('express');

const rootDir = require('../helper/path')

const  router = express.Router();


//This route is reaches through /admin/add-product -GET
router.get('/add-product',  (req,res,next) =>  {


    /*res.send(`<h1>Add your product</h1>` ) *///this (send();) is a new utility function, which allows us to send a response to continue to te next middleware in line
    /*res.send(`<html lang="fr"><form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form></html>` )*/
    /*res.send(`<html lang="fr"><form action="/admin/add-product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form></html>` )*/
    /*res.sendFile(path.join(__dirname,'../','views', 'add-product.html'))*/
    res.sendFile(path.join(rootDir,'views', 'add-product.html'))
})

//this will also executine for incoming data get request though we need only POST request
//app.use('/product', (req,res, next), note that app.use() processes for both GET & POST request but to limit to only GET use , app.get()
//also for only POST request use , app.post()

//This route is reaches through /admin/add-product - POST
router.post('/add-product', (req,res, next) =>{

    console.log(req.body);
    res.redirect('/')

})
module.exports = router;