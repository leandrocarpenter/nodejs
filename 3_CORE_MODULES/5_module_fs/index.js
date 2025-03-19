const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('mensagem.html', function (err, data) {
    if (err) {
      // Se ocorrer um erro, envie uma resposta de erro
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erro interno do servidor');
      console.error(err); // Registra o erro no console para depuração
      return; // Encerra a execução da função
    }

    // Se a leitura do arquivo for bem-sucedida, envie o conteúdo
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});