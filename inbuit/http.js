let http = require('http');
const port = 2020
/*
req  --> what we send to the server(params, queryParams , body)
        params        -->what we pass after(/)
        queryParams   -->what we pass after(?)
        body          -->we send through the form
res  --> what server sends in return
*/


let server = http.createServer((req, res) => {
    res.write('<h1>This is node js server code</h1>')
})

server.listen(port , (req,resp) =>{
    console.log(`server listing at ${port}`);
})
