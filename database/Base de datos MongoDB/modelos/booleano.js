var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {   
        subtipo_booleano: String,
        valor_cadena: String
    }
);
module.exports = mongoose.model('booleanos',esquema);