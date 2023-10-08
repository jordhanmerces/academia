const bancoDeDados = require('../dados');

// Função para listar todos os alunos
const listaAlunos = (req, res) => {
    res.json(bancoDeDados.alunos);
};

// Função para adicionar um novo aluno 
const adicionarAluno = (req, res) => {
    const { nome, email, status } = req.body;
    const novoAluno = {
        id: bancoDeDados.identificadorAluno++,
        nome,
        email,
        status
    };
    bancoDeDados.alunos.push(novoAluno);
    res.json(novoAluno);
};

// Função para atualizar os dados de um aluno pelo ID
const atualizarAluno = (req, res) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;

    const alunoIndex = bancoDeDados.alunos.findIndex(aluno => aluno.id == id);

    if (alunoIndex !== -1) {
        bancoDeDados.alunos[alunoIndex] = {
            id: parseInt(id),
            nome,
            email,
            status
        };
        res.json(bancoDeDados.alunos[alunoIndex]);
    } else {
        res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }
};

// Função para alterar o status de um aluno (por exemplo, mensalidade paga)
const statusAluno = (req, res) => {
    const { id } = req.body;

    const aluno = bancoDeDados.alunos.find(aluno => aluno.id == id);

    if (aluno) {
        aluno.status = !aluno.status; // Alterna o status
        res.json(aluno);
    } else {
        res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }
};

// Função para deletar um aluno pelo ID
const deletarAluno = (req, res) => {
    const { id } = req.body;

    const alunoIndex = bancoDeDados.alunos.findIndex(aluno => aluno.id == id);

    if (alunoIndex !== -1) {
        const alunoRemovido = bancoDeDados.alunos.splice(alunoIndex, 1);
        res.json(alunoRemovido[0]);
    } else {
        res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }
};

module.exports = {
    listaAlunos,
    adicionarAluno,
    atualizarAluno,
    statusAluno,
    deletarAluno
};
