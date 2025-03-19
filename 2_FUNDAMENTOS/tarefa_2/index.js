(async () => {
const chalk = (await import('chalk')).default;

inquirer.prompt([
    {   
        name: 'nome',
        message: 'Qual o seu nome?'
    },
    {
        name: 'idade',
        message: 'Qual a sua idade?'
    }
]).then((answers) => {  
    console.log(chalk.blue(`Olá ${answers.nome}, fico feliz em saber que você tem ${answers.idade} anos!`));
});
})();
