const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController')

//Create Read update del
router.get('/',userController.view);
router.get('/add',userController.addProductsForm);
router.post('/add',userController.add);
router.get("/edit/:id", userController.edit);
router.post("/edit/:id", userController.update);
router.get('/:id',userController.delete);

/*
router.get('/inactive/:id',userController.inactiveProducts)
*/



module.exports = router
