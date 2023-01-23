const mongoose = require('mongoose')


const TodoSchema = new mongoose.Schema({
    record:{type:String},
    date:{type:Number,default:100},

})

const model = mongoose.model('TodoModel', TodoSchema)

module.exports = model;