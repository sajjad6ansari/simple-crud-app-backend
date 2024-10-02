const Product=require('../models/products.model')
const getAllProduct=async (req,res)=>{
    try{
        const product=await Product.find({})
        res.status(201).json(product)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
const getSingleProduct=async (req,res)=>{
    try{
        const {id}=req.params
        const product=await Product.findById(id)
        res.status(201).json(product)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
const createProduct=async (req,res)=>{
    try{
        const product=await Product.create( req.body)
        res.status(201).json(product)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
const updateProduct=async (req,res)=>{
    try{
        const {id}=req.params
        const product=await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return req.status(404).json({message:'product not found'})
        }
        const updatedproduct=await Product.findById(id)
        res.status(201).json(updatedproduct)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
const deleteProduct=async (req,res)=>{
    try{
        const {id}=req.params
        const product=await Product.findByIdAndDelete(id)
        if(!product){
            return req.status(404).json({message:'product not found'})
        }
        const updatedproduct=await Product.findById({})
        res.status(201).json({message:"deleted successfully"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports={
    getAllProduct,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct,

}