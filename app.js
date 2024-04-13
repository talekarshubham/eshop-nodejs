const express =require('express')
const app=express();
require('dotenv/config')
const bodyParser=require('body-parser')
const morgan =require('morgan')
const mongoose= require('mongoose')


//middleware 
app.use(bodyParser.json())
app.use(morgan('tiny'))


const api=process.env.API_URL
// console.log(api,morgan);

app.get(`${api}/products`,(req,res)=>{
    const product= {
        id:1,
        name:'button',
        image:'some url'
    }
res.send(product)
})
app.post(`${api}/products`,(req,res)=>{
   const newproduct= req.body
//    console.log(newproduct);
res.send(newproduct)
})

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>console.log("DateBase Connection is Ready"))
.catch((err)=>console.log(err))


app.listen(5500,()=> console.log("Server is Running"))