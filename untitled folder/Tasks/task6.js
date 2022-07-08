const fs = require('fs');


fs.writeFile(`/Users/Student15/Desktop/TDL-Summer-School/file.txt`, `Google,Apple,Amazona`, () => {

})

fs.readFile(`/Users/Student15/Desktop/TDL-Summer-School/file.txt`, (error, data) => {
    if (error) {
        console.log(error);
    } else {

        let words = String(data).split(','); //main array
        //sorting
        for (let i = 0; i < words.length; i++) {
            
            for(let j = 0 ; j < words.length ; j++){

                if(words[i].length < words[j].length){
                    //switch
                   let temp = words[i];
                   words[i] = words[j];
                   words[j] = temp;
                }
            }
        }
        fs.writeFile(`/Users/Student15/Desktop/TDL-Summer-School/result.txt`, words.toString(), error => { //storing result in new file
            if(error){
                console.log(error);
            }else{
                console.log('Result in "Result.txt file"');
            }
        })
    }

})