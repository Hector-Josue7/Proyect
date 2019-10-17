var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {  
    codigo_sitio: {type: Schema.Types.ObjectId, ref: 'sitios',  required: false, nombre_ciudad: String},
    nombre_unidad: String,
}
);
module.exports = mongoose.model('unidades',esquema);