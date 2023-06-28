
let sumar = /( *suma *| *sumame *| *sumar *| *sumale *| *sumalo *| *sumalos *| *sumes *)/i
let restar = /( *restar *| *resta *| *restame *| *restale *| *restalo *| *restalos *| *restes *)/i
let dividir = /( *dividir *| *dividi *| *dividime *| *dividile *| *dividilo *| *dividilos *| *dividas *)/i
let multiplicar = /( *mulplicar *| *multiplica *| *mutiplicame *| *multiplicale *| *multiplicalo *| *multiplicalos *| *multipliques *)/i
let numbers = /([\d*]){1,9}/g
let operador = /( *suma *| *sumame *| *sumar *| *sumale *| *sumalo *| *sumalos *| *sumes *| *restar *| *resta *| *restame *| *restale *| *restalo *| *restalos *| *restes *| *dividir *| *dividi *| *dividime *| *dividile *| *dividilo *| *dividilos *| *dividas *| *mulplicar *| *multiplica *| *mutiplicame *| *multiplicale *| *multiplicalo *| *multiplicalos *| *multipliques *)/ig


let frase = "suma estos numeros y restalo"
let numeros = frase.match(operador)
console.log(numeros);


let sum = /(sum)/i
let res = /(res)/i
let div = /(div)/i
let mul = /(mul)/i

let estrue = sum.test(numeros)
console.log(estrue);


const prompt = require('prompt-sync')()

function operation(){
    let request = prompt("¿que operación desea realizar?      ")
    let suma = sumar.test(request)
    let resta = restar.test(request)
    let division = dividir.test(request)
    let multiplicacion = multiplicar.test(request)
    let numeros = request.match(numbers)
    let number1 = parseFloat(numeros[0])
    let number2 = parseFloat(numeros[1])
    let number3 = parseFloat(numeros[2])
    let arrayOperation = request.match(operador)
    let operador_sum_uno = sum.test(arrayOperation[0])
    let operador_res_uno = res.test(arrayOperation[0])
    let operador_div_uno = div.test(arrayOperation[0])
    let operador_mul_uno = mul.test(arrayOperation[0])
    let operador_sum_dos = sum.test(arrayOperation[1])
    let operador_res_dos = res.test(arrayOperation[1])
    let operador_div_dos = div.test(arrayOperation[1])
    let operador_mul_dos = mul.test(arrayOperation[1])

    if(numeros.length <= 2){
        if(suma == true){
            return console.log(`La suma entre el número ${number1} y el número ${number2} es: ${number1 + number2}`);
        }else if(resta ==  true){
            return console.log(`La resta entre el número ${number1} y el número ${number2} es: ${number1 - number2}`);
        }else if(division == true){
            return console.log(`La división entre el número ${number1} y el número ${number2} es: ${number1 / number2}`);
        }else if(multiplicacion == true){
            return console.log(`La multiplicación entre el número ${number1} y el número ${number2} es: ${number1 * number2}`);
        }else{
            return console.log("No comprendo su solicitud, ¿Podrías ser mas claro?");
        }
    }else if(numeros.length == 3){

        if(operador_sum_uno == true && operador_sum_dos == true){
            let operacion = (number1 + number2) + number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_sum_uno == true && operador_res_dos == true){
            let operacion = (number1 + number2) - number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_sum_uno == true && operador_div_dos == true){
            let operacion = (number1 + number2) / number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_sum_uno == true && operador_mul_dos == true){
            let operacion = (number1 + number2) * number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_res_uno == true && operador_sum_dos == true){
            let operacion = (number1 - number2) + number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_res_uno == true && operador_res_dos == true){
            let operacion = (number1 - number2) - number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_res_uno == true && operador_div_dos == true){
            let operacion = (number1 - number2) / number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_res_uno == true && operador_mul_dos == true){
            let operacion = (number1 - number2) * number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_div_uno == true && operador_sum_dos == true){
            let operacion = (number1 / number2) + number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_div_uno == true && operador_res_dos == true){
            let operacion = (number1 / number2) - number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_div_uno == true && operador_div_dos == true){
            let operacion = (number1 / number2) / number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_div_uno == true && operador_mul_dos == true){
            let operacion = (number1 / number2) * number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_mul_uno == true && operador_sum_dos == true){
            let operacion = (number1 * number2) + number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_mul_uno == true && operador_res_dos == true){
            let operacion = (number1 * number2) - number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_mul_uno == true && operador_div_dos == true){
            let operacion = (number1 * number2) / number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else if(operador_mul_uno == true && operador_mul_dos == true){
            let operacion = (number1 * number2) * number3
            return console.log(`El resultado de su solicitud es: ${operacion}`);
        }else{
            return console.log("No comprendo su solicitud, ¿podrías ser mas claro?");
        }
    }else{
        console.log("Puso mas de 3 números u operaciones, excede mis capacidades")
    }
}

operation()
