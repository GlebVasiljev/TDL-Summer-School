/*let age = [4];
for(let i = 0 ; i < 5 ; i++){
    age[i] = Math.floor(Math.random() * 100) + 1;
    console.log("Age: " + age);
}
*/

//break && continue

let num = [50,25,30,0,100,20,35,45,55,11];
for(let i = 0 ; i < num.length ; i ++){
    

    if(num[i] == 0){
        continue;
    }
    console.log(num[i]);
    if(num[i] === 100){
        console.log("Bingo!!");
        break;
    }

}