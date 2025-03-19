// mais de um valor

const x = 10
const y = 'carpenter'
const z = [1, 2]

console.log(x, y, z)

// contagem de impressoes, usado tb para loop

console.count(`O valor de x é ${x}, contagem`)
console.count(`O valor de x é ${x}, contagem`)

// variavel entre string(interpolação)

console.log("O nome %s, ele é programador", y)

// limpar o console
setTimeout(() => {  
    console.clear()
}, 2000);
