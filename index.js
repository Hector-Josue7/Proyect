var express = require('express');
var bodyParser = require('body-parser');
var session  = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
// const morgan = require('morgan');
const routes = require('./routes/index.routes');
// var passport = require('passport');
var flash    = require('connect-flash');
// const MySQLStore = require('express-mysql-session')(session);
// const { database } = require('./keys');
const app = express();
// configuraciones


// require('./lib/passport');

// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(session({secret: 'vidyapathaisalwaysrunning', resave: true, saveUninitialized: true})); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
app.set('port', process.env.PORT || 3337);
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


// app.use(session({
//   secret: 'faztmysqlnodemysql',
//   resave: false,
//   saveUninitialized: false,
//   store: new MySQLStore(database)
// }));
// Routes
app.use('/api_mantenimiento', routes);   //   DESDE ESTA RUTA COMIENZAN LAS RUTAS, SE LES ENLAZA EL PREJIFO api_mantenimiento
//Servicio de archivos estáticos
app.use(express.static('public'));
// Errores del lado del cliente
app.use((req, res, next) => {
  const error = new Error('Endpoint inválido');
  error.status = 404;
  next(error);
});
// Errores del lado del servidor
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ error: { msg: error.message } });
});
//puerto de escucha
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});

module.exports = app;
















