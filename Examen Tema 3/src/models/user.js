const mongoose = require("mongoose");

//Estructura del Esquema que se Almacenara En MongoDB.
const userSchema = mongoose.Schema({
  Nombre: {
    type: String,
    required: true,
  },
  Edad: {
    type: Number,
    required: true
  },
  Correo_Electronico: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('User', userSchema);