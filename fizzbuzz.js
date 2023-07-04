if(!process.argv[2]){
    console.log("No enviaste ningún texto")
    process.exit(1)
}

const number = parseInt(process.argv[2])

if(number <= 0){
    console.log(`El programa solo funciona con números enteros positivos`)
    process.exit(1)
}



for (let i = 1; i < number+1; i++) {
    if(i%3 == 0 && i%5== 0){
        console.log("fizzbuzz");
    }else if(i%5== 0){
        console.log("buzz");
    }else if(i%3 == 0){
        console.log("fizz");
    }
    else{
        console.log(i);
    }
}
