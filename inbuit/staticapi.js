let fs = require('fs');
let http = require('http');
const port = 3020

let server = http.createServer((req,res) =>{
    //read file with fs
    fs.readFile('city.json' , 'utf-8' , (err,data) =>{
        if(err) throw err
        //retrun data of file
        res.write(data)
        res.end()
    })

})

server.listen(port, () =>{
    console.log(`listening on ${port}`);
})
