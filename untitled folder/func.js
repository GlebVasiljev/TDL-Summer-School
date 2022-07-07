function greet(){
    let name;
    console.log("Hello, "+ name );
}

greet();

//function exprression
const speak = function(){
    console.log("good day!");
}

speak();

// arrow func
const calcArea = () => {
    let radius;
    return 3.14 * radius**2;
}
//shorter arrow function
const shortCalcArea = radius => 3.14 * radius**2;


const speak2 = function(name = 'Mark', time = 'morning'){
    return `Good  ${name},${time},`
}

let message = speak2('Gleb', '10PM');
let message2 = speak2();
console.log(message);
console.log(message2);