import mongoose from 'mongoose'
const  { Schema} = mongoose

const newsSchema = new Schema({
 title: String,
 description: String,
 date: { type: Date, required:true , default: new Date() },
 creator: {type: Schema.Types.ObjectId, ref:'user'}
})

const News = mongoose.model("news",newsSchema)

module.exports = News;


