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
router.get("/usuariosi", function(req,res){  // http://localhost:4000/usuarios/usuariosi
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        "SELECT * FROM `tbl_formatos`",
        [], (error, data, fields)=>{
            console.log(error);
            res.send(data);
            res.end();
            conexion.end();
        });
});
// ejemplo de ruta para obtener un elemento en especifico de la base de datos 
router.get("/unidad/:_id",function(req, res){   // http://localhost:4000/ensayo/unidad/_id
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        `SELECT * FROM tbl_unidades WHERE ID_UNIDAD = ?`,
        [req.params._id],
        function(error, data, fields){
            res.send(data);
            res.end();
        });
});

// ejemplo de ruta para insertar un elemento en la base de datos, en este caso la tabla master
router.post("/enviar",function(req,res){  // http://localhost:4000/usuarios/enviar
    var conexion = mysql.createConnection(credenciales);
     conexion.query(
        `INSERT INTO tbl_master(ID_EQUIPO, ID_COMPONENTE_FINAL, ID_EMPLEADO, SUBTIPO_VALOR_LISTA) 
        VALUES (?,?,?, ?)`
    ,  [req.body.ID_EQUIPO, req.body.ID_COMPONENTE_FINAL,req.body.ID_EMPLEADO,req.body.SUBTIPO_VALOR_LISTA],
        function(error, data, fields){
            if (error){
         res.status(500).send({message: `Error al salvar en la base de datos: ${error}`})
                res.end();
            }else{
              res.status(200).send({dato: data}) 
              res.end();
            }});
});

// router.get('/update/:id', customerController.edit);
// router.post('/update/:id', customerController.update);

// controller.edit = (req, res) => {
//     const { id } = req.params;
//     req.getConnection((err, conn) => {
//       conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
//         res.render('customers_edit', {
//           data: rows[0]
//         })
//       });
//     });
//   };
  
//   controller.update = (req, res) => {
//     const { id } = req.params;
//     const newCustomer = req.body;
//     req.getConnection((err, conn) => {
  
//     conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
//       res.redirect('/');
//     });
//     });
//   };


// ejemplo de ruta para actualizar un elemento en la base de datos
router.put("/actualizar/:id", (req, res)=>{ // http://localhost:4000/users/actualizar/id
    const { id } = req.params;
   var { ID_EQUIPO, 
         ID_COMPONENTE_FINAL, 
         ID_EMPLEADO,
         SUBTIPO_VALOR_BOOLEANO, 
        SUBTIPO_VALOR_LISTA,
    SUBTIPO_VALOR_NUMERO,
DATO_NUMERICO_OBTENIDO} = req.body;

    var sql =  `UPDATE tbl_master
    SET ID_EQUIPO = ?,
    ID_COMPONENTE_FINAL = ?,
    ID_EMPLEADO =?,
    SUBTIPO_VALOR_BOOLEANO =?,
    SUBTIPO_VALOR_LISTA =?,
    SUBTIPO_VALOR_NUMERO = ?
    
    WHERE ID_DATO_INSERTADO = `
    var conexion = mysql.createConnection(credenciales);

    conexion.query(sql, [ req.body.ID_EQUIPO, 
                           req.body.ID_COMPONENTE_FINAL,
                           req.body.ID_EMPLEADO,
                           req.body.SUBTIPO_VALOR_BOOLEANO,
                           req.body.SUBTIPO_VALOR_LISTA,
                           req.body.SUBTIPO_VALOR_NUMERO,
                           req.body.ID_DATO_INSERTADO


                           req.body.id_ciudad ], function(error, data, fields){ 
        
        
        
        
        if (error){ 
    res.status(500).send({message: `Error al actualizar en la base de datos: ${error}`})
    res.end();
    }else{
    res.status(200).send({dato: data}) 
    res.end();
   }});
})

// ejemplo de ruta para eliminar de la base de datos 
router.delete("/:id",function(req, res){
    var sql = "DELETE FROM tbl_ciudades WHERE ID_CIUDAD = ?";
    var conexion = mysql.createConnection(credenciales);
    conexion.query(sql, [req.params.id],  (error, data, fields)=>{
        console.log(error);
        res.send(data);
        res.end();
        conexion.end();
    })
});




// router.put('/:id',function(req,res){
//     usuario.update(
//         {_id:req.params.id},
//         {
//              firstName:req.body.firstName,
//              lastName:req.body.lastName,
//              email:req.body.email,
//              password:req.body.password,
//              birthdate:{
//                  day:req.body.day,
//                  month:req.body.month,
//                  year:req.body.year
//              },
//              gender:req.body.gender
//          }
//     )
//     .then((result)=>{
//          res.send(result);
//          res.end();
//     })
//     .catch((error)=>{
//          res.send(error);
//          res.end();
//     });
//  });
 







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




router.get("/obtenersitios",function(req,res){   // http://localhost:4000/usuarios/obtenersitios
    var conexion = mysql.createConnection(credenciales);
   
    conexion.query(
        "SELECT ID_SITIO ,NOMBRE_SITIO FROM `tbl_sitios`",
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




