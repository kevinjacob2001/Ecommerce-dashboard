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

        connection.query('SELECT * FROM user', (err, rows) => {
            //when donw with connection release it
            connection.release();
            if (!err) {
                res.render('home',{rows})
            }
            else console.log(err)
console.log(rows)
        })
    })
}
//node js- js


//1:03:38

//add production

//update production

//delete


//5 table + renaming + UI