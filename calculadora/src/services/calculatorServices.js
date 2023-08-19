const operator = (num1, num2, type) => {
    if(type == "sum"){
        console.log("El resultado de la suma es: " + (num1 + num2).toFixed(2));
    }else if(type == "res"){
        console.log("El resultado de la resta es: " + (num1 - num2).toFixed(2));
    }else if(type == "mul"){
        console.log("El resultado de la multiplicación es: " + (num1 * num2).toFixed(2));
    }else if(type == "div"){
        console.log("El resultado de la división es: " + (num1 / num2).toFixed(2));
    }
}

module.exports = {operator}