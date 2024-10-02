const express=require('express')
const router=express.Router()
const {
    getAllProduct,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}=require('../controllers/products.controller')

router.post('/',createProduct)
router.get('/',getAllProduct)
router.get('/:id',getSingleProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports=router