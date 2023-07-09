const app = Vue.createApp({
    data(){
        return{
            probando: "hola",
            cubo: []
        }
    },
    created(){
        this.cubo = {
            top: ["negro","negro","negro","negro","negro","negro","negro","negro","negro"],
            lateralIzq: ["azul","azul","azul","azul","azul","azul","azul","azul","azul"],
            frontal: ["naranja","naranja","naranja","naranja","naranja","naranja","naranja","naranja","naranja"],
            lateralDer: ["blanco","blanco","blanco","blanco","blanco","blanco","blanco","blanco","blanco"],
            detras: ["verde","verde","verde","verde","verde","verde","verde","verde","verde"],
            bottom: ["rojo","rojo","rojo","rojo","rojo","rojo","rojo","rojo","rojo"]
        }
    },
    methods:{
        girar(array, direccion){
            let elementosMovidos = [
                array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7],array[8]
            ]
            if(direccion == "der"){
                array = [
                    array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7],array[8]] = [elementosMovidos[6], elementosMovidos[3],elementosMovidos[0],elementosMovidos[7],elementosMovidos[4],elementosMovidos[1],elementosMovidos[8],elementosMovidos[5],elementosMovidos[2]
                ]
            }else{
                array = [
                    array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7],array[8]] = [elementosMovidos[2], elementosMovidos[5],elementosMovidos[8],elementosMovidos[1],elementosMovidos[4],elementosMovidos[7],elementosMovidos[0],elementosMovidos[3],elementosMovidos[6]
                ]
            }
        },
        abajoDer(){
            let newLateralIzq = this.cubo.lateralIzq.slice(0,6).concat(this.cubo.detras.slice(6,9))
            let newFrontal = this.cubo.frontal.slice(0,6).concat(this.cubo.lateralIzq.slice(6,9))
            let newLateralDer = this.cubo.lateralDer.slice(0,6).concat(this.cubo.frontal.slice(6,9))
            let newDetras = this.cubo.detras.slice(0,6).concat(this.cubo.lateralDer.slice(6,9))
            

            this.cubo.lateralIzq = newLateralIzq
            this.cubo.frontal = newFrontal
            this.cubo.lateralDer = newLateralDer
            this.cubo.detras = newDetras
            this.girar(this.cubo.bottom, "der")

            console.log(this.cubo.frontal.slice(1,7).concat(this.cubo.lateralIzq.slice(6,10)));
        },
        abajoIzq(){
            let newLateralIzq = this.cubo.lateralIzq.slice(0,6).concat(this.cubo.frontal.slice(6,9))
            let newFrontal = this.cubo.frontal.slice(0,6).concat(this.cubo.lateralDer.slice(6,9))
            let newLateralDer = this.cubo.lateralDer.slice(0,6).concat(this.cubo.detras.slice(6,9))
            let newDetras = this.cubo.detras.slice(0,6).concat(this.cubo.lateralIzq.slice(6,9))

            this.cubo.lateralIzq = newLateralIzq
            this.cubo.frontal = newFrontal
            this.cubo.lateralDer = newLateralDer
            this.cubo.detras = newDetras
            this.girar(this.cubo.bottom)
        },
        arribaIzq(){
            let newLateralIzq = this.cubo.frontal.slice(0,3).concat(this.cubo.lateralIzq.slice(3,9))
            let newFrontal = this.cubo.lateralDer.slice(0,3).concat(this.cubo.frontal.slice(3,9))
            let newLateralDer = this.cubo.detras.slice(0,3).concat(this.cubo.lateralDer.slice(3,9))
            let newDetras = this.cubo.lateralIzq.slice(0,3).concat(this.cubo.detras.slice(3,9))

            this.cubo.lateralIzq = newLateralIzq
            this.cubo.frontal = newFrontal
            this.cubo.lateralDer = newLateralDer
            this.cubo.detras = newDetras
            this.girar(this.cubo.top, "der")
        },
        arribaDer(){
            let newLateralIzq = this.cubo.detras.slice(0,3).concat(this.cubo.lateralIzq.slice(3,9))
            let newFrontal = this.cubo.lateralIzq.slice(0,3).concat(this.cubo.frontal.slice(3,9))
            let newLateralDer = this.cubo.frontal.slice(0,3).concat(this.cubo.lateralDer.slice(3,9))
            let newDetras = this.cubo.lateralDer.slice(0,3).concat(this.cubo.detras.slice(3,9))

            this.cubo.lateralIzq = newLateralIzq
            this.cubo.frontal = newFrontal
            this.cubo.lateralDer = newLateralDer
            this.cubo.detras = newDetras
            this.girar(this.cubo.top)
        },
        lateralDerechoAbajo(){
            let elementosNaranja = [this.cubo.frontal[2],this.cubo.frontal[5],this.cubo.frontal[8]]
            let elementosRojo = [this.cubo.bottom[2],this.cubo.bottom[5],this.cubo.bottom[8]]
            let elementosVerde = [this.cubo.detras[2],this.cubo.detras[5],this.cubo.detras[8]]
            let elementosNegro = [this.cubo.top[2],this.cubo.top[5],this.cubo.top[8]]
        
            this.cubo.frontal = [
                this.cubo.frontal[0],this.cubo.frontal[1],this.cubo.frontal[2],this.cubo.frontal[3],this.cubo.frontal[4],this.cubo.frontal[5],this.cubo.frontal[6],this.cubo.frontal[7],this.cubo.frontal[8]] = [this.cubo.frontal[0],this.cubo.frontal[1], elementosNegro[0] ,this.cubo.frontal[3],this.cubo.frontal[4],elementosNegro[1],this.cubo.frontal[6],this.cubo.frontal[7],elementosNegro[2]
            ]

            this.cubo.bottom = [
                this.cubo.bottom[0],this.cubo.bottom[1],this.cubo.bottom[2],this.cubo.bottom[3],this.cubo.bottom[4],this.cubo.bottom[5],this.cubo.bottom[6],this.cubo.bottom[7],this.cubo.bottom[8]] = [this.cubo.bottom[0],this.cubo.bottom[1],elementosNaranja[0],this.cubo.bottom[3],this.cubo.bottom[4],elementosNaranja[1],this.cubo.bottom[6],this.cubo.bottom[7],elementosNaranja[2]
            ]

            this.cubo.detras = [
                this.cubo.detras[0],this.cubo.detras[1],this.cubo.detras[2],this.cubo.detras[3],this.cubo.detras[4],this.cubo.detras[5],this.cubo.detras[6],this.cubo.detras[7],this.cubo.detras[8]] = [this.cubo.detras[0],this.cubo.detras[1],elementosRojo[0],this.cubo.detras[3],this.cubo.detras[4],elementosRojo[1],this.cubo.detras[6],this.cubo.detras[7],elementosRojo[2]
            ]

            this.cubo.top = [
                this.cubo.top[0],this.cubo.top[1],this.cubo.top[2],this.cubo.top[3],this.cubo.top[4],this.cubo.top[5],this.cubo.top[6],this.cubo.top[7],this.cubo.top[8]] = [this.cubo.top[0],this.cubo.top[1],elementosVerde[0],this.cubo.top[3],this.cubo.top[4],elementosVerde[1],this.cubo.top[6],this.cubo.top[7],elementosVerde[2]
            ]
            this.girar(this.cubo.lateralDer)
        },
        lateralDerechoArriba(){
            let elementosNaranja = [this.cubo.frontal[2],this.cubo.frontal[5],this.cubo.frontal[8]]
            let elementosRojo = [this.cubo.bottom[2],this.cubo.bottom[5],this.cubo.bottom[8]]
            let elementosVerde = [this.cubo.detras[2],this.cubo.detras[5],this.cubo.detras[8]]
            let elementosNegro = [this.cubo.top[2],this.cubo.top[5],this.cubo.top[8]]
        
            this.cubo.frontal = [
                this.cubo.frontal[0],this.cubo.frontal[1],this.cubo.frontal[2],this.cubo.frontal[3],this.cubo.frontal[4],this.cubo.frontal[5],this.cubo.frontal[6],this.cubo.frontal[7],this.cubo.frontal[8]] = [this.cubo.frontal[0],this.cubo.frontal[1], elementosRojo[0] ,this.cubo.frontal[3],this.cubo.frontal[4],elementosRojo[1],this.cubo.frontal[6],this.cubo.frontal[7],elementosRojo[2]
            ]

            this.cubo.bottom = [
                this.cubo.bottom[0],this.cubo.bottom[1],this.cubo.bottom[2],this.cubo.bottom[3],this.cubo.bottom[4],this.cubo.bottom[5],this.cubo.bottom[6],this.cubo.bottom[7],this.cubo.bottom[8]] = [this.cubo.bottom[0],this.cubo.bottom[1],elementosVerde[0],this.cubo.bottom[3],this.cubo.bottom[4],elementosVerde[1],this.cubo.bottom[6],this.cubo.bottom[7],elementosVerde[2]
            ]

            this.cubo.detras = [
                this.cubo.detras[0],this.cubo.detras[1],this.cubo.detras[2],this.cubo.detras[3],this.cubo.detras[4],this.cubo.detras[5],this.cubo.detras[6],this.cubo.detras[7],this.cubo.detras[8]] = [this.cubo.detras[0],this.cubo.detras[1],elementosNegro[0],this.cubo.detras[3],this.cubo.detras[4],elementosNegro[1],this.cubo.detras[6],this.cubo.detras[7],elementosNegro[2]
            ]

            this.cubo.top = [
                this.cubo.top[0],this.cubo.top[1],this.cubo.top[2],this.cubo.top[3],this.cubo.top[4],this.cubo.top[5],this.cubo.top[6],this.cubo.top[7],this.cubo.top[8]] = [this.cubo.top[0],this.cubo.top[1],elementosNaranja[0],this.cubo.top[3],this.cubo.top[4],elementosNaranja[1],this.cubo.top[6],this.cubo.top[7],elementosNaranja[2]
            ]
            this.girar(this.cubo.lateralDer, "der")
        },
        lateralIzquierdoAbajo(){
            let elementosNaranja = [this.cubo.frontal[0],this.cubo.frontal[3],this.cubo.frontal[6]]
            let elementosRojo = [this.cubo.bottom[0],this.cubo.bottom[3],this.cubo.bottom[6]]
            let elementosVerde = [this.cubo.detras[0],this.cubo.detras[3],this.cubo.detras[6]]
            let elementosNegro = [this.cubo.top[0],this.cubo.top[3],this.cubo.top[6]]
        
            this.cubo.frontal = [
                this.cubo.frontal[0],this.cubo.frontal[1],this.cubo.frontal[2],this.cubo.frontal[3],this.cubo.frontal[4],this.cubo.frontal[5],this.cubo.frontal[6],this.cubo.frontal[7],this.cubo.frontal[8]] = [elementosNegro[0],this.cubo.frontal[1],this.cubo.frontal[2],elementosNegro[1],this.cubo.frontal[4],this.cubo.frontal[5],elementosNegro[2],this.cubo.frontal[7],this.cubo.frontal[8]
            ]

            this.cubo.bottom = [
                this.cubo.bottom[0],this.cubo.bottom[1],this.cubo.bottom[2],this.cubo.bottom[3],this.cubo.bottom[4],this.cubo.bottom[5],this.cubo.bottom[6],this.cubo.bottom[7],this.cubo.bottom[8]] = [elementosNaranja[0],this.cubo.bottom[1],this.cubo.bottom[2],elementosNaranja[1],this.cubo.bottom[4],this.cubo.bottom[5],elementosNaranja[1],this.cubo.bottom[7],this.cubo.bottom[8]
            ]

            this.cubo.detras = [
                this.cubo.detras[0],this.cubo.detras[1],this.cubo.detras[2],this.cubo.detras[3],this.cubo.detras[4],this.cubo.detras[5],this.cubo.detras[6],this.cubo.detras[7],this.cubo.detras[8]] = [elementosRojo[0],this.cubo.detras[1],this.cubo.detras[2],elementosRojo[1],this.cubo.detras[4],this.cubo.detras[5],elementosRojo[2],this.cubo.detras[7],this.cubo.detras[8]
            ]

            this.cubo.top = [
                this.cubo.top[0],this.cubo.top[1],this.cubo.top[2],this.cubo.top[3],this.cubo.top[4],this.cubo.top[5],this.cubo.top[6],this.cubo.top[7],this.cubo.top[8]] = [elementosVerde[0],this.cubo.top[1],this.cubo.top[2],elementosVerde[1],this.cubo.top[4],this.cubo.top[5],elementosVerde[1],this.cubo.top[7],this.cubo.top[8]
            ]
            this.girar(this.cubo.lateralIzq, "der")
        },
        lateralIzquierdoArriba(){
            let elementosNaranja = [this.cubo.frontal[0],this.cubo.frontal[3],this.cubo.frontal[6]]
            let elementosRojo = [this.cubo.bottom[0],this.cubo.bottom[3],this.cubo.bottom[6]]
            let elementosVerde = [this.cubo.detras[0],this.cubo.detras[3],this.cubo.detras[6]]
            let elementosNegro = [this.cubo.top[0],this.cubo.top[3],this.cubo.top[6]]

            this.cubo.frontal = [
                this.cubo.frontal[0],this.cubo.frontal[1],this.cubo.frontal[2],this.cubo.frontal[3],this.cubo.frontal[4],this.cubo.frontal[5],this.cubo.frontal[6],this.cubo.frontal[7],this.cubo.frontal[8]] = [elementosRojo[0],this.cubo.frontal[1],this.cubo.frontal[2],elementosRojo[1],this.cubo.frontal[4],this.cubo.frontal[5],elementosRojo[2],this.cubo.frontal[7],this.cubo.frontal[8]
            ]

            this.cubo.bottom = [
                this.cubo.bottom[0],this.cubo.bottom[1],this.cubo.bottom[2],this.cubo.bottom[3],this.cubo.bottom[4],this.cubo.bottom[5],this.cubo.bottom[6],this.cubo.bottom[7],this.cubo.bottom[8]] = [elementosVerde[0],this.cubo.bottom[1],this.cubo.bottom[2],elementosVerde[1],this.cubo.bottom[4],this.cubo.bottom[5],elementosVerde[1],this.cubo.bottom[7],this.cubo.bottom[8]
            ]

            this.cubo.detras = [
                this.cubo.detras[0],this.cubo.detras[1],this.cubo.detras[2],this.cubo.detras[3],this.cubo.detras[4],this.cubo.detras[5],this.cubo.detras[6],this.cubo.detras[7],this.cubo.detras[8]] = [elementosNegro[0],this.cubo.detras[1],this.cubo.detras[2],elementosNegro[1],this.cubo.detras[4],this.cubo.detras[5],elementosNegro[2],this.cubo.detras[7],this.cubo.detras[8]
            ]

            this.cubo.top = [
                this.cubo.top[0],this.cubo.top[1],this.cubo.top[2],this.cubo.top[3],this.cubo.top[4],this.cubo.top[5],this.cubo.top[6],this.cubo.top[7],this.cubo.top[8]] = [elementosNaranja[0],this.cubo.top[1],this.cubo.top[2],elementosNaranja[1],this.cubo.top[4],this.cubo.top[5],elementosNaranja[1],this.cubo.top[7],this.cubo.top[8]
            ]
            this.girar(this.cubo.lateralIzq)
        },
        frontalIzquierda(){
            let elementosAzul = [this.cubo.lateralIzq[2], this.cubo.lateralIzq[5], this.cubo.lateralIzq[8]]
            let elementosNegro = [this.cubo.top[6],this.cubo.top[7],this.cubo.top[8]]
            let elementosBlanco = [this.cubo.lateralDer[0],this.cubo.lateralDer[3],this.cubo.lateralDer[6]]
            let elementosRojo = [this.cubo.bottom[0],this.cubo.bottom[1],this.cubo.bottom[2]]

            this.cubo.top = [
                this.cubo.top[0],this.cubo.top[1],this.cubo.top[2],this.cubo.top[3],this.cubo.top[4],this.cubo.top[5],this.cubo.top[6],this.cubo.top[7],this.cubo.top[8]] = [this.cubo.top[0],this.cubo.top[1],this.cubo.top[2],this.cubo.top[3],this.cubo.top[4],this.cubo.top[5],elementosBlanco[0],elementosBlanco[1],elementosBlanco[2]
            ]
            this.cubo.lateralIzq = [
                this.cubo.lateralIzq[0],this.cubo.lateralIzq[1],this.cubo.lateralIzq[2],this.cubo.lateralIzq[3],this.cubo.lateralIzq[4],this.cubo.lateralIzq[5],this.cubo.lateralIzq[6],this.cubo.lateralIzq[7],this.cubo.lateralIzq[8]] = [this.cubo.lateralIzq[0],this.cubo.lateralIzq[1],elementosNegro[0],this.cubo.lateralIzq[3],this.cubo.lateralIzq[4],elementosNegro[1],this.cubo.lateralIzq[6],this.cubo.lateralIzq[7],elementosNegro[2]
            ]
            this.cubo.bottom = [
                this.cubo.bottom[0],this.cubo.bottom[1],this.cubo.bottom[2],this.cubo.bottom[3],this.cubo.bottom[4],this.cubo.bottom[5],this.cubo.bottom[6],this.cubo.bottom[7],this.cubo.bottom[8]] = [elementosAzul[0],elementosAzul[1],elementosAzul[2],this.cubo.bottom[3],this.cubo.bottom[4],this.cubo.bottom[5],this.cubo.bottom[6],this.cubo.bottom[7],this.cubo.bottom[8]
            ]
            this.cubo.lateralDer = [
                this.cubo.lateralDer[0],this.cubo.lateralDer[1],this.cubo.lateralDer[2],this.cubo.lateralDer[3],this.cubo.lateralDer[4],this.cubo.lateralDer[5],this.cubo.lateralDer[6],this.cubo.lateralDer[7],this.cubo.lateralDer[8]] = [elementosRojo[0],this.cubo.lateralDer[1],this.cubo.lateralDer[2],elementosRojo[1],this.cubo.lateralDer[4],this.cubo.lateralDer[5],elementosRojo[2],this.cubo.lateralDer[7],this.cubo.lateralDer[8]
            ]
            this.girar(this.cubo.frontal)
        },
        frontalDerecha(){
            let elementosAzul = [this.cubo.lateralIzq[2], this.cubo.lateralIzq[5], this.cubo.lateralIzq[8]]
            let elementosNegro = [this.cubo.top[6],this.cubo.top[7],this.cubo.top[8]]
            let elementosBlanco = [this.cubo.lateralDer[0],this.cubo.lateralDer[3],this.cubo.lateralDer[6]]
            let elementosRojo = [this.cubo.bottom[0],this.cubo.bottom[1],this.cubo.bottom[2]]

            this.cubo.top = [
                this.cubo.top[0],this.cubo.top[1],this.cubo.top[2],this.cubo.top[3],this.cubo.top[4],this.cubo.top[5],this.cubo.top[6],this.cubo.top[7],this.cubo.top[8]] = [this.cubo.top[0],this.cubo.top[1],this.cubo.top[2],this.cubo.top[3],this.cubo.top[4],this.cubo.top[5],elementosAzul[0],elementosAzul[1],elementosAzul[2]
            ]
            this.cubo.lateralIzq = [
                this.cubo.lateralIzq[0],this.cubo.lateralIzq[1],this.cubo.lateralIzq[2],this.cubo.lateralIzq[3],this.cubo.lateralIzq[4],this.cubo.lateralIzq[5],this.cubo.lateralIzq[6],this.cubo.lateralIzq[7],this.cubo.lateralIzq[8]] = [this.cubo.lateralIzq[0],this.cubo.lateralIzq[1],elementosRojo[0],this.cubo.lateralIzq[3],this.cubo.lateralIzq[4],elementosRojo[1],this.cubo.lateralIzq[6],this.cubo.lateralIzq[7],elementosRojo[2]
            ]
            this.cubo.bottom = [
                this.cubo.bottom[0],this.cubo.bottom[1],this.cubo.bottom[2],this.cubo.bottom[3],this.cubo.bottom[4],this.cubo.bottom[5],this.cubo.bottom[6],this.cubo.bottom[7],this.cubo.bottom[8]] = [elementosBlanco[0],elementosBlanco[1],elementosBlanco[2],this.cubo.bottom[3],this.cubo.bottom[4],this.cubo.bottom[5],this.cubo.bottom[6],this.cubo.bottom[7],this.cubo.bottom[8]
            ]
            this.cubo.lateralDer = [
                this.cubo.lateralDer[0],this.cubo.lateralDer[1],this.cubo.lateralDer[2],this.cubo.lateralDer[3],this.cubo.lateralDer[4],this.cubo.lateralDer[5],this.cubo.lateralDer[6],this.cubo.lateralDer[7],this.cubo.lateralDer[8]] = [elementosNegro[0],this.cubo.lateralDer[1],this.cubo.lateralDer[2],elementosNegro[1],this.cubo.lateralDer[4],this.cubo.lateralDer[5],elementosNegro[2],this.cubo.lateralDer[7],this.cubo.lateralDer[8]
            ]
            this.girar(this.cubo.frontal, "der")
        },
        detrasIzquierda(){
            let elementosAzul = [this.cubo.lateralIzq[0], this.cubo.lateralIzq[3], this.cubo.lateralIzq[6]]
            let elementosNegro = [this.cubo.top[0],this.cubo.top[1],this.cubo.top[2]]
            let elementosBlanco = [this.cubo.lateralDer[2],this.cubo.lateralDer[5],this.cubo.lateralDer[8]]
            let elementosRojo = [this.cubo.bottom[6],this.cubo.bottom[7],this.cubo.bottom[8]]

            this.cubo.top = [
                this.cubo.top[0],this.cubo.top[1],this.cubo.top[2],this.cubo.top[3],this.cubo.top[4],this.cubo.top[5],this.cubo.top[6],this.cubo.top[7],this.cubo.top[8]] = [elementosBlanco[0],elementosBlanco[1],elementosBlanco[2],this.cubo.top[3],this.cubo.top[4],this.cubo.top[5],this.cubo.top[6],this.cubo.top[7],this.cubo.top[8]
            ]
            this.cubo.lateralIzq = [
                this.cubo.lateralIzq[0],this.cubo.lateralIzq[1],this.cubo.lateralIzq[2],this.cubo.lateralIzq[3],this.cubo.lateralIzq[4],this.cubo.lateralIzq[5],this.cubo.lateralIzq[6],this.cubo.lateralIzq[7],this.cubo.lateralIzq[8]] = [elementosNegro[0],this.cubo.lateralIzq[1],this.cubo.lateralIzq[2],elementosNegro[1],this.cubo.lateralIzq[4],this.cubo.lateralIzq[5],elementosNegro[2],this.cubo.lateralIzq[7],this.cubo.lateralIzq[8]
            ]
            this.cubo.bottom = [
                this.cubo.bottom[0],this.cubo.bottom[1],this.cubo.bottom[2],this.cubo.bottom[3],this.cubo.bottom[4],this.cubo.bottom[5],this.cubo.bottom[6],this.cubo.bottom[7],this.cubo.bottom[8]] = [this.cubo.bottom[0],this.cubo.bottom[1],this.cubo.bottom[2],this.cubo.bottom[3],this.cubo.bottom[4],this.cubo.bottom[5],elementosAzul[0],elementosAzul[1],elementosAzul[2]
            ]
            this.cubo.lateralDer = [
                this.cubo.lateralDer[0],this.cubo.lateralDer[1],this.cubo.lateralDer[2],this.cubo.lateralDer[3],this.cubo.lateralDer[4],this.cubo.lateralDer[5],this.cubo.lateralDer[6],this.cubo.lateralDer[7],this.cubo.lateralDer[8]] = [this.cubo.lateralDer[0],this.cubo.lateralDer[1],elementosRojo[0],this.cubo.lateralDer[3],this.cubo.lateralDer[4],elementosRojo[1],this.cubo.lateralDer[6],this.cubo.lateralDer[7],elementosRojo[2]
            ]
            this.girar(this.cubo.detras)
        },
        detrasDerecha(){
            let elementosAzul = [this.cubo.lateralIzq[0], this.cubo.lateralIzq[3], this.cubo.lateralIzq[6]]
            let elementosNegro = [this.cubo.top[0],this.cubo.top[1],this.cubo.top[2]]
            let elementosBlanco = [this.cubo.lateralDer[2],this.cubo.lateralDer[5],this.cubo.lateralDer[8]]
            let elementosRojo = [this.cubo.bottom[6],this.cubo.bottom[7],this.cubo.bottom[8]]

            this.cubo.top = [
                this.cubo.top[0],this.cubo.top[1],this.cubo.top[2],this.cubo.top[3],this.cubo.top[4],this.cubo.top[5],this.cubo.top[6],this.cubo.top[7],this.cubo.top[8]] = [elementosAzul[0],elementosAzul[1],elementosAzul[2],this.cubo.top[3],this.cubo.top[4],this.cubo.top[5],this.cubo.top[6],this.cubo.top[7],this.cubo.top[8]
            ]
            this.cubo.lateralIzq = [
                this.cubo.lateralIzq[0],this.cubo.lateralIzq[1],this.cubo.lateralIzq[2],this.cubo.lateralIzq[3],this.cubo.lateralIzq[4],this.cubo.lateralIzq[5],this.cubo.lateralIzq[6],this.cubo.lateralIzq[7],this.cubo.lateralIzq[8]] = [elementosRojo[0],this.cubo.lateralIzq[1],this.cubo.lateralIzq[2],elementosRojo[1],this.cubo.lateralIzq[4],this.cubo.lateralIzq[5],elementosRojo[2],this.cubo.lateralIzq[7],this.cubo.lateralIzq[8]
            ]
            this.cubo.bottom = [
                this.cubo.bottom[0],this.cubo.bottom[1],this.cubo.bottom[2],this.cubo.bottom[3],this.cubo.bottom[4],this.cubo.bottom[5],this.cubo.bottom[6],this.cubo.bottom[7],this.cubo.bottom[8]] = [this.cubo.bottom[0],this.cubo.bottom[1],this.cubo.bottom[2],this.cubo.bottom[3],this.cubo.bottom[4],this.cubo.bottom[5],elementosBlanco[0],elementosBlanco[1],elementosBlanco[2]
            ]
            this.cubo.lateralDer = [
                this.cubo.lateralDer[0],this.cubo.lateralDer[1],this.cubo.lateralDer[2],this.cubo.lateralDer[3],this.cubo.lateralDer[4],this.cubo.lateralDer[5],this.cubo.lateralDer[6],this.cubo.lateralDer[7],this.cubo.lateralDer[8]] = [this.cubo.lateralDer[0],this.cubo.lateralDer[1],elementosNegro[0],this.cubo.lateralDer[3],this.cubo.lateralDer[4],elementosNegro[1],this.cubo.lateralDer[6],this.cubo.lateralDer[7],elementosNegro[2]
            ]
            this.girar(this.cubo.detras, "der")
        },
        aleatorizar(){
            let number = Math.random();
            let aleatorio = Math.floor(number * (30 - 15 + 1)) + 10;
            for (let i = 0; i < aleatorio; i++) {
                this.lateralDerechoAbajo()
                this.detrasIzquierda()
                this.lateralIzquierdoArriba()
                this.arribaIzq()
                this.arribaIzq()
                this.frontalDerecha()
                this.abajoDer()
                this.frontalDerecha()
                this.lateralIzquierdoArriba()
                this.detrasIzquierda()
                this.abajoDer()
            }
        }
    }
})
app.mount("#app")