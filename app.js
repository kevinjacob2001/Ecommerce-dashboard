const express=require('express');
const exphbs=require('express-handlebars')
const bodyParser=require('body-parser')
const mysql=require('mysql')

require('dotenv').config()

const app=express();
const port=process.env.PORT||5000

//to parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//to parse application/json
app.use(bodyParser.json())

//static files
app.use(express.static('public'));

//templating engine
app.engine('hbs',exphbs.engine({extname:'.hbs'}))

//To select which templating engine to use, here hbs
app.set('view engine','hbs')




const routes=require('./server/routes/user')
app.use('/',routes)

app.listen(port,()=>console.log("Listening"))