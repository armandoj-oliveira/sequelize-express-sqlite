const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }

    async pegarMatriculasAtivas(req, res) {
        const { estudante_id } = req.params;
    
        try {
            const listaMatriculas = await pessoaServices.pegarMatriculasAtivasPorEstudantes(Number(estudante_id));
            return res.status(200).json(listaMatriculas);
        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro interno no servidor", erro: erro.message });
        }
    }

    async pegarTodasMatriculas(req, res) {
        const { estudante_id } = req.params;
    
        try {
            const listaMatriculas = await pessoaServices.pegarTodasMatriculasPorEstudantes(Number(estudante_id));
            return res.status(200).json(listaMatriculas);
        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro interno no servidor", erro: erro.message });
        }
    }

    async pegarTodasPessoas(req, res) {
        try {
            const listaTodasPessoas = await pessoaServices.pegaPessoaEscopoTodos();
            return res.status(200).json(listaTodasPessoas);
        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro interno no servidor", erro: erro.message });
        }
    }

    async cancelarRegistroEstudante(req, res) {
        const { estudante_id } = req.params;
        
        try {
            await pessoaServices.cancelarPessoaEmMatriculas(Number(estudante_id));
            return res.status(200).json({ mensagem: `Matriculas referentes ao estudante ${estudante_id} canceladas.` });
        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro interno no servidor", erro: erro.message });
        }
    }
}

module.exports = PessoaController;