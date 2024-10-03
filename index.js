const express = require('express');
const app = express();
const path = require('path');

// Definir a pasta de arquivos estáticos (CSS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página 1
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'pagina1.html'));
});

// Rota para a página 2
app.get('/pagina2', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'pagina2.html'));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
