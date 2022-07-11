//SortToMap

const Sort = function(sentence){
    let IndexArray = [];
    let temp = sentence.split(' ');
    console.log(temp);
    let myMap = new Map();
    for(let i = 0 ; i < temp.length -1;i++ ){
        StoringData(temp[i]);
    }

    
    function StoringData(word){
        let letter = String(word[0].toUpperCase());
        let index;
        let data = word;
        //serching index in array 
            if(CheckInArray(letter)){
                //if exists strore data
                let temp = myMap.get(index);
                myMap.set(index, data + temp); // adding to letter
            }else {
                //if not 
                index = letter;
                IndexArray.push(letter); //store letter in letter array
                myMap.set(index, data); // create new letter
            }
            console.log("Index :" + index + " = " + data);
            console.log(IndexArray);
        }

        function CheckInArray(tempLetter){
            for(let i = 0; i < IndexArray.length-1 ; i++){
                if(tempLetter == IndexArray[i]){
                    index = tempLetter;
                    return true;
                }else {
                    return false;
                }
            }
        }
        
        
    }
    

let input = 'We are in TDL School We are leaning Javascript What Was Where';

Sort(input);