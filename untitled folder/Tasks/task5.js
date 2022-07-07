//SortToMap

const Sort = function(sentence){
    let IndexArray = [];
    let temp = sentence.split(' ');
    console.log(temp);
    let myMap = new Map();
    for(let i = 0 ; i < temp.length -1;i++ ){
        StoringData(temp[i]);
    }

    function LetterSearch(letter){
        for(let i = 0 ; i < IndexArray.length-1 ; i ++){
            if (letter == IndexArray[i]){
                return IndexArray[i];
            }
        }
    }

    function StoringData(word){
        let letter = word[0];
        let index;
        let data = word;
        if(letter == IndexArray.find(LetterSearch)){
            myMap.add
            
        } else { 
            IndexArray.push(letter);
            index = letter;
            
        }

        myMap.set(index, data);
        console.log("Index :" + index + " = " + data);
    }
    console.log(IndexArray);
}

let input = 'We are in TDL School We are leaning Javascript What Was Where';

Sort(input);