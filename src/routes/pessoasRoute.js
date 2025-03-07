const { Router } = require('express');
const PessoaController = require('../controller/PessoaController.js');
const MatriculaController = require('../controller/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();
const router = Router();

// Pessoas
router.get('/pessoas', (req, res) => pessoaController.pegarTodosRegistros(req, res));
router.get('/pessoas/todos', (req, res) => pessoaController.pegarTodasPessoas(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.pegarRegistroPorID(req, res));
router.post('/pessoas', (req, res) => pessoaController.cadastrarNovoRegistro(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualizarRegistro(req, res));
router.put('/pessoas/:estudante_id/cancelar', (req, res) => pessoaController.cancelarRegistroEstudante(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.excluirRegistro(req, res));

// Matriculas
router.get('/pessoas/:estudante_id/matriculas', (req, res) => pessoaController.pegarMatriculasAtivas(req, res));
router.get('/pessoas/:estudante_id/matriculas/todos', (req, res) => pessoaController.pegarTodasMatriculas(req, res));
router.get('/pessoas/:estudante_id/matriculas/confirmadas', (req, res) => matriculaController.pegarMatriculasPorEstudante(req, res));
router.get('/pessoas/matriculas/lotadas', (req, res) => matriculaController.pegarMatriculasPorEstudante(req, res));
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.pegarUmRegistro(req, res));
router.post('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.cadastrarNovoRegistro(req, res));
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.atualizarRegistro(req, res));
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.excluirRegistro(req, res));

module.exports = router;