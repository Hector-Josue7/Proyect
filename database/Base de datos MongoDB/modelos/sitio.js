var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {  
        codigo_ciudad: {type: Schema.Types.ObjectId, ref: 'ciudades', required: false}, 
        nombre_sitio: String,
        triliteral: String,
        localidades: Array 

    }
);
module.exports = mongoose.model('sitios',esquema);