const fs = require('fs')
const path = require('path')

/*
fs.mkdir(path.join(__dirname,'/test'),{},err=>{
    if (err) throw err;
    console.log('folder created')

})*/

//create and write to the file

// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'hello Chen',err=>{
//     if (err) throw err;
//     console.log('file been written')
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),'hello Gao',err=>{
//         if (err) throw err;
//         console.log('file been written')
    
//     })
// })

// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
//     if (err) throw err;
//     console.log(data)

// })

//rename a file
fs.rename(path.join(__dirname,'/test','newhello.txt'),path.join(__dirname,'/test',' hello.txt'),(err)=>{
    if (err) throw err;
    console.log('file renamed')

})