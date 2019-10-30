// function that caiculates the fibonacci
const chalk = require('chalk');
function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }

     return fibonacci(num - 1) + fibonacci(num - 2) ;
}

console.log(chalk.green(fibonacci(10)));

module.exports = { fibonacci };
