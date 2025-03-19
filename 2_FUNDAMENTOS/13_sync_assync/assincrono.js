const fs = require('fs');

console.log("Início")

fs.writeFile('arquivo_assincrono.txt', 'Olá, mundo Assincrono!', function(err)  {
    setTimeout(function() {
        console.log("Arquivo criado com sucesso!");
    }, 2000);
});

console.log("Fim")