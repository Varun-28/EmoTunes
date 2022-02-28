const mongoose = require('mongoose');
const {Schema} = mongoose;

const SignupSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('signup', SignupSchema);
User.createIndexes();
module.exports = User;