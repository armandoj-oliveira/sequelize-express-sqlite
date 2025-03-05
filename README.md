# 🚀 express-sqlite

![Express.js](https://img.shields.io/badge/Express.js-Framework-green?style=for-the-badge&logo=express)
![SQLite](https://img.shields.io/badge/SQLite-Database-blue?style=for-the-badge&logo=sqlite)  
![Node.js](https://img.shields.io/badge/Node.js-Environment-darkgreen?style=for-the-badge&logo=node.js)
![Sequelize](https://img.shields.io/badge/Sequelize-ORM-blue?style=for-the-badge&logo=sequelize)  
Criação de uma **API REST** utilizando **Node.js**, **Express** e **SQLite** com **Sequelize** para gerenciamento de banco de dados.

---

## 📌 **Índice**
- [📌 Tecnologias](#-tecnologias)
- [⚡ Instalação](#-instala%C3%A7%C3%A3o)
- [🚀 Como Usar](#-como-usar)

---

## 🚀 **Tecnologias**
Este projeto utiliza as seguintes tecnologias:

- 🔹 [Node.js](https://nodejs.org/)
- 🔹 [Express.js](https://expressjs.com/)
- 🔹 [SQLite](https://www.sqlite.org/)
- 🔹 [Sequelize](https://sequelize.org/)
- 🔹 [Nodemon](https://www.npmjs.com/package/nodemon) (Para hot reload durante o desenvolvimento)

---

## ⚡ **Instalação**
1️⃣ **Clone este repositório:**
```sh
git clone https://github.com/armandoj-oliveira/express-sqlite.git
```

2️⃣ **Instale as dependências:**
```sh
npm install
```

3️⃣ **Crie e aplique as migrations:**
```sh
npx sequelize-cli db:migrate
```

4️⃣ **Execute os seeders (opcional):**
```sh
npx sequelize-cli db:seed:all
```

5️⃣ **Inicie o servidor:**
```sh
npm start
```

---

## 🚀 **Como Usar**
Após iniciar o servidor, a API estará rodando em `http://localhost:8000` ou na porta que desejar.

### 📌 **Rotas Disponíveis:**
- `GET /pessoas` → Retorna todas as pessoas cadastradas.
- `GET /pessoas/:id` → Retorna uma pessoa específica.
- `POST /pessoas` → Cadastra uma nova pessoa.
- `PUT /pessoas/:id` → Atualiza uma pessoas existente.
- `DELETE /pessoas/:id` → Remove uma pessoas.

- `GET /pessoas/:estudanteId/mariculas` → Retorna uma matrícula específica.
- `POST /pessoas/:estudanteId/mariculas` → Cadastra uma nova matrícula.

- `GET /categoria` → Retorna todas as categorias cadastradas.
- `GET /categoria/:id` → Retorna uma categoria específica.
- `POST /categoria` → Cadastra uma nova categoria.
- `PUT /categoria/:id` → Atualiza uma categoria existente.
- `DELETE /categoria/:id` → Remove uma categoria.

- `GET /cursos` → Retorna todas os cursos cadastrados.
- `GET /cursos/:id` → Retorna um curso específico.
- `POST /cursos` → Cadastra um novo curso.
- `PUT /cursos/:id` → Atualiza um curso existente.
- `DELETE /cursos/:id` → Remove um curso.

---