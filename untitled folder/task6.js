const fs = require('fs');
fs.writeFile(`/Users/Student15/Desktop/TDL-Summer-School/file.txt`, `Google,Apple,Amazona`, () => {

})

fs.readFile(`/Users/Student15/Desktop/TDL-Summer-School/file.txt`, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        let words;
        let temp;
        console.log(data.toString());
        words = data.toString();
        words = words.split(',');
        for (let i = 0; i < words.length; i++) {
            console.log(let[i]);
        }
    }

})