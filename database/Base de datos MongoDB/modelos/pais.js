var mongoose = require("mongoose");
const { Schema } = mongoose;

var esquema = new mongoose.Schema(
    {   codigo_pais: String,
      nombre_pais: String
    }
);
module.exports = mongoose.model('paises',esquema);