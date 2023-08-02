const {cards} = require('./cards')

const cardsData = cards

function Player(name, numberPlayer){
    this.name = name;
    this.numberPlayer = numberPlayer;
    this.cardHand = [];
    this.round = 0;
    this.points= 0;
    this.cardPlay = [];
}
function NewDeck(deck){
    this.deck = deck
}

const playerOne = new Player("Ricardo", 1)
const playerTwo = new Player("Maxi", 2)
const deck = new NewDeck(cardsData)


NewDeck.prototype.mix = function(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array    
}
NewDeck.prototype.share = function(array){
    for (let i = 1; i < 7; i++) {
        if(i%2 != 0){
            let card = array.pop();
            playerOne.cardHand.push(card)
            deck.deck.unshift(card)
        }else{
            let card = array.pop();
            playerTwo.cardHand.push(card)
            deck.deck.unshift(card)
        }
    }
}

let field = []

const selectCard = (card, player) => {
    field.push([card, player])
    let index = player.cardHand.indexOf(card)
    player.cardHand.splice(index, 1);
    player.cardPlay = card
}
const winRound = (array) => {
    if(array[0][0].value > array[1][0].value){
        if(array[0][1].numberPlayer == 1){
            field = []
            playerOne.round += 1
            return `ganó la ronda: ${playerOne.name}`
        }else{
            field = []
            playerTwo.round += 1
            return `ganó la ronda: ${playerTwo.name}`
        }
    }else if(array[1][0].value > array[0][0].value){
        if(array[1][1].numberPlayer == 1){
            field = []
            playerOne.round += 1
            return `ganó la ronda: ${playerOne.name}`
        }else{
            field = []
            playerTwo.round += 1
            return `ganó la ronda: ${playerTwo.name}`
        }
    }else{
        return "empate"
    }
}

const fieldCheck = (player1, player2) => {
    let p1Round = player1.round;
    let p2Round = player2.round;
    console.log(p1Round);
    console.log(p2Round);
    if(p1Round == 2 && p1Round >p2Round){
        playerOne.round = 0
        playerTwo.round = 0
        playerOne.points += 1
        playerOne.cardHand = []
        playerTwo.cardHand = []
        playerOne.cardPlay = []
        playerTwo.cardPlay = []
        return true
    }else if(p2Round == 2 && p2Round > p1Round){
        playerOne.round = 0
        playerTwo.round = 0
        playerTwo.points += 1
        playerOne.cardHand = []
        playerTwo.cardHand = []
        playerOne.cardPlay = []
        playerTwo.cardPlay = []
        return true
    }else{
        return false
    }
}

const truco = () => new Promise((resolve, reject) => {
    let responsePlayer = Math.random() < 0.5
    if(responsePlayer){
        resolve(true)
    }else{
        resolve(false)
    }
})

let game = {
    truco: false
}

const playTruco = async(player)=>{
    if(!game.truco){
        console.log("SE CANTÓ TRUCO");
        game.truco = true
        let trucoAceptado = await truco();
        let playerTruco = player.numberPlayer
        if(trucoAceptado){
            console.log("SE ACEPTÓ EL TRUCO");
            if(playerOne.cardPlay.value > playerTwo.cardPlay.value){
                console.log(`${playerOne.name} ganó el truco`);
                playerOne.points += 2
            }else if(playerTwo.cardPlay.value > playerOne.cardPlay.value){
                console.log(`${playerTwo.name} ganó el truco`);
                playerTwo.points += 2
            }else{
                ""
            }
        }else{
            console.log("SE RECHAZÓ EL TRUCO");
            if(playerTruco == 1){
                playerOne.points += 1
                winRound(field)
            }else{
                playerTwo.points += 1
                winRound(field)
            }
        }    
    }else{
        console.log("No es posible cantar el truco");
    }
}


/* let round = 0
do {
    selectCard(playerOne.cardHand[0], playerOne)
    selectCard(playerTwo.cardHand[0], playerTwo)
    playTruco(playerOne)
    setTimeout(() => {
        console.log(playerOne);
        console.log(playerTwo);
    }, 1000);
    winRound(field);
    let resultado = fieldCheck(playerOne, playerTwo)
    if(resultado){
        break
    }
    round += 1
    
} while (round < 3);

console.log(playerOne);
console.log(playerTwo);

console.log(deck.deck.length);
deck.mix(deck.deck)
console.log(deck.deck.length); */

//JUEGO
deck.mix(deck.deck)
deck.share(deck.deck)

console.log(playerOne);

selectCard(playerOne.cardHand[0], playerOne)
selectCard(playerTwo.cardHand[0], playerTwo)
playTruco(playerOne)
setTimeout(() => {
    console.log(playerOne);
    console.log(playerTwo);
    selectCard(playerOne.cardHand[0], playerOne)
    selectCard(playerTwo.cardHand[0], playerTwo)
    playTruco(playerOne)
    setTimeout(() => {
        console.log(playerOne);
        console.log(playerTwo);
        selectCard(playerOne.cardHand[0], playerOne)
        selectCard(playerTwo.cardHand[0], playerTwo)
        playTruco(playerOne)
        setTimeout(() => {
            console.log(playerOne);
            console.log(playerTwo);
        }, 1000);
    }, 1000);
}, 1000);





