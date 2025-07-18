const path = require('path')

const customPath = "/relatorios/2025/relatorio.pdf"

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))
console.log(path.parse(customPath))
console.log(path.join('relatorios', '2025', 'relatorio.pdf'))
console.log(path.extname(customPath))