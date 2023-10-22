let fs = require('fs');

fs.writeFile('good.txt' , 'Node.js' , (err,data) =>{
    if(err) throw err
    console.log('task done');
})

fs.readFile('msg.txt' , 'utf-8' , (err,data) =>{
    console.log(data);
})

// fs.readFile()