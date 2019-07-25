var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');
var path = require('path');
var usuarioRouter = require('./routes/usuarios-routers');
var app = express();

var credenciales = {
  host:"localhost",
  user:"root",
  password:"",
  port:"3306",
  database: "bd_whatsapp"
};


// puerto de escucha
app.set('port', process.env.PORT || 4000);

// middelewares
app.use(express.static("index"));
var loginVerificado = express.static("public");
app.use(session({secret:"ASDFE$%#%",resave:true, saveUninitialized:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(
  function(req,res,next){
      if (req.session.idEmpleado){
              loginVerificado(req,res,next);
 }
      else
          return next();
  }
);

app.use("/users",usuarioRouter);
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
       } else {
        // response.redirect('/index.html');
				response.send('USUARIO O CONTRASEÑA INCORRECTA');
             //response.sendFile(path.join(__dirname + '/index.html'));
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






