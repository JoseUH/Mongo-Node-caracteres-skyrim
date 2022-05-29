
const mongoose = require("mongoose");

const Caracter = require("../api/models/caracteres.model");


const caracteres = [
  {
    raza: "Altmer",
      poder: "Aristocrático",
      foto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzAJtI37NrBWi18gJzyY9D8DAp_YUNj1NGQ&usqp=CAU",
      habilidades: "+50 reserva de magia",
  },
  {
    raza: "Argoniano",
      poder: "Piel de Hist",
      foto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbXJ3e-qaNeFlEoiCBHimgM8DdYE0KNnaDA&usqp=CAU",
      habilidades: "+50% resistencia a venenos y enfermedades",
  },
  {
    raza: "Bosmer",
      poder: "Dominar animal",
      foto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREapawt58dFAkUE12SQQlswOumXJ6nkYh0fQ&usqp=CAU",
      habilidades: "+50% resistencia a venenos y enfermedades",
  },
  {
    raza: "Bretón",
      poder: "Piel de Dragón",
      foto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJa35p344SYlhvt5vlyaoUMHIkKB39bbOnw&usqp=CAU",
      habilidades: "+25% resistencia a magia",
  },
  {
    raza: "Dunmer",
    poder: "Ira del antepasado",
    foto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rKXXNWJ1RrKzEvIc52hGHRqpzrqpUYdm1w&usqp=CAU",
    habilidades: "+50% resistencia al fuego",
  },
  {
    raza: "Guardia rojo",
    poder: "Subida de adrenalina",
    foto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqiZ2WYfIxCC4cE5VEcNIW-6WmwbzDrYABw&usqp=CAU",
    habilidades: "+50% de resistencia al veneno",
  },
  {
    raza: "Khajiita",
    poder: "Ojo nocturno",
    foto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOTq4amG5N8tIY8NI7fpt-2BFMFblLzwb8A&usqp=CAU",
    habilidades: "Garras Letales (x4 el daño  desarmado)",
  },
  {
    raza: "Nórdico",
    poder: "Grito de batalla",
    foto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaI-cLy4d_CwBLeZv-yzhbwPpVV9J0O22GIw&usqp=CAU",
    habilidades: "+50% resistencia al frío",
  },
  {
    raza: "Orco",
    poder: "Ira del berserker",
    foto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqHZiD_efgMBPuoemyTlGXh_ozU_Po_qejw&usqp=CAU",
    habilidades: "Ninguna",
  },
  {
    raza: "Imperial",
    poder: " Voz del emperador",
    foto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2itWqveacGyTHlQsLoBpv7aoYJPPR60LtA&usqp=CAU",
    habilidades: "Suerte Imperial",
  },

];

const caracteresDocuments = caracteres.map((caracter) => new Caracter(caracter));

mongoose
  .connect("mongodb://localhost:27017/skyrim", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    //Mediante el metodo find obtendremos un array con todas las caracteres de mi base de datos
    const allcaracteres = await Caracter.find();
    
    if (allcaracteres.length) {
      await Caracter.collection.drop();
      console.log("caracteres DB deleted")
    }
  })
  .catch((error) => console.log("Error deleting caracteres", error))
  //Si no hay caracteres me insertas cuantas tengas en caracteresDocument
  .then(async () => {
    await Caracter.insertMany(caracteresDocuments);
    console.log("caracteres DB created")
  })
  .catch((error) => console.log("Error creating caracteres", error))
  //Al final del todo nos desconectamos de mongoose
  .finally(() => mongoose.disconnect());