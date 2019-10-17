var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {  
        id_sitio: {type: Schema.Types.ObjectId, ref: 'sitios', required: false},
        id_empleado: {type: Schema.Types.ObjectId, ref: 'empleados', required: false},
        id_sistema: {type: Schema.Types.ObjectId, ref: 'sistemas', required: false}, 
        id_equipo: {type: Schema.Types.ObjectId, ref: 'equipos', required: false},
        fecha_automatica: {type: Date, default: Date.now()},
         dato_obtenido: Number,
        subtipo_valor_numero:  {type: Schema.Types.ObjectId, ref: 'numeros', required: false},

    }
);
module.exports = mongoose.model('master_numericos',esquema);