const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    rollNo:{type:Number,required:true,unique:true},
    fullName:{type:String,required:true},
    department:{type:String,required:true},
    CGPA:{type:Number,required:true}
},{timestamps:true})

module.exports = mongoose.model('Student',studentSchema)

