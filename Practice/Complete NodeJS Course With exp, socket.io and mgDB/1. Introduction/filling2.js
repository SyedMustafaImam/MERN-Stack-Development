const fs = require('fs')

const readStream = fs.createReadStream('largetxt.txt', {encoding:'utf-8'});
const writeStream = fs.createWriteStream('writeStram.txt');
readStream.on('data', chunk=>{
    console.log(' ### New Chunk ###');
    console.log(chunk)
})
