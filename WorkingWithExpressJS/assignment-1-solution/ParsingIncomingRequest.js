
/*const http = require('http');*/
/*const fs = require('fs');*///allows us to with with file system
const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const app = express();

/*this is importing this router object [module.exports = router] in the admin file,
* This router object in turns has these routes registered
* this router is a valid middleware function which can take adminRoutes and just call app use and put our admin routes in thers
* */
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

/*To use filtering mechanism- this allows us to put a comming starting segment for our our pat which all routes in a given file
* use to outsource that into this ParsingIncomingRequest.js so that we dont have to repeat it for all routes
*  */
app.use('/admin',adminRoutes);
/*app.use(adminRoutes);*/
app.use(shopRoutes);
/*app.use('/add-product',  (req,res,next) =>  {


    /!*res.send(`<h1>Add your product</h1>` ) *!///this (send();) is a new utility function, which allows us to send a response to continue to te next middleware in line
    res.send(`<html lang="fr"><form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form></html>` )


})

//this will also executine for incoming data get request though we need only POST request
//app.use('/product', (req,res, next), note that app.use() processes for both GET & POST request but to limit to only GET use , app.get()
//also for only POST request use , app.post()

app.post('/product', (req,res, next) =>{

    console.log(req.body);
    res.redirect('/')

})*/

/*app.use('/', (req, res, next) => {

    res.send(`<h1>Hello this from Express</h1>`) //this (send();) is a new utility function, which allows us to send a response to continue to te next middleware in line


});*/

/*const server = http.createServer(app);

server.listen(3000);*/


/*Adding 404 Route */
app.use((req,res, next) =>{

    /*res.status(404).send('<h1>Page  Not Found </h1>')*/
    res.status(404).sendFile(path.join(__dirname, 'views', '4040.html'))
})

app.listen(3000);