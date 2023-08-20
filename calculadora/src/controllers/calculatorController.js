const prompt = require('prompt-sync')()
const {operator} = require('../services/calculatorServices')
const fs = require('fs');
const data = fs.readFileSync('./calculatorRegister.txt', 'utf-8')
const registers = JSON.parse(data)

console.log(registers);

function validarNumero(valor) {
    // La expresión regular valida que el valor sea un número opcionalmente negativo
    // y pueda incluir comas como separadores decimales
    const regex = /^-?\d+(\.\d+)?$/;
    return regex.test(valor);
}

const controllerOperator = (type) =>{
    let number1 = parseFloat(prompt("Ingrese el primer número: "));
    if(!validarNumero(number1)){
        console.log("Ingresar solo números, intente nuevamente: ");
        controllerOperator(type)
    }
    let number2 = parseFloat(prompt("Ingrese el segundo número: "));
    if(!validarNumero(number2)){
        console.log("Ingresar solo números, intente nuevamente: ");
        controllerOperator(type)
    }
    if(type == "sum"){
        operator(number1, number2, type)
        registers.push([number1 + " + " + number2 + " = " + (number1+number2)])
    }
    if(type == "res"){
        operator(number1, number2, type)
        registers.push([number1 + " - " + number2 + " = " + (number1-number2)])
    }
    if(type == "mul"){
        operator(number1, number2, type)
        registers.push([number1 + " * " + number2 + " = " + (number1*number2)])
    }if(type == "div"){
        operator(number1, number2, type)
        registers.push([number1 + " / " + number2 + " = " + (number1/number2)])
    }
    fs.writeFileSync('./calculatorRegister.txt', JSON.stringify(registers))
    console.log('Muchas gracias por utilizar nuestros servicios');
    process.exit(1);
}

module.exports = {controllerOperator}; 