let express = require('express')
let dotenv = require('dotenv')
let app = express()
let categoryRouter = require('./src/controllers/categoryRoute')
let productRouter = require('./src/controllers/productRoute')
dotenv.config()
let port = process.env.PORT || 6000


//default
app.get('/' , (req,res) =>{
    res.send('Hii From express')
})


app.use('/category' , categoryRouter)
app.use('/products' , productRouter)

//Listening port
app.listen(port , (err) =>{
    if (err) throw err;
    else{
        console.log(`App listening on port http://localhost:${port}`);
    }
})

