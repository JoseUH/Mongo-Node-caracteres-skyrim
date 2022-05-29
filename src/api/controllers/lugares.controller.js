const Ciudad = require("../models/lugares.model");


const getCiudades = async (req, res, next) => {
  try {
    const allCiudades = await Ciudad.find();

    return res.status(200).json(allCiudades);
  } catch (error) {
    return next(error);
  }
};

const getCiudadByID = async (req, res, next) => {
  try {
    const { id } = req.params;

    const CiudadDB = await Ciudad.findById(id);

    return res.status(200).json(CiudadDB);
  } catch (error) {
    return next(error);
  }
};

const getCiudadByLugar = async (req, res, next) => {
  try {
    const { lugar } = req.params;

 
    const CiudadDB = await Ciudad.findOne({ lugar: lugar });

    
    return res.status(200).json(CiudadDB);
  } catch (error) {
    return next(error);
  }
};

const getCiudadesByComarca = async (req, res, next) => {
  try {
    const { comarca } = req.params;

    const Ciudades = await Ciudad.find({ comarca: comarca });

    return res.status(200).json(Ciudades);
  } catch (error) {
    return next(error);
  }
};

const postNewCiudad = async (req, res, next) => {
  try {
    const newCiudad = new Ciudad(req.body);

    const ciudadDB = await newCiudad.save();

    return res.status(200).json(ciudadDB);
  } catch (error) {
    return next(error);
  }
};

const deleteCiudad = async (req, res, next) => {
  try {
    const { id } = req.params;

    const ciudadBorrada = await Ciudad.findByIdAndDelete(id);

    return res.status(200).json(ciudadBorrada);
  } catch (error) {
    return next(error);
  }
};

const patchCiudad = async (req, res, next) => {
  try {
    const { id } = req.params;

    const patchCiudad = new Ciudad(req.body);

    patchCiudad._id = id;

    const CiudadDB = await Ciudad.findByIdAndUpdate(id, patchCiudad);

    return res.status(200).json({ nuevo: patchCiudad, vieja: CiudadDB });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getCiudades,
  getCiudadByID,
  getCiudadByLugar,
  getCiudadesByComarca,
  postNewCiudad,
  deleteCiudad,
  patchCiudad,
};
