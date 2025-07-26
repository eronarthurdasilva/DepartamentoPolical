const express = require('express');
const app = express();
const PORT = 3000;

const casosRouter = require('./routes/casosRoutes');

const agentesRouter = require('./routes/agentesRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo ao Departamento de Polícia!');
});

app.use(agentesRouter);

app.listen(PORT, () => {
  console.log(`Servidor do Departamento de Polícia rodando em http://localhost:${PORT}`);
});

app.use(casosRouter);
