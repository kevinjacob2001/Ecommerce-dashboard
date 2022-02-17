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

        connection.query('SELECT * FROM manufacturer', (err, rows) => {
            //when donw with connection release it
        
            if (!err) {
                res.render('manufacturer-home',{rows})
            }
        })
   
}


exports.addManufacturerForm=(req,res)=>{
    res.render('addManufacturer');
}

// Add new manufacturer
exports.add = (req, res) => {
    const {manufacturer_name,manufacturer_location,manufacturer_details} = req.body;

    // User the connection
    connection.query('INSERT INTO manufacturer SET manufacturer_name = ?, manufacturer_location = ?, manufacturer_details = ?', [manufacturer_name,manufacturer_location,manufacturer_details], (err, rows) => {
      if (!err) {
        res.redirect('/manufacturer') 
        res.render('manufacturer-home', {rows});
         
      }
      else console.log(err);
        console.log('The data from manufacturer table: \n', rows);
    })
  }

  exports.delete = (req, res) => {

    // User the connection
    connection.query('DELETE FROM manufacturer WHERE manufacturer_id = ?', [req.params.id], (err, rows) => {
      if (!err) {
        res.redirect('/manufacturer') 
        res.render('manufacturer-home', {rows});
         
      }
      else console.log(err);
        console.log('The data from manufacturer table: \n', rows);
    })
  }
  