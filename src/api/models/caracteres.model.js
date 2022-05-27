const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let caracterSchema = new Schema(
  {
    raza: {
      type: "string",
      required: true,
    },
    poder: {
      type: "string",
      required: true,
    },
    foto: {
      type: "string",
      required: true,
    },
    habilidades: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
  
);
const Caracter = mongoose.model('caracteres',caracterSchema);

  module.exports = Caracter