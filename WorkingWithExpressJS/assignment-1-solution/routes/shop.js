const express = require('express');

const router = express.Router();

router.get('/', (req,res,next) =>  {

    res.send(`<h1>Hello this from Express</h1>` ) //this (send();) is a new utility function, which allows us to send a response to continue to te next middleware in line

});

module.exports = router;