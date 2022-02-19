const express = require("express");
const router = express.Router();
const cat_productController = require("../controllers/cat_productController");

//Create Read update del
router.get("/", cat_productController.view);

module.exports = router;
