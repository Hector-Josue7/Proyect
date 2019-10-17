var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {  
        id_sitio: {type: Schema.Types.ObjectId, ref: 'sitios', required: false},
        id_empleado: {type: Schema.Types.ObjectId, ref: 'empleados', required: false},
        id_sistema: {type: Schema.Types.ObjectId, ref: 'sistemas', required: false}, 
        id_equipo: {type: Schema.Types.ObjectId, ref: 'equipos', required: false},
        fecha_automatica: {type: Date, default: Date.now()},
        subtipo_valor_booleano:  {type: Schema.Types.ObjectId, ref: 'booleanos', required: false},
        subtipo_valor_lista:  {type: Schema.Types.ObjectId, ref: 'listas', required: false},

    }
);
module.exports = mongoose.model('masters',esquema);