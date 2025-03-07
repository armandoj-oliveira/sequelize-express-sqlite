const { Router } = require('express');
const CategoriaController = require('../controller/CategoriaController.js');

const categoriaController = new CategoriaController();
const router = Router();

router.get('/categorias', (req, res) => categoriaController.pegarTodosRegistros(req, res));
router.get('/categorias/:id', (req, res) => categoriaController.pegarRegistroPorID(req, res));
router.post('/categorias', (req, res) => categoriaController.cadastrarNovoRegistro(req, res));
router.put('/categorias/:id', (req, res) => categoriaController.atualizarRegistro(req, res));
router.delete('/categorias/:id', (req, res) => categoriaController.excluirRegistro(req, res));

module.exports = router;