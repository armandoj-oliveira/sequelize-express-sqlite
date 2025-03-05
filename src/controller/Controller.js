class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async pegarTodosRegistros(req, res) {
        try {
            const listaRegistros = await this.entidadeService.pegarTodosRegistros();
            return res.status(200).json(listaRegistros);
        } catch (erro) {
            return res.status(500).json({ erro: 'Erro ao buscar registros', detalhes: erro.message });
        }
    }

    async pegarRegistroPorID(req, res) {
        const { id } = req.params;

        try {
            const registroID = await this.entidadeService.pegarRegistroPorID(id);

            if (!registroID) {
                return res.status(404).json({ mensagem: `Registro com ID ${id} não localizado!` });
            }

            return res.status(200).json(registroID);
        } catch (erro) {
            return res.status(500).json({ erro: 'Erro ao buscar registro', detalhes: erro.message });
        }
    }

    async cadastrarNovoRegistro(req, res) {
        const dadosCadastrais = req.body;

        try {
            const novoRegistro = await this.entidadeService.cadastrarNovoRegistro(dadosCadastrais);
            return res.status(201).json({ mensagem: 'Registro criado com sucesso!', registro: novoRegistro });
        } catch (erro) {
            return res.status(500).json({ erro: 'Erro ao cadastrar registro', detalhes: erro.message });
        }
    }

    async atualizarRegistro(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;

        try {
            const atualizado = await this.entidadeService.atualizarRegistro(dadosAtualizados, Number(id));

            if (atualizado === 0) {
                return res.status(404).json({ mensagem: `Registro com ID ${id} não encontrado ou não foi alterado.` });
            }

            return res.status(200).json({ mensagem: `Registro com ID ${id} atualizado com sucesso!` });
        } catch (erro) {
            return res.status(500).json({ erro: 'Erro ao atualizar registro', detalhes: erro.message });
        }
    }

    async excluirRegistro(req, res) {
        const { id } = req.params;

        try {
            const deletado = await this.entidadeService.excluirRegistro(id);

            if (deletado === 0) {
                return res.status(404).json({ mensagem: `Registro com ID ${id} não encontrado!` });
            }

            return res.status(200).json({ mensagem: `Registro com ID ${id} excluído com sucesso!` });
        } catch (erro) {
            return res.status(500).json({ erro: 'Erro ao excluir registro', detalhes: erro.message });
        }
    }
}

module.exports = Controller;
