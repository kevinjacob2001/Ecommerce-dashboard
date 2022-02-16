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

        connection.query("SELECT * FROM user", (err, rows) => {
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

/*
//inactive Products
exports.inactiveProducts = (req, res) => {
     //cONNECT to DB_NAME
     pool.getConnection((err, connection) => {
        if (err) throw err;
        else console.log("Connected as ID" + connection.threadId);
        var sql=`UPDATE user SET product_status='Inactive' WHERE id=${req.params.id} `;
        var sql=`INSERT into status(id,product_name,product_quantity) values `;

        var sql2="CREATE TABLE status (id int NOT NULL,product_name varchar(40),product_quantity varchar(40),product_manufacturer varchar(40),product_status varchar(40),PRIMARY KEY (id))";

        connection.query(sql, (err, rows) => {
            //when donw with connection release it
            connection.release();
            if (!err) {
                res.render('inactive',{rows})
            }
            else console.log(err)

        })
    })
}



*/