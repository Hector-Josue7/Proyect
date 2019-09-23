// el modulo mysql no soporta las promesas
const mysql = require('mysql');
const { promisify } = require('util'); // convertir codigo de callbacks a codigo de promesas
const { database } = require('./keys'); 


// create pool tiene un especie de hilos que se van ejecutando y cada uno va haciendo una tarea a la vez en secuencia
const pool = mysql.createPool(database);

pool.getConnection((err, connection) =>{
    if (err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST')  // esto significa que la conexion con la base de datos fue perdida
        console.error('LA CONEXION CON LA BASE DE DATOS FUE CERRADA');

        if(err.code === 'ER_CON_COUNT_ERROR')  // este codigo es para comprobar cuantas conexiones tiene la base de datos hasta el momento
        console.error('LA BASE DE DATOS TIENE MUCHAS CONEXIONES');
  
     if(err.code ===  'ECONNREFUSED')   // este es en caso de intentar conectar la base de datos y nuestra conexion ha sido rechazada
     console.error('LA CONEXION A LA BASE DE DATOS HA SIDO RECHAZADA');
  }
   if(connection) connection.release();   // con esto va a empezar la conexion
    console.log('La base de datos ha sido conectada');
    return;

});  // antes de exportar se va a utilizar la conexion
// promisify pool querys estamos convirtiendo a promesas lo que viene de callbacks
pool.query = promisify(pool.query);  

module.exports = pool; // exporto pool para empezar a hacer las consultas