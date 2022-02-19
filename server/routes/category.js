const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

//Create Read update del
router.get("/", categoryController.view);
router.get("/addcategory", categoryController.addcategory);
router.post("/addcategory", categoryController.addCategory);
router.get("/:cat_id", categoryController.delete);

module.exports = router;
