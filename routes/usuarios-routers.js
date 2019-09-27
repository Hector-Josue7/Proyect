const express = require('express');
const router = express.Router();
var mysql = require("mysql");
var credenciales = {
    host:"localhost",
    user:"root",
    password:"",
    port:"3306",
    database: "bd_rutinasV3"
  };
  // ejemplo de ruta para obtener todos los elementos de la base de datos
// router.get("/usuariosi", function(req,res){  // http://localhost:4000/usuarios/usuariosi
//     var conexion = mysql.createConnection(credenciales);
//     conexion.query(
//         "SELECT * FROM `tbl_formatos`",
//         [], (error, data, fields)=>{
//             console.log(error);
//             res.send(data);
//             res.end();
//             conexion.end();
//         });
// });
// // ejemplo de ruta para obtener un elemento en especifico de la base de datos 
// router.get("/unidad/:_id",function(req, res){   // http://localhost:4000/ensayo/unidad/_id
//     var conexion = mysql.createConnection(credenciales);
//     conexion.query(
//         `SELECT * FROM tbl_unidades WHERE ID_UNIDAD = ?`,
//         [req.params._id],
//         function(error, data, fields){
//             res.send(data);
//             res.end();
//         });
// });
// // ejemplo de ruta para insertar un elemento en la base de datos
// router.post("/enviar",function(req,res){  // http://localhost:4000/users/enviar
//     var conexion = mysql.createConnection(credenciales);
//      conexion.query(
//         "INSERT INTO tbl_ciudades(ID_PAIS, NOMBRE_CIUDAD) VALUES (?,?)",
//         [   req.body.id_pais, req.body.nombre_ciudad],
//         function(error, data, fields){
//             if (error){
//          res.status(500).send({message: `Error al salvar en la base de datos: ${error}`})
//                 res.end();
//             }else{
//               res.status(200).send({dato: data}) 
//               res.end();
//             }});
// });
// // ejemplo de ruta para actualizar un elemento en la base de datos
// router.put("/actualizar", (req, res)=>{ // http://localhost:4000/users/actualizar/id
//     var sql = "UPDATE tbl_ciudades SET NOMBRE_CIUDAD = ? WHERE ID_CIUDAD = ?";
//     var conexion = mysql.createConnection(credenciales);
//     conexion.query(sql, [ req.body.nombre_ciudad, req.body.id_ciudad ], function(error, data, fields){ 
//         if (error){ 
//     res.status(500).send({message: `Error al actualizar en la base de datos: ${error}`})
//     res.end();
//     }else{
//     res.status(200).send({dato: data}) 
//     res.end();
//    }});
// })

// // ejemplo de ruta para eliminar de la base de datos 
// router.delete("/:id",function(req, res){
//     var sql = "DELETE FROM tbl_ciudades WHERE ID_CIUDAD = ?";
//     var conexion = mysql.createConnection(credenciales);
//     conexion.query(sql, [req.params.id],  (error, data, fields)=>{
//         console.log(error);
//         res.send(data);
//         res.end();
//         conexion.end();
//     })
// });



router.get("/obtenerTabla", function(req,res){ //http://localhost:4000/usuarios/obtenerTabla
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        "SELECT * FROM `tbl_unidades`",
        [],
        function(error, data, fields){
            console.log(error);
            res.send(data);
            res.end();
            conexion.end();
        }
    );
});
module.exports = router;





