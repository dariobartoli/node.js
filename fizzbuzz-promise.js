if(!process.argv[2]){
    console.log("No enviaste ningún texto")
    process.exit(1)
}

let numbers = /([\d*]){1,9}/g
let regexEntero = /^-?\d+$/g;

if(!regexEntero.test(process.argv[2])){
    console.log("El programa solo funciona con números enteros positivos");
    process.exit(1)
}

const number = process.argv[2]

if(number <= 0){
    console.log(`El programa solo funciona con números enteros positivos`)
    process.exit(1)
}

const calculo = (numero) => new Promise((resolve, reject) => {
    if(numero%3 == 0 && numero%5== 0){
        resolve("fizzbuzz");
    }else if(numero%5== 0){
        resolve("buzz");
    }else if(numero%3 == 0){
        resolve("fizz");
    }
    else{
        resolve(numero);
    }
    reject("error")
})

async function fizzbuzz(num){
    try {
        for (let i = 1; i <= num; i++) {
            let resultado = await calculo(i)
            console.log(resultado);
        }
    } catch (error) {
        console.log(`Ha ocurrido un error ${error}`);
    }
    }

fizzbuzz(number)
