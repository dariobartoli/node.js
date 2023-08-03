const cardsTruco = [
    {
        number: 1,
        suit: "sword",
        value: 14,
        valueEnvido: 1,
        img: "../img/1sword.png"
    },
    {
        number: 2,
        suit: "sword",
        value: 9,
        valueEnvido: 2,
        img: "../img/2sword.png"
    },
    {
        number: 3,
        suit: "sword",
        value: 10,
        valueEnvido: 3,
        img: "../img/3sword.png"
    },
    {
        number: 4,
        suit: "sword",
        value: 1,
        valueEnvido: 4,
        img: "../img/4sword.png"
    },
    {
        number: 5,
        suit: "sword",
        value: 2,
        valueEnvido: 5,
        img: "../img/5sword.png"
    },
    {
        number: 6,
        suit: "sword",
        value: 3,
        valueEnvido: 6,
        img: "../img/6sword.png"
    },
    {
        number: 7,
        suit: "sword",
        value: 12,
        valueEnvido: 7,
        img: "../img/7sword.png"
    },
    {
        number: 10,
        suit: "sword",
        value: 5,
        valueEnvido: 0,
        img: "../img/10sword.png"
    },
    {
        number: 11,
        suit: "sword",
        value: 6,
        valueEnvido: 0,
        img: "../img/11sword.png"
    },
    {
        number: 12,
        suit: "sword",
        value: 7,
        valueEnvido: 0,
        img: "../img/12sword.png"
    },
    {
        number: 1,
        suit: "cup",
        value: 8,
        valueEnvido: 1,
        img: "../img/1cup.png"
    },
    {
        number: 2,
        suit: "cup",
        value: 9,
        valueEnvido: 2,
        img: "../img/2cup.png"
    },
    {
        number: 3,
        suit: "cup",
        value: 10,
        valueEnvido: 3,
        img: "../img/3cup.png"
    },
    {
        number: 4,
        suit: "cup",
        value: 1,
        valueEnvido: 4,
        img: "../img/4cup.png"
    },
    {
        number: 5,
        suit: "cup",
        value: 2,
        valueEnvido: 5,
        img: "../img/5cup.png"
    },
    {
        number: 6,
        suit: "cup",
        value: 3,
        valueEnvido: 6,
        img: "../img/6cup.png"
    },
    {
        number: 7,
        suit: "cup",
        value: 4,
        valueEnvido: 7,
        img: "../img/7cup.png"
    },
    {
        number: 10,
        suit: "cup",
        value: 5,
        valueEnvido: 0,
        img: "../img/10cup.png"
    },
    {
        number: 11,
        suit: "cup",
        value: 6,
        valueEnvido: 0,
        img: "../img/11cup.png"
    },
    {
        number: 12,
        suit: "cup",
        value: 7,
        valueEnvido: 0,
        img: "../img/12cup.png"
    },
    {
        number: 1,
        suit: "gold",
        value: 8,
        valueEnvido: 1,
        img: "../img/1gold.png"
    },
    {
        number: 2,
        suit: "gold",
        value: 9,
        valueEnvido: 2,
        img: "../img/2gold.png"
    },
    {
        number: 3,
        suit: "gold",
        value: 10,
        valueEnvido: 3,
        img: "../img/3gold.png"
    },
    {
        number: 4,
        suit: "gold",
        value: 1,
        valueEnvido: 4,
        img: "../img/4gold.png"
    },
    {
        number: 5,
        suit: "gold",
        value: 2,
        valueEnvido: 5,
        img: "../img/5gold.png"
    },
    {
        number: 6,
        suit: "gold",
        value: 3,
        valueEnvido: 6,
        img: "../img/6gold.png"
    },
    {
        number: 7,
        suit: "gold",
        value: 11,
        valueEnvido: 7,
        img: "../img/7gold.png"
    },
    {
        number: 10,
        suit: "gold",
        value: 5,
        valueEnvido: 0,
        img: "../img/10gold.png"
    },
    {
        number: 11,
        suit: "gold",
        value: 6,
        valueEnvido: 0,
        img: "../img/11gold.png"
    },
    {
        number: 12,
        suit: "gold",
        value: 7,
        valueEnvido: 0,
        img: "../img/12gold.png"
    },
    {
        number: 1,
        suit: "stick",
        value: 13,
        valueEnvido: 1,
        img: "../img/1stick.png"
    },
    {
        number: 2,
        suit: "stick",
        value: 9,
        valueEnvido: 2,
        img: "../img/2stick.png"
    },
    {
        number: 3,
        suit: "stick",
        value: 10,
        valueEnvido: 3,
        img: "../img/3stick.png"
    },
    {
        number: 4,
        suit: "stick",
        value: 1,
        valueEnvido: 4,
        img: "../img/4stick.png"
    },
    {
        number: 5,
        suit: "stick",
        value: 2,
        valueEnvido: 5,
        img: "../img/5stick.png"
    },
    {
        number: 6,
        suit: "stick",
        value: 3,
        valueEnvido: 6,
        img: "../img/6stick.png"
    },
    {
        number: 7,
        suit: "stick",
        value: 4,
        valueEnvido: 7,
        img: "../img/7stick.png"
    },
    {
        number: 10,
        suit: "stick",
        value: 5,
        valueEnvido: 0,
        img: "../img/10stick.png"
    },
    {
        number: 11,
        suit: "stick",
        value: 6,
        valueEnvido: 0,
        img: "../img/11stick.png"
    },
    {
        number: 12,
        suit: "stick",
        value: 7,
        valueEnvido: 0,
        img: "../img/12stick.png"
    },   
]

