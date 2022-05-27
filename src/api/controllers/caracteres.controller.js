const Caracter = require("../models/caracteres.model");

// creamos nuestro método getAllPeliculas
const getCaracteres = async (req, res, next) => {

    try {

        
        const allCaracteres = await Caracter.find();

        
        return res.status(200).json(allCaracteres);
        
    } catch (error) {
        return next(error);
    }

}


const getCaracterByID = async (req, res, next) => {

    try {

        
        const { id } = req.params;

        const CaracterDB = await Caracter.findById(id);

        
        return res.status(200).json(CaracterDB);
        
    } catch (error) {
        return next(error);
    }

}


const getCaracterByRaza = async (req, res, next) => {

    try {

        
        const { raza } = req.params;

        // hacemos el .find con el título para encontrarla
        const CaracterDB = await Caracter.findOne({ raza: raza });

        // devolvemos el resultado
        return res.status(200).json(CaracterDB);
        
    } catch (error) {
        return next(error);
    }

}

const getCaracteresByPoder = async (req, res, next) => {

    try {

        
        const { poder } = req.params

        
        const Caracteres = await Caracter.find({ poder: poder });

        // devolvemos el resultado
        return res.status(200).json(Caracteres);
        
    } catch (error) {
        return next(error)
    }

}

const postNewCaracter = async (req, res, next) => {

    try {

        const newCaracter = new Caracter(req.body);

        const caracterDB = await newCaracter.save();

        return res.status(200).json(caracterDB);
        
    } catch (error) {
        return next(error);
    }

}

const deleteCaracter = async (req, res, next) => {

    try {

        const { id } = req.params;

        const caracrweBorrada = await Caracter.findByIdAndDelete(id)

        return res.status(200).json(caracterBorrada);
        
    } catch (error) {
        return next(error)
    }

}

const patchCaracter = async (req, res, next) => {

    try {

        const { id } = req.params;

        const patchCaracter = new Caracter(req.body);

        patchCaracter._id = id;

        const CaracterDB = await Caracter.findByIdAndUpdate(id, patchCaracter);

        return res.status(200).json({ nuevo: patchCaracter, vieja: CaracterDB})
        
    } catch (error) {
        return next(error)
    }

}

module.exports = {

    getCaracteres,
    getCaracterByID,
    getCaracterByRaza,
    getCaracteresByPoder,
    postNewCaracter,
    deleteCaracter,
    patchCaracter

}