const checkTitle = function (title) {
    let temp;
    temp = title.split(' ');
    console.log(temp);
    temp.forEach(checkUpperCase);
    function checkUpperCase(tmp) {
        let letter = tmp[0];
        if (letter != letter.toUpperCase()) {
            result = false;
        }
        result = true;
    }
    /* if(temp.includes()){
        result = true;
    }else {
        result = false;
    } */
    console.log(result);
}

let input = 'I Like Pizza';
let input2 = 'I dont Like Pizza';
let result;

checkTitle(input);
checkTitle(input2);