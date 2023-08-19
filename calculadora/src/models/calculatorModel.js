const readline = require('readline');
const {controllerOperator} = require('../controllers/calculatorController')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculator() {
    const options = [
      '1- Sumar',
      '2- Restar',
      '3- Multiplicar',
      '4- Dividir',
      '5- Salir'
    ];
  
    console.log('¿Que operación desea realizar?');
    options.forEach(option => console.log(option));
  
    rl.question('Elige una opción: ', function(input) {
      switch (input) {
        case '1':
          controllerOperator("sum");
          break;
        case '2':
          controllerOperator("res");
          break;
        case '3':
          controllerOperator("mul");
          break;
        case '4':
          controllerOperator("div");
          break;
        case '5':
          console.log("saliendo...");
          rl.close();
          return;
        default:
          console.log('Opción no válida.');
          calculator();
      }
      
    });
}


module.exports = {calculator}; 