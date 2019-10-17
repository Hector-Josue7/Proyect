var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {  
        codigo_sistema: {type: Schema.Types.ObjectId, ref: 'sistemas', required: false}, 
        nombre_subsistema: String,
        
    }
);
module.exports = mongoose.model('sub_sistemas',esquema);