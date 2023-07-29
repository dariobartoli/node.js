const {cards} = require('./cards')

const cardsData = cards

function Player(name, numberPlayer){
    this.name = name;
    this.numberPlayer = numberPlayer;
    this.cardHand = [];
    this.round = 0;
    this.points= 0;
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
        return true
    }else if(p2Round == 2 && p2Round > p1Round){
        playerOne.round = 0
        playerTwo.round = 0
        playerTwo.points += 1
        playerOne.cardHand = []
        playerTwo.cardHand = []
        return true
    }else{
        return false
    }
}

const truco = (response) =>{
    if(!response){
        return "se ha rechazado el truco"
    }else{
        return playTruco()
    }
}
const playTruco = () => {
}

deck.mix(deck.deck)
deck.share(deck.deck)

/* selectCard(playerOne.cardHand[1], playerOne)
selectCard(playerTwo.cardHand[2], playerTwo)
console.log(winRound(field));

selectCard(playerTwo.cardHand[0], playerTwo)
selectCard(playerOne.cardHand[0], playerOne)
console.log(winRound(field));

console.log(playerOne);
console.log(playerTwo); */

let round = 0
do {
    selectCard(playerOne.cardHand[0], playerOne)
    selectCard(playerTwo.cardHand[0], playerTwo)
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
deck

deck.mix(cards)
console.log(deck.deck.length);



