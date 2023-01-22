import express from "express";
const api = require("./api")
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.set('port', (process.env.PORT || 8081))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use('/api',api)
app.use(express.static('static'))
app.use(morgan('dev'))

app.use(function(){
    const err = new Error("Not Found!")
    err.status = 404
    resizeBy.json(err)
})

app.listen(app.get('port'), function(){
    console.log('listening on port')
});
