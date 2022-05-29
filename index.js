
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();


const { connect } = require("./src/utils/database");

connect();


const server = express();


const PORT = process.env.PORT || 8080;


server.use(express.json());


server.use(express.urlencoded({ extended: false }));

const CiudadesRoutes = require("./src/api/routes/lugares.routes");
const CaracteresRoutes = require("./src/api/routes/caracteres.routes");

server.use("/ciudades", CiudadesRoutes);
server.use("/caracteres", CaracteresRoutes);

server.use("*", (req, res, next) => {
    return next("Ruta no encontrada");
});

server.listen(PORT, () => {
    console.log(`Servidor arrancado en http://localhost:${PORT}`);
});