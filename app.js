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

//connection pool
const pool=mysql.createPool({
    connectionLimit:100,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME})

//cONNECT to DB_NAME
pool.getConnection((err,connection) =>{
    if(err) throw err;
    else console.log("Connected as ID"+connection.threadId)
})

//Route
app.get('/',(req,res)=>
{
    res.render('home')
}
)

app.listen(port,()=>console.log("Listening"))