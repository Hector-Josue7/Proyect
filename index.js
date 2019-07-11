//Importar el modulo express para crear el servidor web
var express = require("express");
//Crear una aplicacion de nodejs con express
var app = express();
app.set('port', process.env.PORT || 3333);

//definir una carpeta como publica para que los usuarios puedan acceder a su contenido
app.use(express.static("public"));
 
//Levantar el servidor en el puerto 3333


// Server is listening
app.listen(app.get('port'), () => {
    console.log('Servidor levantado en puerto', app.get('port'));
  });
  