const express = require('express');
const router = express.Router();
var oCtrlPost = require('../controladores/ctrl-rutas-post');


// ruta que retorna todos los formatos 
router.get("/usuariosi", oCtrlPost.retornaFormatos); // http://localhost:4000/api/test/usuariosi   

// ejemplo de ruta para obtener una unidad en especifico 
router.get("/unidad/:_id", oCtrlPost.retornaUnaUnidad);  // http://localhost:4000/api/test/unidad/:id 

//  ejemplo de ruta para insertar un elemento en la base de datos, en este caso la tabla master  
router.post("/enviar", oCtrlPost.insertaMaster); // http://localhost:4000/api/test/enviar

// verificacion de login
router.post('/login', oCtrlPost.verificaLogin); // http://localhost:4000/api/test/login

// actualizar un elemento
router.post("/actualizar/:id", oCtrlPost.actualizaElemento);// http://localhost:4000/usuarios/actualizar/_id    

router.get("/obtenerTabla", oCtrlPost.obtenerUnidades );//http://localhost:4000/usuarios/obtenerTabla

router.get("/equipos", oCtrlPost.obtenerEquipos);//http://localhost:4000/api/test/equipos

router.get("/:id_equipo/componentes",oCtrlPost.obtenerComponentes);// http://localhost:4000/api/test/:id_equipo/componentes

router.get("/obtenersitios", oCtrlPost.obtenerSitios);  // http://localhost:4000/usuarios/obtenersitios
 


module.exports = router;
