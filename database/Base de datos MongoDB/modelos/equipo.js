var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {  
        codigo_subSistema: {type: Schema.Types.ObjectId, ref: 'sub_sistemas', required: false}, 
        nombre_equipo: String,
        componente_final: Array
    }
);
module.exports = mongoose.model('equipos',esquema);