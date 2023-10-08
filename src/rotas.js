const express = require('express');
const {
    listaAlunos,
    adicionarAluno,
    deletarAluno,
    atualizarAluno,
    statusAluno
} = require('./controladores/controladores')

const rotas = express();

rotas.get('/alunos', listaAlunos);
rotas.post('/adicionar', adicionarAluno);
rotas.put('/editar/:id', atualizarAluno);
rotas.patch('/mensalidade', statusAluno);
rotas.delete('/deletar', deletarAluno);

module.exports = rotas;