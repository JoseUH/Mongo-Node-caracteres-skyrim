
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();


const { connect } = require("./src/utils/database");

connect();


const server = express();


const PORT = process.env.PORT || 8080;


server.use(express.json());


server.use(express.urlencoded({ extended: false }));


const CaracteresRoutes = require("./src/api/routes/caracteres.routes");

server.use("/caracteres", CaracteresRoutes);

server.use("*", (req, res, next) => {
    return next("Ruta no encontrada");
});

//----Escuchamos nuestro servidor en el puerto deseado
server.listen(PORT, () => {
    console.log(`Servidor arrancado en http://localhost:${PORT}`);
});