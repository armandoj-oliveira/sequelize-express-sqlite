const Controller = require('./Controller.js');
const CursoService = require('../services/CursoServices.js');

const cursoService = new CursoService();

class CursoController extends Controller {
    constructor() {
        super(cursoService);
    }
}

module.exports = CursoController;