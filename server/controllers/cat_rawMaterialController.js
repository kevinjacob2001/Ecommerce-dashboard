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
  connection.query(
    "SELECT category.Category AS Category,user.product_name AS product_name, user.product_category AS product_category, category.Details AS Details FROM category  JOIN user ON user.product_category = category.Category",
    (err, rows) => {
      //when donw with connection release it

      if (!err) {
        res.render("category_rawMaterial-home", { rows });
      }
    }
  );
};
