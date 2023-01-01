import express from 'express';
import router from './router';
import morgan from 'morgan'


const app = express();

// inbuilt middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended:true }));

// custom middlewares
app.use((req,res,next)=>{
    req.shhh_secret = 'doggy'
    next()
})

app.get('/',(req, res)=>{ // takes in 2 parameters. route extension and req, res parenthesis
    console.log('herrlo from express')
    res.status(200)
    res.json({message: 'Hello'})
})

app.use('/api', router)

export default app

// after the route has been generted, one listens to the port using the app.listen function. This function takes in 2 parameters. 1. port eg: 3000 and 2. a callback function.