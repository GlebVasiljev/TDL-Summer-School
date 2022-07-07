//Swap

const swap = function(num1, num2){
   let temp1 =[];
   let resul1;
   temp1[1] = Math.floor(num1/10);
   temp1[0] = Number(num1 % 10);
   if(temp1[0] > Math.floor(num1/10)){
        console.log(true)
   }else {
    console.log(false)
   }

   let temp2=[];
   let resul2;
   temp2[1] = Math.floor(num2/10);
   temp2[0] = Number(num2 % 10);
   if(temp2[0] > Math.floor(num2/10)){
        console.log(true)
   }else {
    console.log(false)
   }
}

swap(14,53);