if(!process.argv[2]){
    console.log("No enviaste ningún texto")
    process.exit(1)
}

const numero = parseInt(process.argv[2])

if(numero <= 0){
    console.log(`El programa solo funciona con números enteros positivos`)
    process.exit(1)
}

let intentos = 0;

if(numero === 1 || numero === 2){
    intentos++    
    console.log(`El número buscado es 1 y lo logré en ${intentos} intento`)
    process.exit(1)
}

let maximo = 2

do{
    maximo *= 2
}while(numero > maximo)

let minimo = maximo / 2

let adivino
do {
    intentos++
    let adivino = Math.ceil(minimo + maximo) / 2
    console.log(`minimo: ${minimo} - maximo: ${maximo} adivino: ${adivino}`)
    if(numero == adivino){
        console.log(`El número buscado es ${adivino} y lo logré en ${intentos} intentos`)
        process.exit(1)
        break;
    }

    if(numero > adivino){
        minimo = adivino
    }else{
        maximo = adivino
    }

}while(numero !== adivino)
