const fs = require('fs')

if(!fs.existsSync('./pasta_leandro')) {
  console.log('Diretório não existe, criando...')
  fs.mkdirSync('./pasta_leandro')
} else if (!fs.existsSync('./pasta_leandro')) {
  console.log('Pasta Existe.')
}