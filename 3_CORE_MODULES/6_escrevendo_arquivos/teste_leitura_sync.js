const fs = require('fs');

console.log('Diretório de trabalho:', process.cwd()); // Adicionado

try {
  const data = fs.readFileSync('novo.txt', 'utf8');
  console.log('Conteúdo do arquivo:', data);
} catch (err) {
  console.error('Erro ao ler o arquivo:', err);
}