const app = Vue.createApp({
    data(){
        return{
            cards: [],
            game: {},
            playerOne: {},
            cardP1: {},
            playerTwo: {},
            cardP2: {},
            deck: {},
            field: [],
            viewOptionP1: false,
            viewOptionP2: false,
            panelTrucoP1: false,
            panelTrucoP2: false,
            panelEnvidoP1: false,
            panelEnvidoP2: false,
            trucoSay: false,
            envidoSay: false,
        }
    },
    created(){
        this.cards = cardsTruco
        this.deck = {
            deck: cardsTruco,
        }
        this.playerOne = {
            numberP: 1,
            cardHand: [],
            totalEnvido: 0,
            truco: false,
            reTruco: false,
            vale4: false,
            envido: false,
        }
        this.playerTwo = {
            numberP: 2,
            cardHand: [],
            totalEnvido: 0,
            truco: false,
            reTruco: false,
            vale4: false,
            envido: false,
        }
        this.game = {
            gameStart: false,
            p1Round: 0,
            p2Round: 0,
            p1Points: 0,
            p2Points: 0,
            cardsTruco: [],
            p1Turn: true,
            p2Turn: true,
            typeTruco: "nada",
            typeEnvido: "",
            mano: "",
            checkVictoryField: [],
        }
    },
    methods:{
        mix(array){
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            this.deck = {
                deck: array
            }
        },
        share(array){
            for (let i = 1; i < 7; i++) {
                if(i%2 != 0){
                    let card = array.pop();
                    this.playerOne.cardHand.push(card)
                    this.deck.deck.unshift(card)
                }else{
                    let card = array.pop();
                    this.playerTwo.cardHand.push(card)
                    this.deck.deck.unshift(card)
                }
            }
            this.turn()
        },
        mixAndShare(array){
            this.mix(array)
            this.share(array)
            this.game.gameStart = true
        },
        turn(){
            let random = Math.floor(Math.random() * 2) + 1
            if(this.game.mano == "" && this.game.mano == ""){
                if(random == 1){
                    this.game.p1Turn = false
                    this.game.mano = "P1"
                }else{
                    this.game.p2Turn = false
                    this.game.mano = "P2"
                }
            }else if(this.game.mano == "P1"){
                this.game.p2Turn = false
                this.game.mano = "P2"
            }else if(this.game.mano == "P2"){
                this.game.p1Turn = false
                this.game.mano = "P1"
            }
        },
        selectCard(card, player){
            this.field.push([card, player])
            let index = player.cardHand.indexOf(card)
            player.cardHand.splice(index, 1);
            player.cardPlay = card
            this.viewOptionP1 = false
            this.viewOptionP2 = false
            let numberPlayer = player.numberP
            if(numberPlayer == 1){
                this.game.p1Turn = true
                this.game.p2Turn = false
            }else{
                this.game.p2Turn = true
                this.game.p1Turn = false
            }
        },
        viewOptions(card, player){
            let playe = player.numberP
            playe == 1 ? this.viewOptionP1 = true : this.viewOptionP2 = true
            playe == 1 ? this.cardP1 = card : this.cardP2 = card
        },
        denyTruco(){
            if(this.playerOne.truco == true){
                this.game.p1Points += 1
            }else if(this.playerTwo.truco == true){
                this.game.p2Points += 1
            }
            this.clean(500)
        },
        clean(number){
            setTimeout(() => {
                this.field = []
                this.playerOne.cardHand = []
                this.playerTwo.cardHand = []
                this.playerOne.truco = false
                this.playerTwo.truco = false
                this.playerOne.reTruco = false
                this.playerTwo.reTruco = false
                this.playerOne.vale4 = false
                this.playerTwo.vale4 = false
                this.playerOne.totalEnvido = 0
                this.playerTwo.totalEnvido = 0
                this.game.p1Round = 0
                this.game.p2Round = 0
                this.game.p1Turn = true
                this.game.p2Turn = true
                this.game.typeTruco = "nada"
                this.panelTrucoP1 = false
                this.panelTrucoP2 = false
                this.game.checkVictoryField = []
                this.game.gameStart = false
                this.trucoSay = false
            }, number);
        },
        denyReTruco(){
            if(this.playerOne.reTruco == true){
                this.game.p1Points += 2
            }else if(this.playerTwo.reTruco == true){
                this.game.p2Points += 2
            }
            this.clean(500)
        },
        denyVale4(){
            if(this.playerOne.vale4 == true){
                this.game.p1Points += 3
            }else if(this.playerTwo.vale4 == true){
                this.game.p2Points += 3
            }
            this.clean(500)
        },
        cantarTruco(player){
            let playe = player.numberP
            this.trucoSay = true
            playe == 1? this.panelTrucoP1 = true : this.panelTrucoP2 = true
            playe == 1? this.playerOne.truco = true : this.playerTwo.truco = true
        },
        aceptarTruco(){
            this.game.typeTruco = "truco";
            this.panelTrucoP1 = false
            this.panelTrucoP2 = false
        },
        cantarReTruco(player){
            let playe = player.numberP
            this.playerOne.truco = false
            this.playerTwo.truco = false
            playe == 1? [this.panelTrucoP1 = true, this.panelTrucoP2 = false] : [this.panelTrucoP1 = false, this.panelTrucoP2 = true]
            playe == 1? this.playerOne.reTruco = true : this.playerTwo.reTruco = true
        },
        aceptarReTruco(){
            this.game.typeTruco = "reTruco";
            this.panelTrucoP1 = false
            this.panelTrucoP2 = false
        },
        cantarVale4(player){
            let playe = player.numberP
            this.playerOne.reTruco = false
            this.playerTwo.reTruco = false
            playe == 1? this.playerOne.vale4 = true : this.playerTwo.vale4 = true
            playe == 1? [this.panelTrucoP1 = true, this.panelTrucoP2 = false] : [this.panelTrucoP1 = false, this.panelTrucoP2 = true]
        },
        aceptarVale4(){
            this.game.typeTruco = "vale4";
            this.panelTrucoP1 = false
            this.panelTrucoP2 = false
        },
        sayEnvido(type, player){
            this.envidoSay = true
            if(this.game.typeEnvido == ""){
                if(type == "envido"){
                    console.log("entré al envido");
                    this.game.typeEnvido = "envido"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envido" : this.playerTwo.envido = "envido"
                    playe == 1? this.panelEnvidoP2 = true : this.panelEnvidoP1 = true
                }else if(type == "realenvido"){
                    console.log("entré al real envido");
                    this.game.typeEnvido = "realenvido"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "realenvido" : this.playerTwo.envido = "realenvido"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }else if(type == "faltaenvido"){
                    console.log("entré al falta envido");
                    this.game.typeEnvido = "faltaenvido"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "faltaenvido" : this.playerTwo.envido = "faltaenvido"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }
            }else if(this.game.typeEnvido == "envido"){
                if(type == "envido"){
                    console.log("entré al envido envido");
                    this.game.typeEnvido = "envidoenvido"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envidoenvido" : this.playerTwo.envido = "envidoenvido"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }else if(type == "realenvido"){
                    console.log("entré al envido real envido");
                    this.game.typeEnvido = "envidorealenvido"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envidorealenvido" : this.playerTwo.envido = "envidorealenvido"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }else if(type == "faltaenvido"){
                    console.log("entré al envido falta envido");
                    this.game.typeEnvido = "envidofaltaenvido"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envidofaltaenvido" : this.playerTwo.envido = "envidofaltaenvido"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }
            }else if(this.game.typeEnvido == "realenvido"){
                if(type == "faltaenvido"){
                    console.log("entré al real envido falta");
                    this.game.typeEnvido = "realenvidofalta"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "realenvidofalta" : this.playerTwo.envido = "realenvidofalta"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }
            }else if(this.game.typeEnvido == "envidoenvido"){
                if(type == "realenvido"){
                    console.log("entré al envido envido real envido");
                    this.game.typeEnvido = "envidoenvidoreal"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envidoenvidoreal" : this.playerTwo.envido = "envidoenvidoreal"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }
            }else if(this.game.typeEnvido == "envidorealenvido"){
                if(type == "faltaenvido"){
                    console.log("entré al envido real envido falta");
                    this.game.typeEnvido = "envidorealfalta"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envidorealfalta" : this.playerTwo.envido = "envidorealfalta"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }
            }else if(this.game.typeEnvido == "envidoenvidoreal"){
                if(type == "faltaenvido"){
                    console.log("entré al envido envido real envido falta");
                    this.game.typeEnvido = "envidoenvidorealfalta"
                    let playe = player.numberP
                    playe == 1? this.playerOne.envido = "envidoenvidorealfalta" : this.playerTwo.envido = "envidoenvidorealfalta"
                    playe == 1? [this.panelEnvidoP2 = true, this.panelEnvidoP1 = false] : [this.panelEnvidoP2 = false, this.panelEnvidoP1 = true]
                }
            }
        },
        acceptEnvido(){
            console.log("acepté el envido");
            let type = this.game.typeEnvido
            this.panelEnvidoP1 = false
            this.panelEnvidoP2 = false
            if(type == "envido"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.game.p1Points += 2
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.game.p2Points += 2
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.game.p1Points += 2
                    }else if(this.game.mano == "P2"){
                        this.game.p2Points += 2
                    }
                }
            }else if(type == "realenvido"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.game.p1Points += 3
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.game.p2Points += 3
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.game.p1Points += 3
                    }else if(this.game.mano == "P2"){
                        this.game.p2Points += 3
                    }
                }
            }else if(type == "faltaenvido"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.game.p1Points += 5
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.game.p2Points += 5
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.game.p1Points += 5
                    }else if(this.game.mano == "P2"){
                        this.game.p2Points += 5
                    }
                }
            }else if(type == "envidoenvido"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.game.p1Points += 4
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.game.p2Points += 4
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.game.p1Points += 4
                    }else if(this.game.mano == "P2"){
                        this.game.p2Points += 4
                    }
                }
            }else if(type == "envidorealenvido"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.game.p1Points += 5
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.game.p2Points += 5
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.game.p1Points += 5
                    }else if(this.game.mano == "P2"){
                        this.game.p2Points += 5
                    }
                }
            }else if(type == "envidofaltaenvido"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.game.p1Points += 6
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.game.p2Points += 6
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.game.p1Points += 6
                    }else if(this.game.mano == "P2"){
                        this.game.p2Points += 6
                    }
                }
            }else if(type == "realenvidofalta"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.game.p1Points += 7
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.game.p2Points += 7
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.game.p1Points += 7
                    }else if(this.game.mano == "P2"){
                        this.game.p2Points += 7
                    }
                }
            }else if(type == "envidoenvidoreal"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.game.p1Points += 7
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.game.p2Points += 7
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.game.p1Points += 7
                    }else if(this.game.mano == "P2"){
                        this.game.p2Points += 7
                    }
                }
            }else if(type == "envidorealfalta"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.game.p1Points += 8
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.game.p2Points += 8
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.game.p1Points += 8
                    }else if(this.game.mano == "P2"){
                        this.game.p2Points += 8
                    }
                }
            }else if(type == "envidoenvidorealfalta"){
                if(this.playerOne.totalEnvido > this.playerTwo.totalEnvido){
                    this.game.p1Points += 9
                }else if(this.playerOne.totalEnvido < this.playerTwo.totalEnvido){
                    this.game.p2Points += 9
                }else if(this.playerOne.totalEnvido == this.playerTwo.totalEnvido){
                    if(this.game.mano == "P1"){
                        this.game.p1Points += 9
                    }else if(this.game.mano == "P2"){
                        this.game.p2Points += 9
                    }
                }
            }
        },
        denyEnvido(){
            this.panelEnvidoP1 = false
            this.panelEnvidoP2 = false
            if(this.game.typeEnvido == "envido"){
                if(this.playerOne.envido == "envido"){
                    this.game.p1Points += 1
                }else if(this.playerTwo.envido == "envido"){
                    this.game.p2Points += 1
                }
            }else if(this.game.typeEnvido == "realenvido"){
                if(this.playerOne.envido == "realenvido"){
                    this.game.p1Points += 1
                }else if(this.playerTwo.envido == "realenvido"){
                    this.game.p2Points += 1
                }
            }else if(this.game.typeEnvido == "faltaenvido"){
                if(this.playerOne.envido == "faltaenvido"){
                    this.game.p1Points += 1
                }else if(this.playerTwo.envido == "faltaenvido"){
                    this.game.p2Points += 1
                }
            }else if(this.game.typeEnvido == "envidoenvido"){
                if(this.playerOne.envido == "envidoenvido"){
                    this.game.p1Points += 2
                }else if(this.playerTwo.envido == "envidoenvido"){
                    this.game.p2Points += 2
                }
            }else if(this.game.typeEnvido == "envidorealenvido"){
                if(this.playerOne.envido == "envidorealenvido"){
                    this.game.p1Points += 2
                }else if(this.playerTwo.envido == "envidorealenvido"){
                    this.game.p2Points += 2
                }
            }else if(this.game.typeEnvido == "envidofaltaenvido"){
                if(this.playerOne.envido == "envidofaltaenvido"){
                    this.game.p1Points += 2
                }else if(this.playerTwo.envido == "envidofaltaenvido"){
                    this.game.p2Points += 2
                }
            }else if(this.game.typeEnvido == "realenvidofalta"){
                if(this.playerOne.envido == "realenvidofalta"){
                    this.game.p1Points += 3
                }else if(this.playerTwo.envido == "realenvidofalta"){
                    this.game.p2Points += 3
                }
            }else if(this.game.typeEnvido == "envidoenvidoreal"){
                if(this.playerOne.envido == "envidoenvidoreal"){
                    this.game.p1Points += 4
                }else if(this.playerTwo.envido == "envidoenvidoreal"){
                    this.game.p2Points += 4
                }
            }else if(this.game.typeEnvido == "envidorealfalta"){
                if(this.playerOne.envido == "envidorealfalta"){
                    this.game.p1Points += 5
                }else if(this.playerTwo.envido == "envidorealfalta"){
                    this.game.p2Points += 5
                }
            }else if(this.game.typeEnvido == "envidoenvidorealfalta"){
                if(this.playerOne.envido == "envidoenvidorealfalta"){
                    this.game.p1Points += 7
                }else if(this.playerTwo.envido == "envidoenvidorealfalta"){
                    this.game.p2Points += 7
                }
            }

        },
        pointsEnvido(player){
            let hand = player.cardHand
            let numberPlayer = player.numberP
            let cardsForSuit = {}
            hand.forEach((card) => {
                const palo = card.suit;
                if (!cardsForSuit[palo]) {
                  cardsForSuit[palo] = [];
                }
                cardsForSuit[palo].push(card);
            });
            let envido = null
            for (let suit in cardsForSuit) {
                if(cardsForSuit[suit].length >=2){
                    envido = cardsForSuit[suit]
                }
            }
            console.log(envido);
            if(envido){
                if(envido.length == 2){
                    let envidoPoints = envido.reduce((total, card) => total + card.valueEnvido, 20);
                    if(numberPlayer == 1){
                        this.playerOne.totalEnvido = envidoPoints
                        console.log(envidoPoints);
                    }else{
                        this.playerTwo.totalEnvido = envidoPoints
                        console.log(envidoPoints);
                    }
                }else if(envido.length == 3){
                    let arrayOrdenado = envido.slice()
                    arrayOrdenado.sort((a, b) => b.valueEnvido - a.valueEnvido)
                    let highValues = arrayOrdenado.slice(0,2)
                    let envidoPoints = highValues.reduce((total, card) => total + card.valueEnvido, 20)
                    if(numberPlayer == 1){
                        this.playerOne.totalEnvido = envidoPoints
                        console.log(envidoPoints);
                    }else{
                        this.playerTwo.totalEnvido = envidoPoints
                        console.log(envidoPoints);
                    }
                }
            }else{
                let arrayOrdenado = hand
                arrayOrdenado.sort((a, b) => b.valueEnvido - a.valueEnvido)
                let highValue = arrayOrdenado.slice(0,1)
                let value = highValue[0].valueEnvido
                if(numberPlayer == 1){
                    this.playerOne.totalEnvido = value
                    console.log(value);
                }else{
                    this.playerTwo.totalEnvido = value
                    console.log(value);
                }
            }
        }
    },
    computed:{
        fieldCheck(){
            if(this.game.typeTruco == "truco"){
                ""
            }else if(this.game.typeTruco == "nada" || this.game.typeTruco == "trucoAccept" || this.game.typeTruco == "reTrucoAccept" || this.game.typeTruco == "vale4Accept"){
                if(this.field.length < 2){
                    ""
                }else{
                    let player = this.field[0][1].numberP
                    let card = this.field[0][0].value
                    let otherPlayer = this.field[1][1].numberP
                    let otherCard = this.field[1][0].value
                    if(card > otherCard){
                        if(player == 1){
                            this.game.p1Round += 1
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                            this.game.checkVictoryField.push("P1")
                        }else{
                            this.game.p2Round += 1
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                            this.game.checkVictoryField.push("P2")
                        }
                    }else if(otherCard > card){
                        if(otherPlayer == 1){
                            this.game.p1Round += 1
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                            this.game.checkVictoryField.push("P1")
                        }else{
                            this.game.p2Round += 1
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                            this.game.checkVictoryField.push("P2")
                        }
                    }else{
                        this.game.checkVictoryField.push("E")
                        if(player == 1){
                            this.game.p1Turn = true
                            this.game.p2Turn = false
                        }else{
                            this.game.p2Turn = true
                            this.game.p1Turn = false
                        }
                    }
                    setTimeout(() => {
                        this.field = []
                    }, 1000);
                }
            }
        },
        gameCheck(){
            if(this.game.checkVictoryField[0] == "E" && this.game.checkVictoryField[1] == "E" && this.game.checkVictoryField[2] == "E"){
                if(this.game.typeTruco == "nada"){
                    this.game.mano == "P1" ? this.game.p1Points += 1 : this.game.p2Points += 1
                    this.clean(500)
                }else if(this.game.typeTruco == "trucoAccept"){
                    this.game.mano == "P1" ? this.game.p1Points += 2 : this.game.p2Points += 2
                    this.clean(500)
                }else if(this.game.typeTruco == "reTrucoAccept"){
                    this.game.mano == "P1" ? this.game.p1Points += 3 : this.game.p2Points += 3
                    this.clean(500)
                }else if(this.game.typeTruco == "vale4Accept"){
                    this.game.mano == "P1" ? this.game.p1Points += 4 : this.game.p2Points += 4
                    this.clean(500)
                }
            }else if(this.game.checkVictoryField[0] == "E"){
                if(this.game.p1Round == 1 || this.game.p2Round == 1){
                    if(this.game.typeTruco == "nada"){
                        this.game.p1Round == 1 ? this.game.p1Points += 1 : this.game.p2Points += 1
                        this.clean(500)
                    }else if(this.game.typeTruco == "trucoAccept"){
                        this.game.p1Round == 1 ? this.game.p1Points += 2 : this.game.p2Points += 2
                        this.clean(500)
                    }else if(this.game.typeTruco == "reTrucoAccept"){
                        this.game.p1Round == 1 ? this.game.p1Points += 3 : this.game.p2Points += 3
                        this.clean(500)
                    }else if(this.game.typeTruco == "vale4Accept"){
                        this.game.p1Round == 1 ? this.game.p1Points += 4 : this.game.p2Points += 4
                        this.clean(500)
                    }
                }
            }else if(this.game.checkVictoryField[2] == "E" || this.game.checkVictoryField[1] == "E"){
                if(this.game.typeTruco == "nada"){
                    this.game.checkVictoryField[0] == "P1" ? this.game.p1Points += 1 : this.game.p2Points += 1
                    this.clean(500)
                }else if(this.game.typeTruco == "trucoAccept"){
                    this.game.checkVictoryField[0] == "P1" ? this.game.p1Points += 2 : this.game.p2Points += 2
                    this.clean(500)
                }else if(this.game.typeTruco == "reTrucoAccept"){
                    this.game.checkVictoryField[0] == "P1" ? this.game.p1Points += 3 : this.game.p2Points += 3
                    this.clean(500)
                }else if(this.game.typeTruco == "vale4Accept"){
                    this.game.checkVictoryField[0] == "P1" ? this.game.p1Points += 4 : this.game.p2Points += 4
                    this.clean(500)
                }
            }else if(this.game.p1Round == 2 || this.game.p2Round == 2){
                if(this.game.typeTruco == "nada"){
                    this.game.p1Round == 2 ? this.game.p1Points += 1 : this.game.p2Points += 1
                    this.clean(500)
                }else if(this.game.typeTruco == "trucoAccept"){
                    this.game.p1Round == 2 ? this.game.p1Points += 2 : this.game.p2Points += 2
                    this.clean(500)
                }else if(this.game.typeTruco == "reTrucoAccept"){
                    this.game.p1Round == 2 ? this.game.p1Points += 3 : this.game.p2Points += 3
                    this.clean(500)
                }else if(this.game.typeTruco == "vale4Accept"){
                    this.game.p1Round == 2 ? this.game.p1Points += 4 : this.game.p2Points += 4
                    this.clean(500)
                }
            }
        },
        playTruco(){
            if(this.game.typeTruco == "truco" && this.field.length == 2){
                let player = this.field[0][1].truco
                let card = this.field[0][0].value
                let numberPlayer = this.field[0][1].numberP
                let otherPlayer = this.field[1][1].truco
                let otherCard = this.field[1][0].value
                let otherNumberPlayer = this.field[1][1].numberP
                setTimeout(() => {
                    this.field = []
                    this.game.typeTruco = "trucoAccept"
                }, 2000);
                if(player == true){
                    if(numberPlayer == 1){
                        if(card > otherCard){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else if(otherCard > card){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p1Turn = true
                            this.game.p2Turn = false
                            return console.log("empate truco con mano P1");
                        }
                    }else if(numberPlayer == 2){
                        if(card > otherCard){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else if(otherCard > card){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p2Turn = true
                            this.game.p1Turn = false
                            return console.log("empate truco con mano P2");
                        }
                    }
                }else if(otherPlayer == true){
                    if(otherNumberPlayer == 1){
                        if(otherCard > card){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else if(otherCard < card){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                            return console.log("empate con mano P2 truco cantado en segunda");
                        }
                    }else if(otherNumberPlayer == 2){
                        if(otherCard > card){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else if(otherCard < card){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                            return console.log("empate con mano P1 truco cantado en segunda");
                        }  
                    }
                }
            }else if(this.game.typeTruco == "reTruco" && this.field.length == 2){
                    let player = this.field[0][1].reTruco
                    let card = this.field[0][0].value
                    let numberPlayer = this.field[0][1].numberP
                    let otherPlayer = this.field[1][1].reTruco
                    let otherCard = this.field[1][0].value
                    let otherNumberPlayer = this.field[1][1].numberP
                    setTimeout(() => {
                        this.field = []
                        this.game.typeTruco = "reTrucoAccept"
                    }, 2000);
                    if(player == true){
                        if(numberPlayer == 1){
                            if(card > otherCard){
                                this.game.p1Round += 1
                                this.game.checkVictoryField.push("P1")
                                this.game.p1Turn = false
                                this.game.p2Turn = true
                            }else if(otherCard > card){
                                this.game.p2Round += 1
                                this.game.checkVictoryField.push("P2")
                                this.game.p2Turn = false
                                this.game.p1Turn = true
                            }else{
                                this.game.checkVictoryField.push("E")
                                this.game.p1Turn = true
                                this.game.p2Turn = false
                                return console.log("empate re truco con mano P1");
                            }
                        }else if(numberPlayer == 2){
                            if(card > otherCard){
                                this.game.p2Round += 1
                                this.game.checkVictoryField.push("P2")
                                this.game.p2Turn = false
                                this.game.p1Turn = true
                            }else if(otherCard > card){
                                this.game.p1Round += 1
                                this.game.checkVictoryField.push("P1")
                                this.game.p1Turn = false
                                this.game.p2Turn = true
                            }else{
                                this.game.checkVictoryField.push("E")
                                this.game.p2Turn = true
                                this.game.p1Turn = false
                                return console.log("empate re truco con mano P2");
                            }
                        }
                    }else if(otherPlayer == true){
                        if(otherNumberPlayer == 1){
                            if(otherCard > card){
                                this.game.p1Round += 1
                                this.game.checkVictoryField.push("P1")
                                this.game.p1Turn = false
                                this.game.p2Turn = true
                            }else if(otherCard < card){
                                this.game.p2Round += 1
                                this.game.checkVictoryField.push("P2")
                                this.game.p2Turn = false
                                this.game.p1Turn = true
                            }else{
                                this.game.checkVictoryField.push("E")
                                this.game.p1Turn = false
                                this.game.p2Turn = true
                                return console.log("empate re truco con mano P2 cantado en segunda");
                            }
                        }else if(otherNumberPlayer == 2){
                            if(otherCard > card){
                                this.game.p2Round += 1
                                this.game.checkVictoryField.push("P2")
                                this.game.p2Turn = false
                                this.game.p1Turn = true
                            }else if(otherCard < card){
                                this.game.p1Round += 1
                                this.game.checkVictoryField.push("P1")
                                this.game.p1Turn = false
                                this.game.p2Turn = true
                            }else{
                                this.game.checkVictoryField.push("E")
                                this.game.p2Turn = false
                                this.game.p1Turn = true
                                return console.log("empate re truco con mano P1 cantado en segunda");
                            }  
                        }
                    }
            }else if(this.game.typeTruco == "vale4" && this.field.length == 2){
                let player = this.field[0][1].vale4
                let card = this.field[0][0].value
                let numberPlayer = this.field[0][1].numberP
                let otherPlayer = this.field[1][1].vale4
                let otherCard = this.field[1][0].value
                let otherNumberPlayer = this.field[1][1].numberP
                setTimeout(() => {
                    this.field = []
                    this.game.typeTruco = "vale4Accept"
                }, 2000);
                if(player == true){
                    if(numberPlayer == 1){
                        if(card > otherCard){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else if(card < otherCard){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p1Turn = true
                            this.game.p2Turn = false
                            return console.log("vale 4 mano P1");
                        }
                    }else if(numberPlayer == 2){
                        if(card > otherCard){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else if(card < otherCard){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p2Turn = true
                            this.game.p1Turn = false
                            return console.log("vale 4 mano P2");
                        }
                    }
                }else if(otherPlayer == true){
                    if(otherNumberPlayer == 1){
                        if(otherCard > card){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else if(otherCard < card){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                            return console.log("vale 4 mano P2 segunda mano");
                        }
                    }else if(otherNumberPlayer == 2){
                        if(otherCard > card){
                            this.game.p2Round += 1
                            this.game.checkVictoryField.push("P2")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }else if(otherCard < card){
                            this.game.p1Round += 1
                            this.game.checkVictoryField.push("P1")
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else{
                            this.game.checkVictoryField.push("E")
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                            return console.log("vale 4 mano P1 segunda mano");
                        }  
                    }
                }
            }
        },
        checkPointsEnvido(){
            if(this.game.gameStart == true){
                setTimeout(() => {
                    if(this.playerOne.cardHand.length == 3 && this.playerTwo.cardHand.length == 3){
                        this.pointsEnvido(this.playerOne)
                        this.pointsEnvido(this.playerTwo)
                    }
                }, 150);
            }
        }
    }
    
})
app.mount("#app")

