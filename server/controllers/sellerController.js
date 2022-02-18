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

        connection.query('SELECT * FROM seller', (err, rows) => {
            //when donw with connection release it
        
            if (!err) {
                res.render('sellers-home',{rows})
            }
            else console.log(err)

        })
   
}

exports.addSeller=(req,res)=>{
    res.render('addSellers');
}

// Add new product

exports.addSellerForm = (req, res) => {
    const {seller_id,seller_name,seller_location,seller_year,seller_details } = req.body;

    // User the connection
    connection.query('INSERT INTO seller SET seller_name = ?, seller_location = ?, seller_year = ?, seller_details = ?', [seller_name,seller_location,seller_year,seller_details], (err) => {
      if (!err) {
        //res.redirect('/') 
        connection.query('SELECT * FROM seller', (err, rows) => {
          if (!err) {
            res.redirect('/seller')
            return res.render('sellers-home', {rows});
          }

          else console.log(err)
        })
      }
      else console.log(err); 
    })
  }

// delete product
exports.delete = (req, res) => {

    // User the connection
    connection.query('DELETE FROM seller WHERE seller_id = ?', [req.params.id], (err) => {
      if (!err) {
        connection.query('Select * from seller',(err,rows)=>{
          if(!err)
          {
            
            res.redirect('/seller')
            res.render('sellers-home', {rows});
          }
          else console.log(err)
        })
      }
      else console.log(err);
    })
  }
  