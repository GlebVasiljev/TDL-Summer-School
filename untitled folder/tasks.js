// Task 1
let email = "gleb@gmail.com";
let char = email.indexOf('@');
let result = email.slice(0,char);

console.log(result);

//Task 2
/*
let arr = [];

for(let i = 0 ; i <= 10 ; i++){
    if( i % 2 == 0){
        arr.push(i);
    }
}

for(let b = arr.length-1; b > 0 ; b--){
    console.log(arr[b]);
}
*/
//Task 3

let num = [];
let i = 0;
while( i < 10){
    i+=2;
    num.push(i);
}

i = num.length-1;

while ( i > -1){
    console.log("array num: " + num[i]);
    i--;
}