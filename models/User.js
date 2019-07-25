import mongoose from 'mongoose'
const { Schema } =  mongoose

const userSchema = new Schema({
    name : {
        type: String,
        required:true
    },
    email : {
        type: String,
        required:true
    },
    password : {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: new Date()
    }  
})

const User = mongoose.model('user',userSchema)
module.exports = User;
