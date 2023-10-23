let express = require('express')
let dotenv = require('dotenv')
let morgan = require('morgan')
let fs = require('fs')

let app = express()
let categoryRouter = require('./src/controllers/categoryRoute')
let productRouter = require('./src/controllers/productRoute')
dotenv.config()
let port = process.env.PORT || 6000

//Middleware(Morgans--> For getting what reoutes hits)
//app.use(morgan('dev'))
app.use(morgan('common' , {stream:fs.createWriteStream('./app.log')}))


//default
app.get('/' , (req,res) =>{
    res.send('Hii From express')
})

//Custom Middleware(routes)
app.use('/category' , categoryRouter)
app.use('/products' , productRouter)

//Listening port
app.listen(port , (err) =>{
    if (err) throw err;
    else{
        console.log(`App listening on port http://localhost:${port}`);
    }
})

