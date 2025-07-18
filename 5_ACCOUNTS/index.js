// Modulos Externos
const inquirer = require('inquirer').default;
const chalk = require('chalk').default;

// Modulos Internos
const fs = require('fs');

operation()

function operation() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Qual operação você deseja realizar?',
        choices: [
         'Criar conta',
         'Consultar saldo',
         'Depositar',
         'Sacar',
         'Transferir',
         'Sair',
        ],
      },
    ])
    .then((answer) => {
      const action = answer['action']       
      //console.log(action)
      
      if (action === 'Criar conta') {
        createAccount()
      }
    })
    .catch((err) => console.log(err))
}

// Create account
function createAccount() {
  console.log(chalk.bgGreen.black('Parabéns por criar uma conta!'))
  console.log(chalk.green('Defina um nome para sua conta: '))
}