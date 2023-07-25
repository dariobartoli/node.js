if(!process.argv[2] || !process.argv[3] || !process.argv[4] ){
    console.log("NECESITO QUE ME ENVIES 3 NÚMEROS")
    process.exit(1)
}
let regexEntero = /^-?\d+$/g;

if(!regexEntero.test(process.argv[2])){
    console.log("NECESITO QUE ME ENVIES SOLO NÚMEROS");
    process.exit(1)
}

let numeros = []
numeros.push(process.argv[2])
numeros.push(process.argv[3])
numeros.push(process.argv[4])

numeros.forEach((numero) =>{
    if(numero <= 0){
        console.log("NECESITO QUE ENVIES SOLO NÚMEROS POSITIVOS");
        process.exit(1)
    }
    if(numero > 10){
        console.log("NECESITO QUE ENVIES NÚMEROS MENORES QUE 10");
        process.exit(1)
    }
})

const promise = (array) => new Promise((resolve, reject) => {
    let numeroRandom = Math.floor(Math.random()* 10) + 1;
    console.log("El número generado es: " + numeroRandom);
    if(numeroRandom == array[0]){
        resolve("Ganaste, el número era: " + numeroRandom + " y se encontraba en la primer posición");
    }else if(numeroRandom == array[1]){
        resolve("Ganaste el número era: " + numeroRandom + " y se encontraba en la segunda posición");
    }else if(numeroRandom == array[2]){
        resolve("Ganaste el número era: " + numeroRandom + " y se encontraba en la tercer posición");
    }else{
        let diferenciaPrimero = Math.abs(array[0] - numeroRandom)
        let diferenciaSegundo = Math.abs(array[1] - numeroRandom)
        let diferenciaTercero = Math.abs(array[2] - numeroRandom)
        let minimo = Math.min(diferenciaPrimero,diferenciaSegundo,diferenciaTercero)
        let valoresMinimos = []
        if(diferenciaPrimero === minimo){
            valoresMinimos.push(array[0])
        }
        if(diferenciaSegundo === minimo){
            valoresMinimos.push(array[1])
        }
        if(diferenciaTercero === minimo){
            valoresMinimos.push(array[2])
        }
        if(valoresMinimos.length == 1){
            resolve(`Perdiste, no pudiste hacertar el número y el valor mas cercano fue: ${valoresMinimos}`);
        }else{
            resolve(`Perdiste, no pudiste hacertar el número y los valores mas cercanos fueron: ${valoresMinimos}`);
        }
    }
    reject("error 101")
})

const acertarNumero = async(arrayNum) => {
    try {
        let resultado = await promise(arrayNum)
        console.log(resultado);
    } catch (error) {
        console.error(`ha ocurrido un error: ${error}`);
    }
}

acertarNumero(numeros)
