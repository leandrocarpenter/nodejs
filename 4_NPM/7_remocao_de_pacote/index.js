const _ = require('lodash')
const chalk = require('chalk')

const a = [1, 2, 3]
const b = [4, 1, 5, 6]

const diff = _.difference(a, b)
console.log(diff)

console.log(chalk.blue('Hello world!'))
console.log(chalk.red.bold(diff))