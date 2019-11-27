var express = require('express');
var bodyParser = require('body-parser');
var session  = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
// const engine = require('ejs-mate');
 
// const morgan = require('morgan');
const routes = require('./routes/index.routes');
// var passport = require('passport');
var flash    = require('connect-flash');
const exphbs = require('express-handlebars');
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
app.set('views', path.join(__dirname, './views'));
app.engine('.hbs', exphbs({
   defaultLayout: 'main',
  // layoutsDir: path.join(app.get('views'), 'layouts'),
  // partialsDir: path.join(app.get('views'), 'partials'),
  // helpers: require('./helpers'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

// app.set('views', path.join(__dirname, 'views'))
// app.engine('ejs', engine);
// app.set('view engine', 'ejs');


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

//Error 404
app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - No encontrada');
});

// Pagina de error 500
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});
//puerto de escucha
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});

module.exports = app;
















