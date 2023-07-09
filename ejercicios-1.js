//Suma sin centro
//
//Dado un array de números sumar todos los elementos a excepción del valor del centro.


let array1 = [10,5,20]

function sumaSinCentro(array){
    let rango = array.length
    if(rango%2 != 0){
        let part1 = array.slice(0,rango/2)
        let part2 = array.slice(rango/2+1,rango)
        let arraySinCentro = part1.concat(part2)
        let suma = arraySinCentro.reduce((acc,num) => {return acc+num})
        return suma
    }else{
        let part1 = array.slice(0,rango/2-1)
        let part2 = array.slice(rango/2+1,rango)
        let arraySinCentro = part1.concat(part2)
        let suma = arraySinCentro.reduce((acc,num) => {return acc+num})
        return suma
    }
}



//#Suma continuos
//
//Dado un array sumar los 2 valores más altos continuos

let array2 = [4,5,10,10,20,25,2,45]

function sumaContinuos(array){
    let arrayOrdenado = array.sort((a,b) => b - a)
    let primerElemento = arrayOrdenado.shift()
    let segundoElemento = arrayOrdenado.shift()
    let resultado = primerElemento + segundoElemento
    return resultado
}


//Desafío laboral
//
//La serie de fibonacci es una de las más utilizadas en entrevistas para medir la capacidad lógica del entrevistado, aquí te dejo el planteo para que intentes resolverlo y puedas compartirlo con la clase en nuestro próximo encuentro.
//
//Escribe un script que comience con una variable llamada hasta y cree un array con los primeros números de la secuencia de Fibonacci. La secuencia de Fibonacci siempre comienza con los números 0 y 1, y cada número subsiguiente se calcula sumando los dos números anteriores.


function fibonacci(number){
    let fibonacci = []
    for (let i = 0; i < number; i++) {
        if(i<=1){
            fibonacci.push(i)
        }else{
            let slice = fibonacci.slice(i-2,i)
            let suma = slice.reduce((a,b) => {return a + b})
            fibonacci.push(suma)
        }
    }
    return fibonacci
}

console.log(fibonacci(6));

