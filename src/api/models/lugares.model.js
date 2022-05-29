const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ciudadSchema = new Schema(
  {
    lugar: {
      type: "string",
      required: true,
    },
    comarca: {
      type: "string",
      required: true,
    },
    escudo: {
      type: "string",
      required: true,
    },
    descripcion: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
  
);
const Ciudad = mongoose.model('ciudades',ciudadSchema);

  module.exports = Ciudad