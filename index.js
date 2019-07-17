var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');
var path = require('path');
//var passport = require('passport'); 
var credenciales ={
  user:"root",
  password:"",
  database:"bd_rutinas",
  host:"localhost",
  port:"3306"  
};

var app = express();
app.set('port', process.env.PORT || 4000);
// middelewares

app.use(express.static("index"));
//app.use(express.static(path.join(__dirname, 'index')));

//app.use(express.static(__dirname + '/index'));
//app.use(express.static("public"));
var loginVerificado = express.static("public");

//app.use('public/img/users/',express.static(__dirname+"public/img/users/"));
app.use(session({secret:"ASDFE$%#%",resave:true, saveUninitialized:true}));

//app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(
  function(req,res,next){
      if (req.session.idEmpleado){
          //Significa que el usuario si esta logueado
          //if (req.session.id_cargo == 8)
              loginVerificado(req,res,next);
 }
      else
          return next();
  }
);
app.post('/login', function(request, response) {  // http://localhost:4000/login
	var username = request.body.USUARIO;
  var clave = request.body.CONTRASENA;
    var conexion = mysql.createConnection(credenciales);
	if (username && clave) {
		conexion.query('SELECT * FROM tbl_usuarios_del_sistema WHERE USUARIO = ? AND CONTRASENA = ?', [request.body.USUARIO, request.body.CONTRASENA], function(error, results, fields) {
			if (results.length > 0) {

                  response.send({status:1,mensaje:"Usuario autenticado con éxito"});
                  request.session.codigoUsuario = results[0].id_usuario;
                  request.session.correoUsuario = results[0].correo;
                  request.session.idCargo = results[0].idCargo
                 
                  /* 
                   request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/inicio.html');
                  */
       
			} else {
               // response.redirect('/index.html');
				response.send('Incorrect Username and/or Password!');
             //   response.sendFile(path.join(__dirname + '/index.html'));
            }			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/logout',function(req,res){
  req.session.destroy();
  res.send({status:1,mensaje:"Se cerró la sesión"});
});

function verificarAutenticacion(req, res, next){
	if(req.session.correoUsuario)
		return next();
	else
		res.send("ERROR, ACCESO NO AUTORIZADO");
}

app.listen(app.get('port'), () => {
  console.log('Servidor corriendo en puerto ', app.get('port'));
});

/* 
app.get('/home', function(request, response) {
	if (request.session.loggedin) {
  //	response.send('Welcome back, ' + request.session.username + '!');
 // response.redirect('/inicio.html');
  response.sendFile(path.join(__dirname + '/inicio.html'));
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

*/
/* 
app.post("/login",function(req, res){  // http://localhost:
  var conexion = mysql.createConnection(credenciales);
  conexion.query(
      "SELECT codigo_usuario, correo, codigo_tipo_usuario FROM tbl_usuarios WHERE contrasena = sha1(?) and correo=?",
      [req.body.contrasena, req.body.usuario],
      function(error, data, fields){
          if (error){
           //   res.send(error);
              res.send({status:0,mensaje:"Correo o contraseña incorrecta."});
              res.end();

          }else{
              if (data.length==1){
                  res.send({status:1,mensaje:"Usuario autenticado con éxito"});
                  req.session.codigoUsuario = data[0].codigo_usuario;
                  req.session.correoUsuario = data[0].correo;
                  req.session.codigoTipoUsuario = data[0].codigo_tipo_usuario
              }
              res.send(data);
              res.end();
          }
      }
  )
});

*/



/* 
//app.use(express.static("public"));
app.get('/inicio.html', verificarAutenticacion, function (res, req, next) {  
  res.redirect('/inicio.html');
});

*/



/* 
app.get('/editor.html', verificarAutenticacion, function (res, req, next) {  
  res.redirect('/editor.html');
});



app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});
*/


//routes
/* 
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});
*/
/* 

app.get('/', async (req, res) => {
  res.redirect('/login.html');
});
*/

/* 

app.get('/', (req, res) => {
  //res.render('index');
 // res.redirect('/index.html');
 response.sendFile(path.join(__dirname + '/index.html'));
});

*/


 //cerrar sesion

