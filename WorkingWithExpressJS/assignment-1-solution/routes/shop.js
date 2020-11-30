const path = require('path');

const express = require('express');

const rootDir = require('../helper/path')

const router = express.Router();

router.get('/', (req,res,next) =>  {

    /*res.send(`<h1>Hello this from Express</h1>` )*/ //this (send();) is a new utility function, which allows us to send a response to continue to te next middleware in line

    /*Above during practice we were send a text to our HTML Page. Now we will be send a file
    * SendFile will allow us to send file back to the user.It automatically set the Content-Type response Header field
    * Now point to the file you want to send from where it is located .Consider how the path looks
    * The file is in the view folder . WE could use (/) as we assume we could see all from the view of ParsingIncomingRequest.js file
    * -Note that the fact that shop.js is in a subdirectory doesnt matter because we export it functionality and import it into the ParsingIncomingRequest.js
    * - which is in the root folder
    * -so let use slash for the root path, an absolute path seen from the root folder and then, views, and then, shop.html
    * -This path as done point to the root path of our OS, so we will use a feature provided by JS to get it correct
    *   EXAMPLE: const path = require('path');
    * -   Note __dirname will point to the route folder
    *
    * */

    /*res.sendFile('/views/shop.html')*/ /*this is not corect*/
   /* res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))*/
    /*res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))*/
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

module.exports = router;