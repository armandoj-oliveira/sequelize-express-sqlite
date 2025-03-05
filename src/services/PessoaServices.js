const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() { 
        super('Pessoa');
    }

    async pegarMatriculasPorEstudantes(id) {
        const estudante = await super.pegarRegistroPorID(id);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }
}

module.exports = PessoaServices;