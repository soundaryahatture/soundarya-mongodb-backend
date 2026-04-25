const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {type: String,required: true},
    emailAddress: {type: String,required: true,unique: true},
    mobileNo: {type: String,required: true},
    password: {type: String,required: true}
});

module.exports = mongoose.model('User', userSchema);