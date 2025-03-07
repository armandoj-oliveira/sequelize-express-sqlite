const dataSource = require('../database/models');

class Services {
    constructor(nomeModels) {
        this.model = nomeModels;
    }

    async pegarTodosRegistros(where = {}) {
        return dataSource[this.model].findAll({ where: { ...where } });
    }

    async pegaRegistrosEscopo(escopo) {
        return dataSource[this.model].scope(escopo).findAll();
    }

    async pegarRegistroPorID(id) {
        return dataSource[this.model].findByPk(id);
    }

    async pegarUmRegistro(where) {
        return dataSource[this.model].findOne({ where: { ...where}});
    }

    async pegarEContarRegistro(options) {
        return dataSource[this.model].findAndCountAll({ where: { ...options } });
    } 

    async cadastrarNovoRegistro(dadosCadastrais) {
        return dataSource[this.model].create(dadosCadastrais);
    }

    async atualizarRegistro(dadosAtualizados, where, transacao = {}) {
        const listaRegistroAtualizado = dataSource[this.model].update(dadosAtualizados, {
            where: { ...where }, 
            transaction: transacao
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