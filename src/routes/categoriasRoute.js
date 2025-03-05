const { Router } = require('express');
const CategoriaController = require('../controller/CategoriaController.js');

const categoriaController = new CategoriaController();
const router = Router();

router.get('/categoria', (req, res) => categoriaController.pegarTodosRegistros(req, res));
router.get('/categoria/:id', (req, res) => categoriaController.pegarRegistroPorID(req, res));
router.post('/categoria', (req, res) => categoriaController.cadastrarNovoRegistro(req, res));
router.put('/categoria/:id', (req, res) => categoriaController.atualizarRegistro(req, res));
router.delete('/categoria/:id', (req, res) => categoriaController.excluirRegistro(req, res));

module.exports = router;