var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {   
        codigo_unidad: {type: Schema.Types.ObjectId, ref: 'unidades', required: true},
        nombre_empleado: String,
        correo: String,
        usuario: String,
        contraseña: String,
        cargo: String,
        acceso: Boolean 
    }
);
module.exports = mongoose.model('empleados',esquema);





