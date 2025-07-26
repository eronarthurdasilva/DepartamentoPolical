const express = require('express');
const router = express.Router();
const casosController = require('../controllers/casosController');

//rotas do método get para casos
router.get('/casos', casosController.getAllCasos);

//rota para criar casos
router.post('/casos', casosController.createCaso);


module.exports = router;