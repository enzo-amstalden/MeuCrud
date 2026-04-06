# 📱 CRUD de Pessoas - React Native

Este projeto é um aplicativo mobile desenvolvido em **React Native** que realiza operações de **CRUD (Create, Read, Update e Delete)** de pessoas utilizando uma **API REST simulada com JSON Server**.

O aplicativo permite cadastrar, visualizar, editar e remover pessoas contendo **nome, sobrenome, email e telefone**.

---

# 🚀 Funcionalidades

- Listar pessoas cadastradas
- Adicionar nova pessoa
- Editar dados de uma pessoa
- Deletar pessoa
- Integração com API REST

---

# 🛠 Tecnologias Utilizadas

- React Native
- JavaScript
- Fetch API
- JSON Server
- LocalTunnel

---

# 📂 Estrutura do Projeto
project
│
├── screens
│ ├── HomeScreen.js
│ └── AddEditScreen.js
│
├── servers
│ └── peopleCrud.js
│
├── styles
│ └── styles.js
│
├── configApi.js
│
└── db.json


### Descrição dos arquivos

- **HomeScreen.js** → Tela principal que lista as pessoas cadastradas.
- **AddEditScreen.js** → Tela para adicionar ou editar uma pessoa.
- **peopleCrud.js** → Arquivo responsável pelas funções de comunicação com a API (GET, POST, PUT, DELETE).
- **styles.js** → Arquivo de estilização do aplicativo.
- **configApi.js** → Arquivo que contém a URL da API.
- **db.json** → Banco de dados utilizado pelo JSON Server.

---

# 🌐 API

A API utilizada no projeto é simulada usando **JSON Server**.


Endpoints disponíveis:

| Método | Endpoint | Descrição |
|------|------|------|
| GET | /people | Lista todas as pessoas |
| POST | /people | Cria uma nova pessoa |
| PUT | /people/:id | Atualiza uma pessoa |
| DELETE | /people/:id | Remove uma pessoa |

---

# 📦 Exemplo de Objeto Pessoa

```json
{
  "firstname": "João",
  "lastname": "Silva",
  "email": "joao@email.com",
  "phone": "(11) 91234-5678"
}

# ⚙ Como Rodar o Projeto

### 1 - Instalar dependências

```bash
npm install
```

---

### 2 - Iniciar o JSON Server

```bash
npx json-server --watch db.json --port 3000
```

---

### 3 - Criar túnel para acessar a API

```bash
npx localtunnel --port 3000
```

Será gerada uma URL pública parecida com:

```
https://famous-sites-share.loca.lt
```

Coloque essa URL no arquivo **configApi.js**:

```javascript
export const API_URL = "https://famous-sites-share.loca.lt";
```

---

### 4 - Rodar o aplicativo

```bash
npx expo start
```

ou

```bash
npm start
```

---

# 📱 Telas do Aplicativo

### Home

- Lista todas as pessoas cadastradas
- Botão para adicionar nova pessoa
- Opção para editar ou deletar

### Adicionar / Editar

- Formulário com:
  - Nome
  - Sobrenome
  - Email
  - Telefone
- Botão salvar
- Botão cancelar

---

# 👨‍💻 Autor

Desenvolvido por **Enzo Amstalden**
