
const { faker } = require('@faker-js/faker');

if(!process.argv[2]){
    console.log("No enviaste ningún número")
    process.exit(1)
}

let numbers = /([\d*]){1,9}/g
let regexEntero = /^-?\d+$/g;

if(!regexEntero.test(process.argv[2])){
    console.log("El programa solo funciona con números enteros positivos");
    process.exit(1)
}

if(process.argv[2] <= 0){
    console.log(`El programa solo funciona con números enteros positivos`)
    process.exit(1)
}

const number = process.argv[2]


const createPerson = (number) => new Promise((resolve, reject) => {
    let personas = []
    for (let i = 1; i <= number; i++) {
        let numeroRandom = Math.floor(Math.random()* 100) + 1;
        personas.push({
            id: i,
            nombre: faker.person.firstName(),
            apellido: faker.person.lastName(),
            edad: numeroRandom
        })
    }
    resolve(personas)
})

const personaRandom = async(num) =>{
    try {
        let resultado = await createPerson(num)
        console.log("TODAS LAS PERSONAS GENERADAS: ");
        console.log(resultado);
        let mayoresDeEdad = resultado.filter(person => person.edad >= 18).sort((a,b) => a.edad - b.edad)
        console.log("TODAS LAS PERSONAS MAYORES DE 18 AÑOS ORDENADAS: ");
        console.log(mayoresDeEdad);
    } catch (error) {
        console.error(error);
    }
}

personaRandom(number)
