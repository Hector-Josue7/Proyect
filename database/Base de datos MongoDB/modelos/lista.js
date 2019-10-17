var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {   

        subtipo_lista: String,
        valor_cadena: String
    }
);
module.exports = mongoose.model('listas',esquema);