const { Router } = require('express');
const CursoController = require('../controller/CursoController.js');

const cursoController = new CursoController();
const router = Router();

router.get('/cursos', (req, res) => cursoController.pegarCursos(req, res));
router.get('/cursos/:id', (req, res) => cursoController.pegarRegistroPorID(req, res));
router.post('/cursos', (req, res) => cursoController.cadastrarNovoRegistro(req, res));
router.put('/cursos/:id', (req, res) => cursoController.atualizarRegistro(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.excluirRegistro(req, res));

module.exports = router;