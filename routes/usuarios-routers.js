const express = require('express');
const router = express.Router();
var mysql = require("mysql");
var bcrypt = require('bcryptjs');

const credenciales = {
    host: 'localhost',
    user: 'root',
    password: '',
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
router.get("/unidad/:_id",function(req, res){   // http://localhost:4000/usuarios/unidad/id
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
// verificacion de login****************************************************************************************************************************************************
//app.post('/login/:correo', async function(req, res){
     router.post('/login', async function(req, res){ // http://localhost:3000/login     (3)
        var sql = ` SELECT * FROM tbl_empleados WHERE CORREO = req.body.correo AND req.body.CONTRASENA`;
         conexion.query(sql, (err, result) => {
            if (err) {
                throw err;
              //  return res.status(400).send('Credenciales invalidas');
                //res.redirect('/');
            }
            else{

                if(result){
                    const validPassword = bcrypt.compare(req.body.CONTRASENA, sql.CONTRASENA);
                    if(!validPassword)  return res.status(400).send('Credenciales invalidas');
                    // req.session.correoUsuario = req.params.correo;    // se desea establecer algunas variables de sesion
                    // req.session.codigoUsuario = user._id;
                    // req.session.codigoTipoUsuario = user.tipoUsuario;
                    res.status(200).redirect('/home'); // se redirecciona a una ruta de tipo get, que va a renderizar la vista cuando se loguee correctamente el usuario
                }   }
       });
});
// ejemplo de ruta para actualizar un elemento en la base de datos
router.post("/actualizar/:id", (req, res)=>{ // http://localhost:4000/usuarios/actualizar/_id

    var conexion = mysql.createConnection(credenciales);
   let registroId = req.params.id;
  let ID_EQUIPO = req.body.ID_EQUIPO;
  let ID_COMPONENTE_FINAL = req.body.ID_COMPONENTE_FINAL;
  let ID_EMPLEADO = req.body.ID_EMPLEADO; // ensayar esta ruta con: req.session.CORREO
  let SUBTIPO_VALOR_BOOLEANO = req.body.SUBTIPO_VALOR_BOOLEANO;
  let SUBTIPO_VALOR_LISTA= req.body.SUBTIPO_VALOR_LISTA;
  let SUBTIPO_VALOR_NUMERO= req.body.SUBTIPO_VALOR_NUMERO;
 


let sql = `UPDATE tbl_master SET ID_EQUIPO =${ID_EQUIPO},ID_COMPONENTE_FINAL= ${ID_COMPONENTE_FINAL},ID_EMPLEADO = ${ID_EMPLEADO},SUBTIPO_VALOR_BOOLEANO= ${SUBTIPO_VALOR_BOOLEANO},SUBTIPO_VALOR_LISTA = ${SUBTIPO_VALOR_LISTA},SUBTIPO_VALOR_NUMERO =${SUBTIPO_VALOR_NUMERO}
           WHERE ID_DATO_INSERTADO = ${registroId}`;

    conexion.query(sql, [ req.body.ID_EQUIPO, 
                           req.body.ID_COMPONENTE_FINAL,
                           req.body.ID_EMPLEADO,
                           req.body.SUBTIPO_VALOR_BOOLEANO,
                           req.body.SUBTIPO_VALOR_LISTA,
                           req.body.SUBTIPO_VALOR_NUMERO,
                           req.body.ID_DATO_INSERTADO

 ], function(error, data, fields){ 
        
        
        
        
        if (error){ 
    res.status(500).send({message: `Error al actualizar en la base de datos: ${error}`})
    res.end();
    }else{
    res.status(200).send({dato: data}) 
    res.end();
   }});
})




// ejemplo de ruta para eliminar de la base de datos 
// router.delete("/:id",function(req, res){
//     var sql = "DELETE FROM tbl_ciudades WHERE ID_CIUDAD = ?";
//     // var conexion = mysql.createConnection(credenciales);
//     conexion.query(sql, [req.params.id],  (error, data, fields)=>{
//         console.log(error);
//         res.send(data);
//         res.end();
//         conexion.end();
//     })
// });




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

             // res.render('index.ejs', {
                //     title: Welcome to Socka | View Players
                //     ,players: result
                 // });
                   //      req.session.correoUsuario = req.params.correo;    // se desea establecer algunas variables de sesion
                 //      req.session.codigoUsuario = user._id;
                 //      req.session.codigoTipoUsuario = user.tipoUsuario;
