const express=require('express')
const users=require('./routes/user')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/Userdatas')

mongoose.connection.on('connected',()=>{
    console.log("Mongodb successfully connected")
})
app.get('/',(req,res)=>{
    res.send("Backend server")
})
app.use('/users',users)
app.listen(3001,()=>{
    console.log("Server is running on port 3001")
})