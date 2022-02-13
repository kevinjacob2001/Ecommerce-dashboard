const mysql = require('mysql')

//connection pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})


//View users
exports.view = (req, res) => {

    //cONNECT to DB_NAME
    pool.getConnection((err, connection) => {
        if (err) throw err;
        else console.log("Connected as ID" + connection.threadId)

        connection.query('SELECT * FROM products1', (err, rows) => {
            //when done with connection release it
            connection.release();
            if (!err) {
                console.log(rows)
                res.render('home',{rows}) //rendering data here
            }
            else console.log(err)
console.log(rows)
        })
    })
}

//Adding new Products

exports.addProductsForm=(req,res)=>{
    res.render('addProducts');
}

exports.add=(req,res)=>{

    const{products_name,manufacturer,quantity,country}=req.body;
    pool.getConnection((err, connection) => {
        if (err) throw err;
        else console.log("Connected as ID" + connection.threadId)

        connection.query('INSERT INTO products1 SET Name=?,Manufacturer=?,Quantity=?,CountryOfOrigin=?',[products_name,manufacturer,quantity,country]),
        connection.query('Select * from products1',(err, rows) => {
            connection.release();
            if (!err) {
                res.render('home',{rows}) 
            }
            else console.log(err)
console.log(rows)
        })
    })
}
    


//update production

//delete


//5 table + renaming + UI