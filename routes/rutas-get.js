var express = require('express');
var bodyParser = require("body-parser");

var bcrypt = require('bcryptjs');



module.exports = function(app)
{
     app.get('/home',function(req,res){ // http://localhost:4000/api_mantenimiento/gets/home       (1)
        res.render('home')
     });
     
     app.get('/client-list',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/client-list      (1)
      res.render('client-list')
   });
   
   app.get('/client-new',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/client-new     (1)
      res.render('client-new')
   });

   app.get('/client-search',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/client-search       (1)
      res.render('client-search')
   });

   app.get('/client-update',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/client-update      (1)
      res.render('client-update')
   });

   app.get('/company',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/company       (1)
      res.render('company')
   });
   app.get('/index',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/index      (1)
      res.render('index')
   });

   app.get('/item-list',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/item-list      (1)
      res.render('item-list')
   });

   app.get('/item-new',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/item-new      (1)
      res.render('item-new')
   });
   app.get('/item-search',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/item-search      (1)
      res.render('item-search')
   });
   app.get('/update',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/update       (1)
      res.render('item-update')
   });
   app.get('/payment',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/payment      (1)
      res.render('payment')
   });
   app.get('/reservation-list',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/reservation-list     (1)
      res.render('reservation-list')
   });
   app.get('/reservation-new',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/reservation-new       (1)
      res.render('reservation-new')
   });
   app.get('/reservation-pending',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/reservation-pending      (1)
      res.render('reservation-pending')
   });
   app.get('/reservation-search',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/reservation-search      (1)
      res.render('reservation-search')
   });
   app.get('/reservation-update',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/reservation-update      (1)
      res.render('reservation-update')
   });
   app.get('/user-list',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/user-list     (1)
      res.render('user-list')
   });
   app.get('/user-new',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/user-new    (1)
      res.render('user-new')
   });
   app.get('/user-search',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/user-search       (1)
      res.render('user-search')
   });
   app.get('/user-update',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/user-update       (1)
      res.render('user-update')
   });
   
   }