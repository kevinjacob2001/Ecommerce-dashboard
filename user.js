const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController')

//Create Read update del
router.get('/',userController.view);
router.get('/add',userController.addProductsForm);
router.post('/add',userController.add);



module.exports = router