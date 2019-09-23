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




// Sun Sep 30 2018 08:17:00 GMT-0600 (hora estándar central)
// Sat Jan 12 2019 23:26:45 GMT-0600 (hora estándar central)
// 30/09/2018
// 01/12/2019

module.exports = router;





