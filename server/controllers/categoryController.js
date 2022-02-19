const mysql = require("mysql");

//connection pool
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

//View users
exports.view = (req, res) => {
  //cONNECT to DB_NAME

  connection.query("SELECT * FROM category", (err, rows) => {
    //when donw with connection release it

    if (!err) {
      res.render("category-home", { rows });
    } else console.log(err);
  });
};

exports.addcategory = (req, res) => {
  res.render("addCategory");
};

exports.addCategory = (req, res) => {
  const { cat_id, Category, Details } = req.body;

  // User the connection
  connection.query(
    "INSERT INTO category SET Category = ?, Details = ?",
    [Category, Details],
    (err) => {
      if (!err) {
        //res.redirect('/')
        connection.query("SELECT * FROM category", (err, rows) => {
          if (!err) {
            res.redirect("/category");
            return res.render("category-home", { rows });
          } else console.log(err);
        });
      } else console.log(err);
    }
  );
};

// delete product
exports.delete = (req, res) => {
  // User the connection
  connection.query("DELETE FROM category WHERE cat_id = ?", [req.params.cat_id], (err) => {
    if (!err) {
      connection.query("SELECT * FROM category", (err, rows) => {
        if (!err) {
          res.redirect("/category");
          res.render("category-home", { rows });
        } else console.log(err);
      });
    } else console.log(err);
  });
};
