var express = require('express');
var bodyParser = require("body-parser");

var bcrypt = require('bcryptjs');






module.exports = function(app)
{
     app.get('/',function(req,res){ // http://localhost:3000/       (1)
        res.render('test')
     });
     
     
    }