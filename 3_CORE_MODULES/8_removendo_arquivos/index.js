const fs = require('fs')

fs.unlink('arquivo.txt', fucntion (err) {

  if (err) {
    console.log(err)
    return
  }

  console.log('Arquivo removido com sucesso')

})