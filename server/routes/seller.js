const express=require('express');
const router=express.Router();
const sellerController=require('../controllers/sellerController')

//Create Read update del
router.get('/',sellerController.view);
router.get('/addSeller',sellerController.addSeller);
router.post('/addSeller',sellerController.addSellerForm);
router.get('/:id',sellerController.delete);


module.exports = router