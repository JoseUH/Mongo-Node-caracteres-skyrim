
const CaracteresRoutes = require('express').Router();

const { getCaracteres, getCaracterByID, getCaracterByRaza, getCaracteresByPoder, postNewCaracter, deleteCaracter, patchCaracter } = require('../controllers/caracteres.controller');

CaracteresRoutes.get('/', getCaracteres);
CaracteresRoutes.get('/id/:id', getCaracterByID);
CaracteresRoutes.get('/raza/:raza', getCaracterByRaza);
CaracteresRoutes.get('/poder/:poder', getCaracteresByPoder);
CaracteresRoutes.post('/', postNewCaracter);
CaracteresRoutes.delete('/:id', deleteCaracter);
CaracteresRoutes.patch('/:id', patchCaracter)


module.exports = CaracteresRoutes