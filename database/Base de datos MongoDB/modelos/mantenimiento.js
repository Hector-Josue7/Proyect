var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {  
        nombre_mantenimiento: String,
        frecuencia: String,
        fecha_propuesta_inicial: {type: Date, default: Date.now()},
        fecha_propuesta_final: Date,
        codigo: String,
        edicion:String
    }
);
module.exports = mongoose.model('mantenimientos',esquema);