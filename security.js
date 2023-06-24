console.log("hola mundo");

let muy_segura = /(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#·$%&/()=?¿¡])\S[a-zA-Z\d!@#·$%&/()=?¿¡]{8,16}/
let segura = /(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])\S[a-zA-Z\d]{8,16}/
let insegura = /(?=.*[a-z])(?=.*[\d])\S[a-z\d]{8,16}/

const prompt = require('prompt-sync')()
 
//let name = prompt("ingrese su nombre:")

//console.log(name);

console.log(insegura.test("432dsadssS"));

function password(){
    let pass = prompt("ingrese su contraseña: ")
    let fuerte = muy_segura.test(pass)
    let medio = segura.test(pass)
    let debil = insegura.test(pass)
    if (pass.length < 8) {
        console.log("su contraseña debe ser mayor a 8 caracteres y menor a 16 caracteres");
    }else if(pass.length > 16){
        console.log("su contraseña debe ser mayor a 8 caracteres y menor a 16 caracteres")
    }else{
        if (fuerte == true) {
            console.log("su contraseña es muy segura");
        }
        if (medio == true) {
            console.log("su contraseña no es tan segura");
        }
        if (debil == true) {
            console.log("su contraseña no es muy segura");
        }else{
            console.log("su contraseña debe tener al menos un numero y una minuscula");
        }
    }
}


password()
