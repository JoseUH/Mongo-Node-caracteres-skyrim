const mongoose = require("mongoose");

const Ciudad = require("../api/models/lugares.model");


const ciudades = [
  {
    lugar: "Markarth",
      comarca: "La Cuenca",
     escudo:
        "https://static.wikia.nocookie.net/elderscrolls/images/7/79/Markarth.svg/revision/latest/scale-to-width-down/35?cb=20121011172341&path-prefix=es",
      descripcion: "Una ciudad de piedra construida sobre una antigua ciudad enana",
  },
  {
    lugar: "Carrera Blanca",
      comarca: "Carrera Blanca",
      escudo:
        "https://static.wikia.nocookie.net/elderscrolls/images/1/16/Carrera_Blanca.svg/revision/latest/scale-to-width-down/26?cb=20121011163337&path-prefix=es",
      descripcion: "En el centro de Skyrim, es la sede de Los Compañeros",
  },
  {
    lugar: "Falkreath",
      comarca: "Falkreath",
      escudo:
        "https://static.wikia.nocookie.net/elderscrolls/images/a/aa/Falkreath.svg/revision/latest/scale-to-width-down/26?cb=20121011165805&path-prefix=es",
      descripcion: "Asentamiento boscoso, cerca se encuentra la sede de la Hermandad Oscura",
  },
  {
    lugar: "Riften",
      comarca: "La Grieta",
      escudo:
        "https://static.wikia.nocookie.net/elderscrolls/images/f/f1/Riften.svg/revision/latest/scale-to-width-down/26?cb=20121011172653&path-prefix=es",
      descripcion: "Ciudad decadente, es la sede del Gremio de Ladrones",
  },
  {
    lugar: "Hibernalia",
    comarca: "Hibernalia",
    escudo:
      "https://static.wikia.nocookie.net/elderscrolls/images/7/7f/Hibernalia.svg/revision/latest/scale-to-width-down/26?cb=20121011172032&path-prefix=es",
    descripcion: "El más pequeño de todos, prácticamente un pueblo, si no fuera porque es la sede del Colegio de Hibernalia",
  },
  {
    lugar: "Lucero del Alba",
    comarca: "El pálido",
    escudo:
      "https://static.wikia.nocookie.net/elderscrolls/images/2/25/Lucero_del_Alba.svg/revision/latest/scale-to-width-down/26?cb=20121015000600&path-prefix=es",
    descripcion: "Un asentamiento portuario, con dos minas; más tarde será la nueva sede de la Hermandad Oscura",
  },
  {
    lugar: "Morthal",
    comarca: "Marca de Hjaal",
    escudo:
      "https://static.wikia.nocookie.net/elderscrolls/images/9/99/Morthal.svg/revision/latest/scale-to-width-down/26?cb=20121011172953&path-prefix=es",
    descripcion: "Pequeña ciudad de esta región pantanosa",
  },
  {
    lugar: "Soledad",
    comarca: "Haafingar",
    escudo:
      "https://static.wikia.nocookie.net/elderscrolls/images/a/ad/Soledad.svg/revision/latest/scale-to-width-down/26?cb=20121011171725&path-prefix=es",
    descripcion: "Capital de Skyrim, es la sede de la Legión Imperial y el Colegio de Bardos",
  },
  {
    lugar: "Ventalia",
    comarca: "Marca Oriental",
    escudo:
      "https://static.wikia.nocookie.net/elderscrolls/images/7/78/Ventalia.svg/revision/latest/scale-to-width-down/26?cb=20121011173620&path-prefix=es",
    descripcion: "Antigua capital de Skyrim, aquí tiene su origen la rebelión de los Capas de la Tormenta",
  },
 
];

const ciudadesDocuments = ciudades.map((ciudad) => new Ciudad(ciudad));

mongoose
  .connect("mongodb://localhost:27017/skyrim", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    //Mediante el metodo find obtendremos un array con todas las caracteres de mi base de datos
    const allciudades = await Ciudad.find();
    
    if (allciudades.length) {
      await Ciudad.collection.drop();
      console.log("ciudades DB deleted")
    }
  })
  .catch((error) => console.log("Error deleting ciudades", error))

  .then(async () => {
    await Ciudad.insertMany(ciudadesDocuments);
    console.log("ciudades DB created")
  })
  .catch((error) => console.log("Error creating ciudades", error))
 
  .finally(() => mongoose.disconnect());