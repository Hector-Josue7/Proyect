var mysql = require("mysql");
var bcrypt = require('bcryptjs');
const credenciales = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: "bd_rutinas"
};

function retornaFormatos (req, res){
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        "SELECT * FROM `tbl_formatos`",
        [], (error, data, fields)=>{
            console.log(error);
            res.send(data);
            res.end();
            conexion.end();
        });
}

function retornaUnaUnidad (req, res){
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        `SELECT * FROM tbl_unidades WHERE ID_UNIDAD = ?`,
        [req.params._id],
        function(error, data, fields){
            res.send(data);
            res.end();
        });
}

function insertaMaster (req, res){
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
       `INSERT INTO tbl_master(ID_EQUIPO, 
                               ID_COMPONENTE_FINAL, 
                               ID_EMPLEADO, 
                               SUBTIPO_VALOR_LISTA) 
        VALUES (?,?,?, ?)`,  [req.body.ID_EQUIPO, req.body.ID_COMPONENTE_FINAL,req.body.ID_EMPLEADO,req.body.SUBTIPO_VALOR_LISTA],
       function(error, data, fields){
           if (error){
        res.status(500).send({message: `Error al salvar en la base de datos: ${error}`})
               res.end();
           }else{
             res.status(200).send({dato: data}) 
             res.end();
           }});
}

function verificaLogin (req, res){
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
}

function actualizaElemento (req, res) {
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
}

function obtenerUnidades (req, res){
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
}
function obtenerEquipos (req, res){
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        "SELECT * FROM `tbl_equipos`",
        [],
        function(error, data, fields){
            console.log(error);
            res.send(data);
            res.end();
            conexion.end();
        }
    );
}

function obtenerComponentes (req, res){
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        `select * from tbl_componente_final where ID_EQUIPO =?`,
        [req.params.id_equipo],
        function(error, data, fields){
            res.send(data);
            res.end();
        });
}
function obtenerSitios (req, res){
    var conexion = mysql.createConnection(credenciales);
   
    conexion.query(
        `SELECT ID_SITIO ,NOMBRE_SITIO FROM tbl_sitios `,
        [],
        function(error, data, fields){
            console.log(error);
            res.send(data);
            res.end();
            conexion.end();
        }
    );
}


function borraMaster(req, res) {
    var conexion = mysql.createConnection(credenciales);
    var sSQLDelete = `DELETE FROM tbl_master WHERE ID_DATO_INSERTADO = ${req.params.id}` ;
   conexion.query(sSQLDelete, function(oErrDelete, oRowsDelete, oColsDelete) {
      if(oErrDelete) {
        res.write(JSON.stringify({
          error: true,
          error_object: oErrDelete
        }));
        res.end();
      } else {
        res.write(JSON.stringify({
          error: false
        }));
        res.end();      
      }    
    });  
}
module.exports = {
    retornaFormatos,
    retornaUnaUnidad,
    insertaMaster,
    verificaLogin,
    actualizaElemento,
    obtenerUnidades,
    obtenerEquipos,
    obtenerComponentes,
    obtenerSitios,
    borraMaster

}