var express = require('express');
var bodyParser = require("body-parser");

var bcrypt = require('bcryptjs');

module.exports = function(app)
{
     app.get('/home',function(req,res){ // http://localhost:4000/api_mantenimiento/gets/home      
        res.render('home')
     });
     
     app.get('/client-list',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/client-list     
      res.render('client-list')
   });
   
   app.get('/client-new',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/client-new    
      res.render('client-new')
   });

   app.get('/client-search',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/client-search      
      res.render('client-search')
   });

   app.get('/client-update',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/client-update    
      res.render('client-update')
   });

   app.get('/company',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/company      
      res.render('company')
   });
   app.get('/index',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/index     
      res.render('index')
   });

   app.get('/item-list',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/item-list     
      res.render('item-list')
   });

   app.get('/item-new',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/item-new   
      res.render('item-new')
   });
   app.get('/item-search',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/item-search   
      res.render('item-search')
   });
   app.get('/update',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/update       
      res.render('item-update')
   });
   app.get('/payment',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/payment      
      res.render('payment')
   });
   app.get('/reservation-list',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/reservation-list     
      res.render('reservation-list')
   });
   app.get('/reservation-new',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/reservation-new   
      res.render('reservation-new')
   });
   app.get('/reservation-pending',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/reservation-pending    
      res.render('reservation-pending')
   });
   app.get('/reservation-search',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/reservation-search      
      res.render('reservation-search')
   });
   app.get('/reservation-update',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/reservation-update      
      res.render('reservation-update')
   });
   app.get('/user-list',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/user-list     
      res.render('user-list')
   });
   app.get('/user-new',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/user-new   
      res.render('user-new')
   });
   app.get('/user-search',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/user-search       
      res.render('user-search')
   });
   app.get('/user-update',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/user-update      
      res.render('user-update')
   });

   app.get('/add-player',function(req,res){ // http://localhost:3000/api_mantenimiento/gets/add-player    
      res.render('add-player');
   });
   
   
   app.get('/pruebaEjs', function(req, res){   // http://localhost:3337/api_mantenimiento/gets/pruebaEjs
      res.type('text/html');
      res.render('index', {
          tituloPagina: 'Mi primera pagina con EJS',
          tituloBody:'Probando EJS',
          seccion:'Aqui irá una seccion'
      }, function(err, html){
          if(err) throw err;
          res.send(html);
      });
  });


  app.get('/pruebaEjs2', function(req, res){    // http://localhost:3337/api_mantenimiento/gets/pruebaEjs2
   res.render('index2', {
       tituloPagina: 'Mi primera pagina con EJS',
       tituloBody:'Probando EJS',
       unArray: ['que', 'tal', 'estamos'],
       unObjeto: {
           primero:'pues',
           segundo:'estamos',
           tercero:'bastante bien'
       }
   });
});



app.get('/pruebaEjs3', function(req, res){
   app.render('sections/seccionDinamica',{
           mensaje:'Se ha procesado esta seccion antes de ' +
           'introducirla en la vista'},
       function(err, html){
           if (err) throw err;
           res.render('index.ejs',
               {
                   tituloPagina: 'Mi primera pagina con EJS',
                   tituloBody:'Probando EJS',
                   seccion: html
               }
           );
       }
   );
});


app.get('/pruebaEjs4', function(req, res){
   res.render('index3.ejs',
       {
           tituloPagina: 'Mi primera pagina con EJS',
           tituloBody:'Probando EJS',
           mensaje: 'Un mensaje cualquiera'
       }
   );
});

   }