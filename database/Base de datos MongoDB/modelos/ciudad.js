var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {  
        codigo_pais: {type: Schema.Types.ObjectId, ref: 'paises', required: false}, 
        nombre_ciudad: String,
        sitios: Array

    }
);
module.exports = mongoose.model('ciudades',esquema);