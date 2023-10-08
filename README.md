# Academia Simples ![Vamos lá](https://user-images.githubusercontent.com/74038190/243199547-42077049-1939-493e-9a19-47ca5db36643.gif)

Exemplo básico de rotas API


Este projeto é um exemplo básico de uma aplicação Node.js usando o framework Express para criar uma API de gerenciamento de alunos em uma academia.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `academia/` (diretório principal)
  - `src/` (código-fonte da aplicação)
    - `controladores/` (controladores da aplicação)
      - `controladores.js` (implementação das funções de controle)
    - `dados.js` (dados fictícios da academia)
    - `index.js` (arquivo principal da aplicação)
    - `rotas.js` (definição das rotas da API)
  - `.gitignore` (arquivo para ignorar arquivos/diretórios no Git)
  - `README.md` (este arquivo)
  - `package.json` (informações sobre o projeto e dependências)
  
## Como Executar

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Abra o terminal na pasta do projeto.
3. Execute `npm install` para instalar as dependências.
4. Execute `npm start` para iniciar a aplicação.
5. Acesse `http://localhost:3000` para interagir com a API.

## Rotas da API

- **GET /alunos:** Retorna a lista de todos os alunos.
- **POST /adicionar:** Adiciona um novo aluno.
- **PUT /editar/:id:** Atualiza os dados de um aluno pelo ID.
- **PATCH /mensalidade:** Altera o status da mensalidade de um aluno.
- **DELETE /deletar:** Deleta um aluno pelo ID.

## Exemplo de Uso

Aqui está um exemplo de como usar a API:

### Listar Alunos

GET http://localhost:3000/alunos


### Adicionar Aluno

POST http://localhost:3000/adicionar

    {
        "nome": "Novo Aluno",
        "email": "novoaluno@gmail.com",
        "status": true
    }


### Atualizar Aluno

PUT http://localhost:3000/editar/1

    {
        "nome": "Novo Nome",
        "email": "novonome@gmail.com",
        "status": false
    }


### Alterar Status da Mensalidade

PATCH http://localhost:3000/mensalidade

    {
        "id": 1
    }


### Deletar Aluno

DELETE http://localhost:3000/deletar

    {
        "id": 1
    }

