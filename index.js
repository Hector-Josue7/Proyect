var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');
var path = require('path');
const { database } = require('./keys');
var mensajesRouter = require('./routes/usuarios-routers');
const app = express();


// configuraciones
app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.set('view engine', 'ejs');
app.use("/usuarios",mensajesRouter);
// Routes''''''''''''''''''''''''''''''''''
//app.use(require('./routes/index'));
//app.use(require('./routes/autenticacion-routers'));
//app.use('/links', require('./routes/links'));
//'''''''''''''''''''''''''''''''''''''''''''''''''''

app.get('/ejs', (req, res) => {
  res.render('index', {foo: 'FOO'});
});
// carpeta publica de archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


//puerto de escucha
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});


//app.use("/ensayo",ensayosRouter);
//require('./modules/passport');
//var ensayosRouter = require('./routes/ensayos-router');







