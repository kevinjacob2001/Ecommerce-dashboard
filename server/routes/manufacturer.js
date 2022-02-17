const express=require('express');
const router=express.Router();
const manufacturerController=require('../controllers/manufacturerController')

//Create Read update del
router.get('/',manufacturerController.view);
router.get('/addmanufacturer',manufacturerController.addManufacturerForm);
router.post('/addmanufacturer',manufacturerController.add);
router.get('/:id',manufacturerController.delete);


module.exports = router