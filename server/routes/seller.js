const express=require('express');
const router=express.Router();
const sellerController=require('../controllers/sellerController')

//Create Read update del
router.get('/',sellerController.view);
router.get('/addSeller',sellerController.addSeller);
router.post('/addSeller',sellerController.addSellerForm);
router.get("/editSeller/:seller_id", sellerController.edit);
router.post("/editSeller/:seller_id", sellerController.update);
router.get('/:id',sellerController.delete);


module.exports = router