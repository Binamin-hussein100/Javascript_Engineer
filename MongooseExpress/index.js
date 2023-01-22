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

app.listen(port, ()=>{`listen on ${port}`})