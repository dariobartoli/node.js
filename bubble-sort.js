if(!process.argv[2]){
    console.log("No enviaste ningún texto")
    process.exit(1)
}

const numero = parseInt(process.argv[2])

if(numero <= 0){
    console.log(`Solo números positivos`)
    process.exit(1)
}

function arrayRandom(length){
    let array = []
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100))
    }
    console.log(`Array Desordenado: ${array}`);
    return array
}

function arrayOrdenado(array){
    for (let i = 0; i < array.length; i++) {
        let numbermenor = 0
        let numbermayor = 0
        for (let j = 0; j < array.length; j++) {
            if(array[i]<array[j]){
                numbermayor = array[i]
                numbermenor = array[j]
                array[j] = numbermayor
                array[i] = numbermenor
            }
        }
    }
    console.log(`Array Ordenado: ${array}`);
}

arrayOrdenado(arrayRandom(numero))

