const express=require('express');
const router=express.Router();
const manufacturerAndProductController=require('../controllers/manufacturerAndProductController')

//Create Read update del
router.get('/',manufacturerAndProductController.view);



module.exports = router;