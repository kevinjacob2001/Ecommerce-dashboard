const express = require("express");
const router = express.Router();
const rawMaterialController = require("../controllers/rawMaterialController");

//Create Read update del
router.get("/", rawMaterialController.view);
router.get("/addRaw", rawMaterialController.addRaw);
router.post("/addRaw", rawMaterialController.addRawMaterialForm);
router.get("/editRaw/:Id", rawMaterialController.edit);
router.post("/editRaw/:Id", rawMaterialController.update);
router.get("/:Id", rawMaterialController.delete);

module.exports = router;
