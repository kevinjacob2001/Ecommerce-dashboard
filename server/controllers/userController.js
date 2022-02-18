const mysql = require('mysql');
const Pool = require('mysql/lib/Pool');

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

        })
   
}


exports.addProductsForm=(req,res)=>{
    res.render('addProducts');
}

// Add new product
exports.add = (req, res) => {
    const {product_name,product_manufacturer,product_quantity,product_category } = req.body;

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

// delete product
exports.delete = (req, res) => {

    // User the connection
    connection.query('DELETE FROM user WHERE id = ?', [req.params.id], (err, rows) => {
      if (!err) {
        res.redirect('/') 
        res.render('home', {rows});
         
      }
      else console.log(err);
        console.log('The data from user table: \n', rows);
    })
  }

  // Edit product

exports.edit = (req,res) => {
    
  connection.query(
      "SELECT * FROM user WHERE id = ?",[req.params.id],(err, rows) => {
        if (!err) {
          res.render("editProducts", {rows});
        } else {
          console.log(err);
        }
        console.log("The data from user table: \n", rows);
      }
    );
}

// Update product 

exports.update = (req, res) => {
  const {
    product_name,
    product_manufacturer,
    product_quantity,
    product_category,
  } = req.body;
  // User the connection
  connection.query(
    "UPDATE user SET product_name = ?, product_manufacturer = ?, product_quantity = ?, product_category = ? WHERE id = ?",
    [product_name,product_manufacturer,product_quantity,product_category,req.params.id,
    ],
    (err, rows) => {
      if (!err) {
        // User the connection
        connection.query(
          "SELECT * FROM user WHERE id = ?",
          [req.params.id],
          (err, rows) => {
            // When done with the connection, release it

            if (!err) {
              res.redirect("/");
              res.render("home", { rows });
              
            } else {
              console.log(err);
            }
            console.log("The data from user table: \n", rows);
          }
        );
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    }
  );
};



