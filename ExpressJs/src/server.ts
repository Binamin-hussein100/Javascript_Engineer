import express from 'express';

const app = express();

app.get('/',(req, res)=>{ // takes in 2 parameters. route extension and req, res parenthesis
    console.log('herrlo from express')
    res.status(200)
    res.json({message: 'Hello'})
})

export default app

// after the route has been generted, one listens to the port using the app.listen function. This function takes in 2 parameters. 1. port eg: 3000 and 2. a callback function.