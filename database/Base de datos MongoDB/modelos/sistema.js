var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {  
        codigo_unidad: {type: Schema.Types.ObjectId, ref: 'unidades', required: false}, 
        nombre_sistema: String,
        formatos: Array
    }
);
module.exports = mongoose.model('sistemas',esquema);