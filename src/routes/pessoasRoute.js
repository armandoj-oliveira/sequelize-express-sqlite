const { Router } = require('express');
const PessoaController = require('../controller/PessoaController.js');
const MatriculaController = require('../controller/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();
const router = Router();

router.get('/pessoas', (req, res) => pessoaController.pegarTodosRegistros(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.pegarRegistroPorID(req, res));
router.post('/pessoas', (req, res) => pessoaController.cadastrarNovoRegistro(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualizarRegistro(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.excluirRegistro(req, res));

router.get('/pessoas/:estudanteId/mariculas', (req, res) => pessoaController.pegarMatriculas(req, res));
router.post('/pessoas/:estudanteId/mariculas', (req, res) => matriculaController.cadastrarNovoRegistro(req, res));

module.exports = router;