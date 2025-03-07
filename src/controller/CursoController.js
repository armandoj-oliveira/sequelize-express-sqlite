const { Op } = require('sequelize'); 

const Controller = require('./Controller.js');
const CursoService = require('../services/CursoServices.js');

const cursoService = new CursoService();

class CursoController extends Controller {
    constructor() {
        super(cursoService);
    }

    async pegarCursos(req, res) {
        const { data_inicial, data_final } = req.query;
        const where = {};

        // Caso existirem os parms, criar uma prop{}
        data_inicial || data_final ? where.data_inicio = {} : null;

        // Se existir data_inicial, adicionar a prop com o valor
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;

        // Se existir data_final, adicionar a prop com o valor
        data_final ? where.data_inicio[Op.lte] = data_final : null;

        try {
            const listaCursos = await cursoService.pegarTodosRegistros(where);
            return res.status(200).json(listaCursos);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }

    }
}

module.exports = CursoController;