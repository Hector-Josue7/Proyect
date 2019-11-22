const express = require('express');
const router = express.Router();
var mysql = require("mysql");
var oCtrlPost = require('../controladores/ctrl-rutas-post');

const credenciales = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: "bd_rutinas"
};

router.get("/formatos", oCtrlPost.retornaFormatos); // http://localhost:3337/api_mantenimiento/test/formatos    ruta que retorna todos los formatos 
router.get("/unidad/:_id", oCtrlPost.retornaUnaUnidad);  // http://localhost:3337/api_mantenimiento/test/unidad/:id  ejemplo de ruta para obtener una unidad en especifico 
router.post("/enviar", oCtrlPost.insertaMaster); // http://localhost:3337/api_mantenimiento/test/enviar            ejemplo de ruta para insertar un elemento en la base de datos, en este caso la tabla master  
// router.post('/login', oCtrlPost.verificaLogin); // http://localhost:4000/api/test/login      verificacion de login
// router.post("/actualizar/:id", oCtrlPost.actualizaElemento);// http://localhost:4000/usuarios/actualizar/_id      actualizar un elemento 
// router.get("/obtenerTabla", oCtrlPost.obtenerUnidades );//http://localhost:4000/usuarios/obtenerTabla
// router.get("/equipos", oCtrlPost.obtenerEquipos);// http://localhost:4000/api_mantenimiento/test/equipos
// router.get("/:id_equipo/componentes",oCtrlPost.obtenerComponentes);// http://localhost:4000/api/test/:id_equipo/componentes
// router.get("/obtenersitios", oCtrlPost.obtenerSitios);  // http://localhost:4000/usuarios/obtenersitios
// router.delete("/:id", oCtrlPost.borraMaster);  // http://localhost:4000/api_mantenimiento/test/:id


// router.get("/formatos", (req, res)=>{ // http://localhost:3337/api_mantenimiento/test/formatos
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



// http://localhost:4000/api_mantenimiento/test/enviar
module.exports = router

//Update an employees
// app.put('/employees', (req, res) => {
//     let emp = req.body;
//     var sql = "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; \
//     CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
//     mysqlConnection.query(sql, [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
//         if (!err)
//             res.send('Updated successfully');
//         else
//             console.log(err);
//     })
// });


