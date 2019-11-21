const express = require('express');
const ensayoCtrl= require('../controladores/funciones')
const router = express.Router();
var mysql = require("mysql");

 
router.get("/unidades", ensayoCtrl.devuelveUnidades); // http://localhost:4000/ensayo/unidades
router.get("/:_id", ensayoCtrl.devuelveUnidad) // http://localhost:4000/ensayo/_id
router.post("/enviar", ensayoCtrl.insertaActividad)
// ejemplo de ruta para actualizar un elemento en la base de datos
router.put("/actualizar", ensayoCtrl.actualizarCiudad)

// ejemplo de ruta para eliminar de la base de datos 
router.delete("/:id", ensayoCtrl.insertarPais);  
// ruta para insertar un pais
router.post("/paises", ensayoCtrl.insertarPais ); // http://localhost:4000/ensayo/paises 





module.exports = router;





