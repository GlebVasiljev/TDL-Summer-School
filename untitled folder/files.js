const fs = require('fs');

//reading files using fs
fs.readFile(`untitled folder/docs/blog.txt`, (error, data) => {
    if(error){
        console.log(error);
    }else{
        console.log(data.toString());
    }
})

//rewrite  / create file
fs.writeFile(`untitled folder/docs/blog2.txt`, `Hello world!`, () => {
    console.log('file blog2 is written')
})

fs.writeFile(`untitled folder/docs/blog1.txt`, `Hello world!`, () => {
    console.log('file blog1 is written')
})

//add to file
fs.appendFile(`untitled folder/docs/blog.txt` ,'New tex!', () => {
    console.log('New text added');
})

//dir creation
fs.mkdir(`./newFoulder`, err => {
    if(err){
        console.log(err);
    }
})
//dir deleting
fs.rmdir(`./newFoulder`, err => {
    if(err){
        console.log(err);
    }
})
