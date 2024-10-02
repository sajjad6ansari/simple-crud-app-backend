const express=require('express')
const mongoose=require('mongoose')
const app=express() 

const productRouter=require('./routes/products.route')
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/products',productRouter)

app.get('/',(req,res)=>{
    res.send('hello from node api');
})



app.listen(3000,()=>{
    console.log(`server running on the post 3000`)  
})

const connectionString='mongodb+srv://nodeme:sajjad@backenddb.z7gov.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB' 

mongoose.connect(connectionString)
.then(()=>{
    console.log('connected to database')
})
.catch((err)=>{
    console.log('connection failed !!!!')
    console.log(err)
})

;