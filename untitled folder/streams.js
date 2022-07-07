const fs = require('fs');

const readStream = fs.createReadStream(`untitled folder/docs/blog.txt`);
const writeStream = fs.createWriteStream(`untitled folder/docs/blog.txt`);
readStream.on('data' , chunk => {

    console.log('<----------Newc Chunk---------->');
    console.log(chunk.toString());

    writeStream.write('\nNew Chunk\n');
    writeStream.write(chunk);
})