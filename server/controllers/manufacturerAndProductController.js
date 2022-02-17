const mysql = require('mysql')

//connection pool
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });

//View users
exports.view = (req, res) => {


        connection.query("SELECT manufacturer.manufacturer_name AS manufacturer_name,user.product_name AS product_name, manufacturer.manufacturer_location AS manufacturer_location, manufacturer.manufacturer_details AS manufacturer_details FROM manufacturer  JOIN user ON user.product_manufacturer = manufacturer.manufacturer_name", (err, rows) => {
            //when donw with connection release it
        
            if (!err) {
                res.render('manufacturerAndProduct',{rows})
            }
        })
   
}
