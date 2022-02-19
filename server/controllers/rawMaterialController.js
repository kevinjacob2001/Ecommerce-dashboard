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

  connection.query("SELECT * FROM raw", (err, rows) => {
    //when donw with connection release it

    if (!err) {
      res.render("rawMaterial-home", { rows });
    } else console.log(err);
  });
};

exports.addRaw = (req, res) => {
  res.render("addRawMaterialForm");
};

exports.addRawMaterialForm = (req, res) => {
  const { Name, Quantity, Price } = req.body;

  // User the connection
  connection.query(
    "INSERT INTO raw SET Name = ?, Quantity = ?, Price = ?",
    [Name, Quantity, Price],
    (err) => {
      if (!err) {
        //res.redirect('/')
        connection.query("SELECT * FROM raw", (err, rows) => {
          if (!err) {
            res.redirect("/rawMaterials");
            return res.render("rawMaterial-home", { rows });
          } else console.log(err);
        });
      } else console.log(err);
    }
  );
};

// delete product
exports.delete = (req, res) => {
  // User the connection
  connection.query("DELETE FROM raw WHERE Id = ?", [req.params.Id], (err) => {
    if (!err) {
      connection.query("SELECT * FROM raw", (err, rows) => {
        if (!err) {
          res.redirect("/rawMaterials");
          res.render("rawMaterial-home", { rows });
        } else console.log(err);
      });
    } else console.log(err);
  });
};

exports.edit = (req, res) => {
  connection.query(
    "SELECT * FROM raw WHERE Id = ?",
    [req.params.Id],
    (err, rows) => {
      if (!err) {
        res.render("editRawMaterial", { rows });
      } else {
        console.log(err);
      }
      console.log("The data from category table: \n", rows);
    }
  );
};

// Update manufacturer

exports.update = (req, res) => {
  const { Name, Quantity, Price } = req.body;
  // User the connection
  connection.query(
    "UPDATE raw SET Name = ?, Quantity = ?, Price = ? WHERE Id = ?",
    [Name, Quantity, Price, req.params.Id],
    (err, rows) => {
      if (!err) {
        // User the connection
        connection.query(
          "SELECT * FROM raw WHERE Id = ?",
          [req.params.Id],
          (err, rows) => {
            // When done with the connection, release it

            if (!err) {
              res.redirect("/rawMaterials");
              res.render("rawMaterial-home", { rows });
            } else {
              console.log(err);
            }
          }
        );
      } else {
        console.log(err);
      }
    }
  );
};
