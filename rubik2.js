let cubo = {
    top: ["negro","negro","negro","negro","negro","negro","negro","negro","negro"],
    lateralIzq: ["azul","azul","azul","azul","azul","azul","azul","azul","azul"],
    frontal: ["naranja","naranja","naranja","naranja","naranja","naranja","naranja","naranja","naranja"],
    lateralDer: ["blanco","blanco","blanco","blanco","blanco","blanco","blanco","blanco","blanco"],
    detras: ["verde","verde","verde","verde","verde","verde","verde","verde","verde"],
    bottom: ["rojo","rojo","rojo","rojo","rojo","rojo","rojo","rojo","rojo"],
    bot: [1,2,3,4,5,6,7,8,9],
}


function abajoDer(){
    let newLateralIzq = cubo.lateralIzq.slice(0,6).concat(cubo.detras.slice(6,9))
    let newFrontal = cubo.frontal.slice(0,6).concat(cubo.lateralIzq.slice(6,9))
    let newLateralDer = cubo.lateralDer.slice(0,6).concat(cubo.frontal.slice(6,9))
    let newDetras = cubo.detras.slice(0,6).concat(cubo.lateralDer.slice(6,9))
    let elementosMovidos = [
        cubo.bottom[0],cubo.bottom[1],cubo.bottom[2],cubo.bottom[3],cubo.bottom[4],cubo.bottom[5],cubo.bottom[6],cubo.bottom[7],cubo.bottom[8]
    ]

    cubo.lateralIzq = newLateralIzq
    cubo.frontal = newFrontal
    cubo.lateralDer = newLateralDer
    cubo.detras = newDetras
    cubo.bottom = [
        cubo.bottom[0],cubo.bottom[1],cubo.bottom[2],cubo.bottom[3],cubo.bottom[4],cubo.bottom[5],cubo.bottom[6],cubo.bottom[7],cubo.bottom[8]] = [elementosMovidos[6], elementosMovidos[3],elementosMovidos[0],elementosMovidos[7],elementosMovidos[4],elementosMovidos[1],elementosMovidos[8],elementosMovidos[5],elementosMovidos[2]
    ]
}
function abajoIzq(){
    let newLateralIzq = cubo.lateralIzq.slice(0,6).concat(cubo.frontal.slice(6,9))
    let newFrontal = cubo.frontal.slice(0,6).concat(cubo.lateralDer.slice(6,9))
    let newLateralDer = cubo.lateralDer.slice(0,6).concat(cubo.detras.slice(6,9))
    let newDetras = cubo.detras.slice(0,6).concat(cubo.lateralIzq.slice(6,9))
    let elementosMovidos = [
        cubo.bottom[0],cubo.bottom[1],cubo.bottom[2],cubo.bottom[3],cubo.bottom[4],cubo.bottom[5],cubo.bottom[6],cubo.bottom[7],cubo.bottom[8]
    ]

    cubo.lateralIzq = newLateralIzq
    cubo.frontal = newFrontal
    cubo.lateralDer = newLateralDer
    cubo.detras = newDetras
    cubo.bottom = [
        cubo.bottom[0],cubo.bottom[1],cubo.bottom[2],cubo.bottom[3],cubo.bottom[4],cubo.bottom[5],cubo.bottom[6],cubo.bottom[7],cubo.bottom[8]] = [elementosMovidos[2], elementosMovidos[5],elementosMovidos[8],elementosMovidos[1],elementosMovidos[4],elementosMovidos[7],elementosMovidos[0],elementosMovidos[3],elementosMovidos[6]
    ]
}

function arribaIzq(){
    let newLateralIzq = cubo.frontal.slice(0,3).concat(cubo.lateralIzq.slice(3,9))
    let newFrontal = cubo.lateralDer.slice(0,3).concat(cubo.frontal.slice(3,9))
    let newLateralDer = cubo.detras.slice(0,3).concat(cubo.lateralDer.slice(3,9))
    let newDetras = cubo.lateralIzq.slice(0,3).concat(cubo.detras.slice(3,9))
    let elementosMovidos = [
        cubo.top[0],cubo.top[1],cubo.top[2],cubo.top[3],cubo.top[4],cubo.top[5],cubo.top[6],cubo.top[7],cubo.top[8]
    ]

    cubo.lateralIzq = newLateralIzq
    cubo.frontal = newFrontal
    cubo.lateralDer = newLateralDer
    cubo.detras = newDetras

    cubo.top = [
        cubo.top[0],cubo.top[1],cubo.top[2],cubo.top[3],cubo.top[4],cubo.top[5],cubo.top[6],cubo.top[7],cubo.top[8]] = [elementosMovidos[6], elementosMovidos[3],elementosMovidos[0],elementosMovidos[7],elementosMovidos[4],elementosMovidos[1],elementosMovidos[8],elementosMovidos[5],elementosMovidos[2]
    ]

}

function arribaDer(){
    let newLateralIzq = cubo.detras.slice(0,3).concat(cubo.lateralIzq.slice(3,9))
    let newFrontal = cubo.lateralIzq.slice(0,3).concat(cubo.frontal.slice(3,9))
    let newLateralDer = cubo.frontal.slice(0,3).concat(cubo.lateralDer.slice(3,9))
    let newDetras = cubo.lateralDer.slice(0,3).concat(cubo.detras.slice(3,9))
    let elementosMovidos = [
        cubo.top[0],cubo.top[1],cubo.top[2],cubo.top[3],cubo.top[4],cubo.top[5],cubo.top[6],cubo.top[7],cubo.top[8]
    ]

    cubo.lateralIzq = newLateralIzq
    cubo.frontal = newFrontal
    cubo.lateralDer = newLateralDer
    cubo.detras = newDetras
    cubo.top= [
        cubo.top[0],cubo.top[1],cubo.top[2],cubo.top[3],cubo.top[4],cubo.top[5],cubo.top[6],cubo.top[7],cubo.top[8]] = [elementosMovidos[2], elementosMovidos[5],elementosMovidos[8],elementosMovidos[1],elementosMovidos[4],elementosMovidos[7],elementosMovidos[0],elementosMovidos[3],elementosMovidos[6]
    ]
}

function lateralDerecho(){
    let elementosNaranja = [cubo.frontal[2],cubo.frontal[5],cubo.frontal[8]]
    let elementosRojo = [cubo.bottom[2],cubo.bottom[5],cubo.bottom[8]]
    let elementosVerde = [cubo.detras[2],cubo.detras[5],cubo.detras[8]]
    let elementosNegro = [cubo.top[2],cubo.top[5],cubo.top[8]]

    cubo.frontal =[
        ...cubo.frontal, cubo.frontal[2] = elementosNegro[0], cubo.frontal[5] = elementosNegro[1], cubo.frontal[8] = elementosNegro[2]
    ]
    cubo.bottom =[
        ...cubo.bottom, cubo.bottom[2] = elementosNaranja[0], cubo.bottom[5] = elementosNaranja[1], cubo.bottom[8] = elementosNaranja[2]
    ]
    cubo.detras =[
        ...cubo.detras, cubo.detras[2] = elementosRojo[0], cubo.detras[5] = elementosRojo[1], cubo.detras[8] = elementosRojo[2]
    ]
    cubo.top =[
        ...cubo.top, cubo.top[2] = elementosVerde[0], cubo.top[5] = elementosVerde[1], cubo.top[8] = elementosVerde[2]
    ]
}

lateralDerecho()



  

