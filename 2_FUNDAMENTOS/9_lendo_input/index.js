const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem de programação favorita? ', (language) => {
    if (language === 'Python') {
        console.log('Python é uma ótima linguagem!')
    } else { 
    console.log(`Sua linguagem favorita é ${language}`)
    }
    readline.close()
})