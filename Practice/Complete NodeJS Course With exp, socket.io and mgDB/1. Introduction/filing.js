
const fileSystem = require("fs");



// Writing the file
let mess = 'A new message is being sent to the file.';
fileSystem.writeFile('./nots.txt', mess,(err,data)=> {
    if (err){
        console.log(err);
    }
    else{
        console.log("Message has been successfully been added");
    }
})

// Reading the file
fileSystem.readFile('./nots.txt', (err,data)=> {
    if (err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})

// Append File
// Writing the file
let mess2 = '\nSyed Mustafa Imam is the greatest programmer of the all time.';
fileSystem.appendFile('./nots.txt', mess2,(err,data)=> {
    if (err){
        console.log(err);
    }
    else{
        console.log("Message has been append to the existed file");
    }
})
// Create folder 
if(!fileSystem.existsSync('testFolder')){
fileSystem.mkdir('testFolder', (err, data)=>{

    if (err){
        console.log("errror");
    }
    else{
        console.log("Folder Created");
    }
})}else{
    console.log("folder exists");
}

// Delete Folder 
if(fileSystem.existsSync('testFolder')){
    fileSystem.rmdir('testFolder', (err)=>{
        if(err){
            console.log(err);
        }
        else{console.log("folder deleted")}
    })
}else{
    console.log("folder Already not exits");
}