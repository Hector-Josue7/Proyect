var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mensajesRouter = require('./routes/usuarios-routers');
const app = express();


// configuraciones
app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use("/usuarios",mensajesRouter);

require('./routes/rutas-get')(app);
// carpeta publica de archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


//puerto de escucha
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});










