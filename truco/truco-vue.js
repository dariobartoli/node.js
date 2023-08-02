const cardsTruco = [
    {
        number: 1,
        suit: "sword",
        value: 14,
        valueEnvido: 1
    },
    {
        number: 2,
        suit: "sword",
        value: 9,
        valueEnvido: 2
    },
    {
        number: 3,
        suit: "sword",
        value: 10,
        valueEnvido: 3
    },
    {
        number: 4,
        suit: "sword",
        value: 1,
        valueEnvido: 4
    },
    {
        number: 5,
        suit: "sword",
        value: 2,
        valueEnvido: 5
    },
    {
        number: 6,
        suit: "sword",
        value: 3,
        valueEnvido: 6
    },
    {
        number: 7,
        suit: "sword",
        value: 12,
        valueEnvido: 7
    },
    {
        number: 10,
        suit: "sword",
        value: 5,
        valueEnvido: 0
    },
    {
        number: 11,
        suit: "sword",
        value: 6,
        valueEnvido: 1
    },
    {
        number: 12,
        suit: "sword",
        value: 7,
        valueEnvido: 2
    },
    {
        number: 1,
        suit: "cup",
        value: 8,
        valueEnvido: 1
    },
    {
        number: 2,
        suit: "cup",
        value: 9,
        valueEnvido: 2
    },
    {
        number: 3,
        suit: "cup",
        value: 10,
        valueEnvido: 3
    },
    {
        number: 4,
        suit: "cup",
        value: 1,
        valueEnvido: 4
    },
    {
        number: 5,
        suit: "cup",
        value: 2,
        valueEnvido: 5
    },
    {
        number: 6,
        suit: "cup",
        value: 3,
        valueEnvido: 6
    },
    {
        number: 7,
        suit: "cup",
        value: 4,
        valueEnvido: 7
    },
    {
        number: 10,
        suit: "cup",
        value: 5,
        valueEnvido: 0
    },
    {
        number: 11,
        suit: "cup",
        value: 6,
        valueEnvido: 1
    },
    {
        number: 12,
        suit: "cup",
        value: 7,
        valueEnvido: 2
    },
    {
        number: 1,
        suit: "gold",
        value: 8,
        valueEnvido: 1
    },
    {
        number: 2,
        suit: "gold",
        value: 9,
        valueEnvido: 2
    },
    {
        number: 3,
        suit: "gold",
        value: 10,
        valueEnvido: 3
    },
    {
        number: 4,
        suit: "gold",
        value: 1,
        valueEnvido: 4
    },
    {
        number: 5,
        suit: "gold",
        value: 2,
        valueEnvido: 5
    },
    {
        number: 6,
        suit: "gold",
        value: 3,
        valueEnvido: 6
    },
    {
        number: 7,
        suit: "gold",
        value: 11,
        valueEnvido: 7
    },
    {
        number: 10,
        suit: "gold",
        value: 5,
        valueEnvido: 0
    },
    {
        number: 11,
        suit: "gold",
        value: 6,
        valueEnvido: 1
    },
    {
        number: 12,
        suit: "gold",
        value: 7,
        valueEnvido: 2
    },
    {
        number: 1,
        suit: "stick",
        value: 13,
        valueEnvido: 1
    },
    {
        number: 2,
        suit: "stick",
        value: 9,
        valueEnvido: 2
    },
    {
        number: 3,
        suit: "stick",
        value: 10,
        valueEnvido: 3
    },
    {
        number: 4,
        suit: "stick",
        value: 1,
        valueEnvido: 4
    },
    {
        number: 5,
        suit: "stick",
        value: 2,
        valueEnvido: 5
    },
    {
        number: 6,
        suit: "stick",
        value: 3,
        valueEnvido: 6
    },
    {
        number: 7,
        suit: "stick",
        value: 4,
        valueEnvido: 7
    },
    {
        number: 10,
        suit: "stick",
        value: 5,
        valueEnvido: 0
    },
    {
        number: 11,
        suit: "stick",
        value: 6,
        valueEnvido: 1
    },
    {
        number: 12,
        suit: "stick",
        value: 7,
        valueEnvido: 2
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
            trucar1: false,
            trucar2: false,
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
            truco: false,
            reTruco: false,
            vale4: false,
        }
        this.playerTwo = {
            numberP: 2,
            cardHand: [],
            truco: false,
            reTruco: false,
            vale4: false,
        }
        this.game = {
            p1Round: 0,
            p2Round: 0,
            p1Points: 0,
            p2Points: 0,
            p1Turn: true,
            p2Turn: true,
            typeTruco: "nada",
            mano: "",
            round: 0
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
        sayTruco(player){
            let playe = player.numberP
            playe == 1? this.trucar1 = true : this.trucar2 = true
            playe == 1? this.playerOne.truco = true : this.playerTwo.truco = true
            playe == 1? this.viewOptionP1 = false : this.viewOptionP2 = false
            playe == 1? this.game.p1Turn = true : this.game.p2Turn = true
        },
        acceptTruco(){
            this.game.typeTruco = "truco";
            this.trucar1 = false
            this.trucar2 = false
            if(this.playerOne.truco == true){
                console.log("entre al truco del primer jugador");
                this.field.push([this.cardP1, this.playerOne])
                let index = this.playerOne.cardHand.indexOf(this.cardP1)
                this.playerOne.cardHand.splice(index, 1);
                this.playerOne.cardPlay = this.cardP1
                this.game.p2Turn = false
            }else if(this.playerTwo.truco == true){
                console.log("entre al truco del segundo jugador");
                this.field.push([this.cardP2, this.playerTwo])
                let index = this.playerTwo.cardHand.indexOf(this.cardP1)
                this.playerTwo.cardHand.splice(index, 1);
                this.playerTwo.cardPlay = this.cardP2
                this.game.p1Turn = false
            }
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
                this.game.p1Round = 0
                this.game.p2Round = 0
                this.game.p1Turn = true
                this.game.p2Turn = true
                this.game.typeTruco = "nada"
                this.trucar1 = false
                this.trucar2 = false
            }, number);
        },
        sayReTruco(player){
            let playe = player.numberP
            this.playerOne.truco = false
            this.playerTwo.truco = false
            playe == 1? this.playerOne.reTruco = true : this.playerTwo.reTruco = true
            playe == 1? this.viewOptionP1 = false : this.viewOptionP2 = false
            playe == 1? this.game.p1Turn = true : this.game.p2Turn = true
            playe == 1? this.trucar1 = true : this.trucar2 = true
        },
        acceptReTruco(){
            this.game.typeTruco = "reTruco";
            this.trucar1 = false
            this.trucar2 = false
            if(this.playerOne.reTruco == true){
                console.log("entre al reTruco del primer jugador");
                this.field.push([this.cardP1, this.playerOne])
                let index = this.playerOne.cardHand.indexOf(this.cardP1)
                this.playerOne.cardHand.splice(index, 1);
                this.playerOne.cardPlay = this.cardP1
                this.game.p2Turn = false
            }else if(this.playerTwo.reTruco == true){
                console.log("entre al reTruco del segundo jugador");
                this.field.push([this.cardP2, this.playerTwo])
                let index = this.playerTwo.cardHand.indexOf(this.cardP1)
                this.playerTwo.cardHand.splice(index, 1);
                this.playerTwo.cardPlay = this.cardP2
                this.game.p1Turn = false
            }
        },
        denyReTruco(){
            if(this.playerOne.reTruco == true){
                this.game.p1Points += 2
            }else if(this.playerTwo.reTruco == true){
                this.game.p2Points += 2
            }
            this.clean(500)
        },
        sayVale4(player){
            let playe = player.numberP
            this.playerOne.reTruco = false
            this.playerTwo.reTruco = false
            playe == 1? this.playerOne.vale4 = true : this.playerTwo.vale4 = true
            playe == 1? this.viewOptionP1 = false : this.viewOptionP2 = false
            playe == 1? this.game.p1Turn = true : this.game.p2Turn = true
            playe == 1? this.trucar1 = true : this.trucar2 = true
            console.log(`jugador ${playe} dijo vale 4`);
        },
        acceptVale4(){
            this.game.typeTruco = "vale4";
            this.trucar1 = false
            this.trucar2 = false
            console.log("probando");
            if(this.playerOne.vale4 == true){
                console.log("entre al vale4 del primer jugador");
                this.field.push([this.cardP1, this.playerOne])
                let index = this.playerOne.cardHand.indexOf(this.cardP1)
                this.playerOne.cardHand.splice(index, 1);
                this.playerOne.cardPlay = this.cardP1
                this.game.p2Turn = false
            }else if(this.playerTwo.vale4 == true){
                console.log("entre al vale4o del segundo jugador");
                this.field.push([this.cardP2, this.playerTwo])
                let index = this.playerTwo.cardHand.indexOf(this.cardP1)
                this.playerTwo.cardHand.splice(index, 1);
                this.playerTwo.cardPlay = this.cardP2
                this.game.p1Turn = false
            }
        },
        denyVale4(){
            if(this.playerOne.vale4 == true){
                console.log("entre al p1");
                this.game.p1Points += 3
            }else if(this.playerTwo.vale4 == true){
                console.log("entré al p2");
                this.game.p2Points += 3
            }
            this.clean(500)
        },
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
                        }else{
                            this.game.p2Round += 1
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }
                    }else if(otherCard > card){
                        if(otherPlayer == 1){
                            this.game.p1Round += 1
                            this.game.p1Turn = false
                            this.game.p2Turn = true
                        }else{
                            this.game.p2Round += 1
                            this.game.p2Turn = false
                            this.game.p1Turn = true
                        }
                    }else{
                        this.game.p1Round += 1
                        this.game.p2Round += 1
                    }
                    setTimeout(() => {
                        this.field = []
                    }, 2000);
                }
            }
        },
        gameCheck(){
            if(this.game.p1Round == 2 || this.game.p2Round == 2){
                if(this.game.typeTruco == "nada"){
                    this.game.p1Round == 2 ? this.game.p1Points += 1 : this.game.p2Points += 1
                    this.clean(2000)
                }else if(this.game.typeTruco == "trucoAccept"){
                    this.game.p1Round == 2 ? this.game.p1Points += 2 : this.game.p2Points += 2
                    this.clean(2000)
                }else if(this.game.typeTruco == "reTrucoAccept"){
                    this.game.p1Round == 2 ? this.game.p1Points += 3 : this.game.p2Points += 3
                    this.clean(2000)
                }else if(this.game.typeTruco == "vale4Accept"){
                    this.game.p1Round == 2 ? this.game.p1Points += 4 : this.game.p2Points += 4
                    this.clean(2000)
                }
            }
        },
        playTruco(){
            if(this.game.typeTruco == "truco" && this.field.length == 2){
                let player = this.field[0][1].truco
                let card = this.field[0][0].value
                let otherPlayer = this.field[1][1].truco
                let otherCard = this.field[1][0].value
                setTimeout(() => {
                    this.field = []
                    this.game.typeTruco = "trucoAccept"
                }, 2000);
                if(player == true){
                    if(card > otherCard){
                        console.log("entre 1");
                        this.game.p1Round += 1
                        this.game.p1Turn = false
                        this.game.p2Turn = true
                    }else{
                        console.log("entre 2");
                        this.game.p2Round += 1
                        this.game.p2Turn = false
                        this.game.p1Turn = true
                    }
                }else if(otherPlayer == true){
                    if(otherCard > card){
                        console.log("entre 3");
                        this.game.p2Round += 1
                        this.game.p2Turn = false
                        this.game.p1Turn = true
                    }else{
                        console.log("entre 4");
                        this.game.p1Round += 1
                        this.game.p1Turn = false
                        this.game.p2Turn = true
                    }
                }
            }else if(this.game.typeTruco == "reTruco" && this.field.length == 2){
                let player = this.field[0][1].reTruco
                let card = this.field[0][0].value
                let otherPlayer = this.field[1][1].reTruco
                let otherCard = this.field[1][0].value
                setTimeout(() => {
                    this.field = []
                    this.game.typeTruco = "reTrucoAccept"
                }, 2000);
                if(player == true){
                    if(card > otherCard){
                        this.game.p1Round += 1
                        this.game.p1Turn = false
                        this.game.p2Turn = true
                    }else{
                        this.game.p2Round += 1
                        this.game.p2Turn = false
                        this.game.p1Turn = true
                    }
                }else if(otherPlayer == true){
                    if(card < otherCard){
                        this.game.p2Round += 1
                        this.game.p2Turn = false
                        this.game.p1Turn = true
                    }else{
                        this.game.p1Round += 1
                        this.game.p1Turn = false
                        this.game.p2Turn = true
                    }
                }
            }else if(this.game.typeTruco == "vale4" && this.field.length == 2){
                let player = this.field[0][1].vale4
                let card = this.field[0][0].value
                let otherPlayer = this.field[1][1].vale4
                let otherCard = this.field[1][0].value
                setTimeout(() => {
                    this.field = []
                    this.game.typeTruco = "vale4Accept"
                }, 2000);
                if(player == true){
                    if(card > otherCard){
                        this.game.p1Round += 1
                        this.game.p1Turn = false
                        this.game.p2Turn = true
                    }else{
                        this.game.p2Round += 1
                        this.game.p2Turn = false
                        this.game.p1Turn = true
                    }
                }else if(otherPlayer == true){
                    if(card > otherCard){
                        this.game.p2Round += 1
                        this.game.p2Turn = false
                        this.game.p1Turn = true
                    }else{
                        this.game.p1Round += 1
                        this.game.p1Turn = false
                        this.game.p2Turn = true
                    }
                }
            }
        }
    }
})
app.mount("#app")

