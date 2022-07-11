module.exports = {

    maxTotalFunc: function (input) {
    let inputArray = input.slice(',');
    let biggestSum = 0;
    //sorting
    input.sort(function(a, b){return b-a});
    console.log(input);
    
    //summing
    for(let i = 0 ; i < input.length - 5; i++){
        let temp = Number(input[i]);
        biggestSum = biggestSum +temp;
        console.log(biggestSum);
    }
        return biggestSum;
    }
}