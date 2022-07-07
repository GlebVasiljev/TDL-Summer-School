const arr1 = [1,2,4,5,6];
const arr2 = [3,4];
const tuckIn = function (array1 , array2){
    let temp = array1.slice(0, array1.length/2);
    let temp2 = array1.slice(array1.length/2, array1.length);
    let result = [...temp, ...array2, ...temp2];
    console.log(result);
}

tuckIn(arr1,arr2);