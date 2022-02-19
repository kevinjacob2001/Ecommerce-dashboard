const express = require("express");
const router = express.Router();
const cat_rawmaterialController = require("../controllers/cat_rawmaterialController");

//Create Read update del
router.get("/", cat_rawmaterialController.view);

module.exports = router;
