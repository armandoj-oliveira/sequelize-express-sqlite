const dataSource = require('../models');

class Services {
    constructor(nomeModels) {
        this.model = nomeModels;
    }

    async pegarTodosRegistros() {
        return dataSource[this.model].findAll();
    }

    async pegarRegistroPorID(id) {
        return dataSource[this.model].findByPk(id);
    }

    async cadastrarNovoRegistro(dadosCadastrais) {
        return dataSource[this.model].create(dadosCadastrais);
    }

    async atualizarRegistro(dadosAtualizados, id) {
        const listaRegistroAtualizado = dataSource[this.model].update(dadosAtualizados, {
            where: { id }
        });

        if(listaRegistroAtualizado[0] === 0) {
            return false;
        }

        return true;
    }

    async excluirRegistro(id) {
        return dataSource[this.model].destroy({ where: { id }});
    }

}

module.exports = Services;