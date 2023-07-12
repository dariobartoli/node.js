let player1 = {
    points: [0],
    games: [],
    sets: []
}
let player2 = {
    points: [0],
    games: [],
    sets: []
}


const gameWin = () =>{
    let result = true
    do {
        let number = Math.floor(Math.random() * 2)
        if(number == 0 && player1.points.length <= 3){
            player1.points.push(15)
            player1.points[2]? player1.points[2] = 30 : ""
            player1.points[3]? player1.points[3] = 40 : ""
            console.log(`puntos player 1 : ${player1.points}`);
            console.log(`puntos player 2 : ${player2.points}`);
            console.log(`------------------------------------`);
        }else if(number == 1 && player2.points.length <= 3){
            player2.points.push(15)
            player2.points[2]? player2.points[2] = 30 : ""
            player2.points[3]? player2.points[3] = 40 : ""
            console.log(`puntos player 1 : ${player1.points}`);
            console.log(`puntos player 2 : ${player2.points}`);
            console.log(`------------------------------------`);
        }else if(number == 0 && player1.points.length == 4 && player2.points.length <=3){
            player1.games.push("win")
            player1.points = [0]
            player2.points = [0]
            console.log("game ganado por el jugador 1");
            break
        }else if(number == 1 && player2.points.length == 4 && player1.points.length <=3){
            player2.games.push("win")
            player1.points = [0]
            player2.points = [0]
            console.log("game ganado por el jugador 2");
            break
        }else if(number == 0 && player1.points.length == 4 && player2.points.length == 4){
            player1.points.push("ventaja")
            console.log(`puntos player 1 : ${player1.points}`);
            console.log(`puntos player 2 : ${player2.points}`);
            console.log(`------------------------------------`);
        }else if(number == 1 && player1.points.length == 4 && player2.points.length == 4){
            player2.points.push("ventaja")
            console.log(`puntos player 1 : ${player1.points}`);
            console.log(`puntos player 2 : ${player2.points}`);
            console.log(`------------------------------------`);
        }else if(number == 1 && player1.points.length == 5 && player2.points.length == 4){
            player1.points.pop()
            player2.points.push("ventaja")
            console.log(`puntos player 1 : ${player1.points}`);
            console.log(`puntos player 2 : ${player2.points}`);
            console.log(`------------------------------------`);
        }else if(number == 0 && player1.points.length == 4 && player2.points.length == 5){
            player2.points.pop()
            player1.points.push("ventaja")
            console.log(`puntos player 1 : ${player1.points}`);
            console.log(`puntos player 2 : ${player2.points}`);
            console.log(`------------------------------------`);
        }else if(number == 0 && player1.points.length == 5 && player2.points.length == 4){
            player1.games.push("win")
            player1.points = [0]
            player2.points = [0]
            console.log("game ganado por el jugador 1");
            break
        }else if(number == 1 && player2.points.length == 5 && player1.points.length == 4){
            player2.games.push("win")
            player1.points = [0]
            player2.points = [0]
            console.log("game ganado por el jugador 2");
            break
        }
    }while(result == true)
}


gameWin()
gameWin()
gameWin()
gameWin()
gameWin()
gameWin()
gameWin()


console.log(player1);
console.log(player2);


