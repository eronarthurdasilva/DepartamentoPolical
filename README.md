# Sistema de Gerenciamento  Policial 

API RESTful para gerenciamento de agentes e casos policiais, desenvolvido com:

- Node.js + Express
- Arquitetura MVC
- Armazenamento em memória (utilizando arrays)
- Front-end (Basico) com html, Tailwind CSS e JavaScript

## Funcionalidades Principais 

### Para Agentes:

- CRUD completo de agentes, create/update/delete/read (leitura feita pelo id do agente)
- Filtros por cargos
- Ordenação por data de Incorporação

### Para Casos

- CRUD completo de casos, create/update/delete/read (leitura feita pelo id do caso)
- Controle de Status (aberto/solucionado/arquivado)
- Filtros por agentes, status e busca textual

### Extras
- Documentação Swagger em ´/docs´
- Interface Web Responsiva
- Validações robustas

## Instalação 

Pré-requisitos:
- Node.js (v18+)
- npm (v9+)

### Passo a passo
# 1. Clone o repositório
git clone https://github.com/seu-usuario/departamento-policial.git

# 2. Acesse a pasta do projeto
cd departamento-policial

# 3. Instale as dependências
npm install

# 4. Inicie o servidor
npm start

# Para desenvolvimento (com reinício automático):
npm run dev

## Implementação 

Estrutura do Projeto 
📦 src
├── 📂 controllers
├── 📂 repositories
├── 📂 routes
├── 📂 public
├── 📂 docs
├── server.js
└── package.json

## Como cada parte foi implementada 
### 1. Configuração inicial 
  npm init -y
  npm install express
  npm install -D nodemon
  
### 2. Modelagem de dados 
```JavaScript
const agentes = [
  {
    id: "1",
    nome: "João Silva",
    dataDeIncorporacao: "2020-05-15",
    cargo: "inspetor"
  }
];
```

### 3. Rotas principais 
```JavaScript
// routes/agentesRoutes.js
router.get('/agentes', agentesController.getAllAgentes);
router.post('/agentes', agentesController.createAgente);
```

### 4. Validações
```JavaScript
// controllers/agentesController.js
if (!nome || !dataDeIncorporacao || !cargo) {
  return res.status(400).json({ message: "Todos os campos são obrigatórios" });
}
```

### 5. Front-End

- HTML semântico
- Tailwind CSS para estilização
- Fetch API para comunicação com o backend

### 6. Documentação 
npm install swagger-ui-express swagger-jsdoc

```JavaScript
// docs/swagger.js
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Policial',
      version: '1.0.0'
    }
  },
  apis: ['./routes/*.js']
};
```

### Como testar
# Modo produção
npm start

# Modo desenvolvimento
npm run dev

Acesse:

API: http://localhost:3000

Front-end: http://localhost:3000

Documentação: http://localhost:3000/docs

Obs: Pode trocar a saida se preferir 

### Rotas da API
- Pode ser usado o Insomnia ou algum aplicativo de sua preferencia 
Método	Endpoint	Descrição
GET	/agentes	Lista todos agentes
POST	/agentes	Cria novo agente
GET	/casos?status=aberto	Filtra casos

## Parte dois do projeto 



