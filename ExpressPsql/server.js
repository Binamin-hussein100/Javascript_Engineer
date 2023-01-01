// import express  from "express";
const express = require("express");
const studentRoutes = require('./src/student/routes')
const app = express();
const port = 3000

// midelware to convert all handlers to json
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello world!")
})

// app.get('/student',(req,res)=>{
//     res,send('Student test routes found')
// })


app.use("/students", studentRoutes)

app.listen(port, ()=>console.log(`app listening on ${port}`))