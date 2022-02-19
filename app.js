const express=require('express');
const exphbs=require('express-handlebars')
const bodyParser=require('body-parser')
const mysql=require('mysql')
require('dotenv').config()
const app=express();


const port=process.env.PORT||4300
//to parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
//to parse application/json
app.use(bodyParser.json())
//static files
app.use(express.static(__dirname+'/public'));
//templating engine
app.engine('hbs',exphbs.engine({extname:'.hbs'}))

//To select which templating engine to use, here hbs
app.set('view engine','hbs')



const userRoutes=require('./server/routes/user')
const manufacturerRoutes=require('./server/routes/manufacturer')
const sellerRoutes=require('./server/routes/seller')
const manufacturerAndProductRoutes=require('./server/routes/manufacturerAndProduct')

app.use('/manufacturer',manufacturerRoutes)
app.use('/manufacturerandproduct',manufacturerAndProductRoutes)
app.use('/seller',sellerRoutes)
app.use('/',userRoutes)


app.listen(port,()=>console.log("Listening"))