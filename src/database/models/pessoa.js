'use strict';

const isCPFValido = require('../../utils/validaCPFHelper.js');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: 'docente_id'
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        scope: { status: 'matriculado' }, // Escopo para trazer o que está matriculado.
        as: 'aulasMatriculadas'
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        as: 'todasMatriculas'
      });
    }
  }
  Pessoa.init({
    nome:  {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 50],
          msg: 'O campo "Nome", deve conter entre 3 a 50 caracteres.'
        }
      }
    },
    email:  {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Formato de e-mail inválido.'
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: { 
        cpfEhValido: (cpf) => {
          if(!isCPFValido(cpf)) throw new Error('Número de CPF inválido.')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
    paranoid: true, //  Permite desativar um usuário sem removê-lo do banco.
    defaultScope: {
      where: {
        ativo: true // Escopo do modelo para retornar apenas registros ativos.
      }
    },
    scopes: {
      todosRegistros: {
        where: { }
      }
    }
  });
  return Pessoa;
};