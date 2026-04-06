📱 CRUD de Pessoas - React Native

Este projeto é um aplicativo mobile desenvolvido em React Native que realiza operações de CRUD (Create, Read, Update e Delete) de pessoas utilizando uma API REST simulada com JSON Server.

O aplicativo permite cadastrar, visualizar, editar e remover pessoas contendo nome, sobrenome, email e telefone.

🚀 Funcionalidades

✔ Listar pessoas cadastradas
✔ Adicionar nova pessoa
✔ Editar dados de uma pessoa
✔ Deletar pessoa
✔ Integração com API REST
✔ Interface simples com React Native

🛠 Tecnologias Utilizadas
React Native
JavaScript
Fetch API
JSON Server
LocalTunnel (para expor API local)
📂 Estrutura do Projeto
project
│
├── screens
│   ├── HomeScreen.js
│   └── AddEditScreen.js
│
├── servers
│   └── peopleCrud.js
│
├── styles
│   └── styles.js
│
├── configApi.js
│
└── db.json
📌 Descrição
Arquivo	Função
HomeScreen.js	Tela principal que lista as pessoas
AddEditScreen.js	Tela para adicionar ou editar pessoas
peopleCrud.js	Funções de comunicação com a API
styles.js	Estilização do aplicativo
configApi.js	Configuração da URL da API
db.json	Banco de dados usado pelo JSON Server
🌐 API

A API utilizada no projeto é simulada usando JSON Server.

Base URL:

https://famous-sites-share.loca.lt

Endpoints:

Método	Endpoint	Descrição
GET	/people	Lista todas as pessoas
POST	/people	Cria uma nova pessoa
PUT	/people/:id	Atualiza uma pessoa
DELETE	/people/:id	Remove uma pessoa
📦 Exemplo de Objeto Pessoa
{
  "firstname": "João",
  "lastname": "Silva",
  "email": "joao@email.com",
  "phone": "(11) 91234-5678"
}
⚙ Como Rodar o Projeto
1️⃣ Instalar dependências
npm install
2️⃣ Iniciar o JSON Server
npx json-server --watch db.json --port 3000
3️⃣ Criar túnel para acessar a API
npx localtunnel --port 3000

Isso gerará uma URL pública parecida com:

https://famous-sites-share.loca.lt

Coloque essa URL no arquivo:

configApi.js
export const API_URL = "https://famous-sites-share.loca.lt";
4️⃣ Rodar o aplicativo
npx expo start

ou

npm start
📱 Telas do Aplicativo
Home
Lista todas as pessoas
Botão para adicionar pessoa
Opção de editar ou deletar
Adicionar / Editar
Formulário com:
Nome
Sobrenome
Email
Telefone
Botão salvar
Botão cancelar
📌 Observações
O projeto utiliza Fetch API para comunicação com a API.
O FlatList é utilizado para renderizar a lista de pessoas.
O React Navigation é usado para navegação entre telas.
👨‍💻 Autor

Desenvolvido por Enzo Amstalden
