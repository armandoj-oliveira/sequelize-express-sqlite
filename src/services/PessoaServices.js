const dataSource = require('../database/models');
const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() { 
        super('Pessoa');
        this.matriculaServices = new Services('Matricula');
    }

    async pegarMatriculasAtivasPorEstudantes(id) {
        const estudante = await super.pegarRegistroPorID(id);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }

    async pegarTodasMatriculasPorEstudantes(id) {
        const estudante = await super.pegarRegistroPorID(id);
        const listaMatriculas = await estudante.getTodasMatriculas();
        return listaMatriculas;
    }

    async pegaPessoaEscopoTodos() {
        const listaPessoas = await super.pegaRegistrosEscopo('todosRegistros');
        return listaPessoas;
    }

    async cancelarPessoaEmMatriculas(estudanteId) {
        return dataSource.sequelize.transaction(async (transacao) => {
            await super.atualizarRegistro({ ativo: false }, { id: estudanteId }, transacao);
            await this.matriculaServices.atualizarRegistro({ status: 'cancelado' }, { estudante_id: estudanteId }, transacao);
        });
    }
}

module.exports = PessoaServices;