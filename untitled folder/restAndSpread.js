//Rest and Spread operator
//...
//Spreadw
//Used to expand elemets from itherable (ex. Array)
//into olaces where multiple elements can be fit

const one = [1,2,3];
const two = [4,5,6];

const merged1 = one.concat(two);
const merged2 = [...one , 4 , ...two];

console.log(merged1);
console.log(merged2);

//Rest
//Gives you op gather any amount of arguments in functions
//and put them into array

const tmp = (x,y, ...rest) => {
    console.log(x);
    console.log(y);
    console.log(rest);
}