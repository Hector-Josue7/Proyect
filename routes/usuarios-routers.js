const express = require('express');
const router = express.Router();
var mysql = require("mysql");
var credenciales = {
    host:"localhost",
    user:"root",
    password:"",
    port:"3306",
    database: "bd_rutinas"
  };
  // ejemplo de ruta para obtener todos los elementos de la base de datos
router.get("/usuarios", function(req,res){  // http://localhost:4000/users/usuarios
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        "SELECT * FROM `tbl_unidades`",
        [], (error, data, fields)=>{
            console.log(error);
            res.send(data);
            res.end();
            conexion.end();
        });
});
// ejemplo de ruta para obtener un elemento en especifico de la base de datos 
router.get("/mensajes/:formato",function(req, res){   // http://localhost:4000/users/mensajes
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        `SELECT * FROM tbl_pantalla_datos_radar
WHERE ID_FORMATO=?;`,
        [req.params.formato],
        function(error, data, fields){
            res.send(data);
            res.end();
        });
});
// ejemplo de ruta para insertar un elemento en la base de datos
router.post("/enviar",function(req,res){  // http://localhost:4000/users/enviar
    var conexion = mysql.createConnection(credenciales);
     conexion.query(
        "INSERT INTO tbl_ciudades(ID_PAIS, NOMBRE_CIUDAD) VALUES (?,?)",
        [   req.body.id_pais, req.body.nombre_ciudad],
        function(error, data, fields){
            if (error){
         res.status(500).send({message: `Error al salvar en la base de datos: ${error}`})
                res.end();
            }else{
              res.status(200).send({dato: data}) 
              res.end();
            }});
});
// ejemplo de ruta para actualizar un elemento en la base de datos
router.put("/actualizar", (req, res)=>{ // http://localhost:4000/users/actualizar/id
    var sql = "UPDATE tbl_ciudades SET NOMBRE_CIUDAD = ? WHERE ID_CIUDAD = ?";
    var conexion = mysql.createConnection(credenciales);
    conexion.query(sql, [ req.body.nombre_ciudad, req.body.id_ciudad ], function(error, data, fields){ 
        if (error){ 
    res.status(500).send({message: `Error al actualizar en la base de datos: ${error}`})
    res.end();
    }else{
    res.status(200).send({dato: data}) 
    res.end();
   }});
})

module.exports = router;