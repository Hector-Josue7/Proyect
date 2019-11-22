const express = require('express');
const bodyParser = require('body-parser');
var mysql = require("mysql");
var credenciales = {
    host:"localhost",
    user:"root",
    password:"",
    port:"3306",
    database: "bd_rutinas"
  };
// insertar un pais
function insertarPais(req, res){
    var conexion = mysql.createConnection(credenciales);
     conexion.query(
        "INSERT INTO tbl_paises(PAIS) VALUES (?)",
        [req.body.PAIS],
        function(error, data, fields){
            if (error){
         res.status(500).send({message: `Error al salvar en la base de datos: ${error}`})
                res.end();
            }else{
              res.status(200).send({dato: data}) 
              res.end();
            }});
}


function eliminaCiudad(req, res){
    var sql = "DELETE FROM tbl_ciudades WHERE ID_CIUDAD = ?";
    var conexion = mysql.createConnection(credenciales);
    conexion.query(sql, [req.params.id],  (error, data, fields)=>{
        console.log(error);
        res.send(data);
        res.end();
        conexion.end();
    })
}

function actualizarCiudad(req, res){ // http://localhost:4000/users/actualizar/id
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
}
function insertaActividad(req,res){  // http://localhost:4000/ensayo/enviar
    var conexion = mysql.createConnection(credenciales);
     conexion.query(
        "INSERT INTO tbl_actividades(DESCRIPCION, FECHA_INICIO, FECHA_PROPUESTA_FINAL) VALUES (?, ?, ?)",
        [ req.body.DESCRIPCION, req.body.FECHA_INICIO, req.body.FECHA_PROPUESTA_FINAL],
        function(error, data, fields){
            if (error){
         res.status(500).send({message: `Error al salvar en la base de datos: ${error}`})
                res.end();
            }else{
              res.status(200).send({dato: data}) 
              res.end();
            }});
}
function devuelveUnidad(req, res){   
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        `SELECT * FROM tbl_unidades
WHERE ID_UNIDAD=?;`,
        [req.params._id],
        function(error, data, fields){
            res.send(data);
            res.end();
        });
}

function devuelveUnidades(req,res){ 
    var conexion = mysql.createConnection(credenciales);
    conexion.query(
        "SELECT * FROM `tbl_ciudades`",
        [], (error, data, fields)=>{
            console.log(error);
            res.send(data);
            res.end();
            conexion.end();
        });
}
module.exports = {
    insertarPais,
    eliminaCiudad,
    actualizarCiudad,
    insertaActividad,
    devuelveUnidad,
    devuelveUnidades
} 


