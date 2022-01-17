const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController')

//Create Read update del
router.get('/',userController.view)




module.exports = router