var express = require('express');
var bodyParser = require('body-parser');
var session  = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.routes');
var passport = require('passport');
var flash    = require('connect-flash');
const app = express();
// configuraciones

require('./config/passport')(passport); // pass passport for configuration
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(session({secret: 'vidyapathaisalwaysrunning', resave: true, saveUninitialized: true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
// Routes
app.use('/api', routes);
require('./routes/auth.routes')(app, passport); 


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
// routes ======================================================================




// var express  = require('express');
// var session  = require('express-session');
//
// var bodyParser = require('body-parser');
// var morgan = require('morgan');
// var app      = express();
// var port     = process.env.PORT || 8080;

// var passport = require('passport');
// var flash    = require('connect-flash');

// // configuration ===============================================================
// // connect to our database

// require('./config/passport')(passport); // pass passport for configuration



// // set up our express application
// app.use(morgan('dev')); // log every request to the console
// app.use(cookieParser()); // read cookies (needed for auth)
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));
// app.use(bodyParser.json());

// app.set('view engine', 'ejs'); // set up ejs for templating

// // required for passport
// app.use(session({
// 	secret: 'vidyapathaisalwaysrunning',
// 	resave: true,
// 	saveUninitialized: true
//  } )); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session


// // routes ======================================================================
// require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// // launch ======================================================================
// app.listen(port);
// console.log('The magic happens on port ' + port);

// //Servicio de archivos estáticos
// app.use(express.static('public'));