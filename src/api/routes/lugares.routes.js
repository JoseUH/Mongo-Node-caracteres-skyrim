const CiudadesRoutes = require('express').Router();

const { getCiudades, getCiudadByID, getCiudadByLugar, getCiudadesByComarca, postNewCiudad, deleteCiudad, patchCiudad } = require('../controllers/lugares.controller');

CiudadesRoutes.get('/', getCiudades);
CiudadesRoutes.get('/id/:id', getCiudadByID);
CiudadesRoutes.get('/lugar/:lugar', getCiudadByLugar);
CiudadesRoutes.get('/comarca/:comarca', getCiudadesByComarca);
CiudadesRoutes.post('/', postNewCiudad);
CiudadesRoutes.delete('/:id', deleteCiudad);
CiudadesRoutes.patch('/:id', patchCiudad)


module.exports = CiudadesRoutes