const fs = require('fs');

// //readfile is used to readfile  but the time requied to read file is skipped and the next command is runed
// //readfile uses theses arguments
// fs.readFile('file.txt', 'utf8', (err, data) => {
// //loging error and data is a any
//     console.log(err, data);
// })


// //readfileSync is to read file completely and then move on to next command
// const a = fs.readFileSync('file.txt')
// //converting in to string or we can use utf8 in above function
// console.log(a.toString());


//this is used to write data in a new file or we can rewrite an excisting file to new one 
fs.writeFile('file.txt' ,"this is new data",()=>{
    console.log("file writing completes");
})







console.log("Finished Reading File");
