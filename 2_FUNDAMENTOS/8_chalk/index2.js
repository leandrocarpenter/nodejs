const chalk = require('chalk')

const nota = 9

console.log(chalk.blue('Parabéns! Você está aprovado'))

if (nota < 7) {
  console.log(chalk.red('Você está reprovado'))
} else if (nota < 9) {
  console.log(chalk.yellow('Você está de recuperação'))
}