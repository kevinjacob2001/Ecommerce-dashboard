const express=require('express');
const router=express.Router();
const manufacturerController=require('../controllers/manufacturerController')

//Create Read update del
router.get('/',manufacturerController.view);
router.get('/addmanufacturer',manufacturerController.addManufacturerForm);
router.post('/addmanufacturer',manufacturerController.add);
router.get("/editmanufacturer/:manufacturer_id", manufacturerController.edit);
router.post("/editmanufacturer/:manufacturer_id",manufacturerController.update);
router.get('/:id',manufacturerController.delete);


module.exports = router