var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {   
       valor_minimo: Number,
       valor_maximo: Number
    }
);
module.exports = mongoose.model('numeros',esquema);