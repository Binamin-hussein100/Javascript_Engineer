import app from "./server"

// app.listen(port, callbackFn())
app.listen(3000, ()=>{
    console.log('hello on http://localhost:3000')
})