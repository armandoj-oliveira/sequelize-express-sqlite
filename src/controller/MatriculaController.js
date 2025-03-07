const Sequelize = require('sequelize');

const Controller = require('./Controller.js');
const MatriculaService = require('../services/MatriculaService.js');

const matriculaService = new MatriculaService();

class MatriculaController extends Controller {
    constructor() {
        super(matriculaService);
    }

    async pegarMatriculasPorEstudante(req, res) {
        const { estudante_id } = req.params;

        try {
            const listaMatriculasPorEstudante = await matriculaService.pegarEContarRegistro({
                where: {
                    estudante_id: Number(estudante_id),
                    status: 'matriculado'
                },
                limit: 5,
                order: [['id', 'ASC']]
            });
            return res.status(200).json(listaMatriculasPorEstudante);
        } catch(erro) {
            return res.status(500).json({ mensagem: 'Erro interno no sistema.', detalhes: erro.message })
        }
    }

    async pegarCursosLotados(req, res) {
        const lotacaoCursos = 2;

        try {
            const cursosLotados = await matriculaService.pegarEContarRegistro({
                where: {
                    status: 'matriculado'
                },
                atributes: ['curso_id'],
                group: ['curso_id'],
                having: Sequelize.literal(`count(curso_id) >= ${lotacaoCursos}`)
            });
            return res.status(200).json(cursosLotados);
        } catch(erro) {
            return res.status(500).json({ mensagem: 'Erro interno no sistema.', detalhes: erro.message })
        }
    }
}

module.exports = MatriculaController;