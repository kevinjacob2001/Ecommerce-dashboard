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

    //cONNECT to DB_NAME

        connection.query('SELECT * FROM user', (err, rows) => {
            //when donw with connection release it
        
            if (!err) {
                res.render('home',{rows})
            }
            else console.log(err)
console.log(rows)
        })
   
}


exports.addProductsForm=(req,res)=>{
    res.render('addProducts');
}

// Add new user
exports.add = (req, res) => {
    const {id,product_name,product_manufacturer,product_quantity,product_category } = req.body;

    // User the connection
    connection.query('INSERT INTO user SET product_name = ?, product_manufacturer = ?, product_quantity = ?, product_category = ?', [product_name,product_manufacturer,product_quantity,product_category], (err, rows) => {
      if (!err) {
        res.redirect('/') 
        res.render('home', {rows});
         
      }
      else console.log(err);
        console.log('The data from user table: \n', rows);
    })
  }
  