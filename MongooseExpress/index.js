const express = require("express");
const mongoose = require("mongoose"); 
// * ORM
const Todo = require('./models/todo')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost/mngs')

const app = express();
const port = 3000
app.use('/',(req,res)=>{
    res.send("hello world!");
})

app.post('/api/create',async (req, res)=>{
    const record = req.body
    const response = await Todo.create(record)
    console.log(response)
    res.json({status:"ok"})
})

app.listen(port, ()=>{`listen on ${port}`})