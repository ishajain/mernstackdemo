import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import newsRoutes from './routes/news'
import authRoutes from './routes/user'
import keys from "./config/keys"
import mongoose from 'mongoose'
import cors from 'cors'
import auth from './middlewares/auth'
const app = express()

// MIDDLEWARES
app.use(cors())
app.use(auth)
app.use(bodyParser.json())
//app.use("/", routes)
app.use("/news", newsRoutes)
app.use('/user', authRoutes);

const PORT  = process.env.PORT || 7000

if (process.env.NODE_ENV === "production") {
    const path = require("path");
  
    app.use(express.static("dist"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/dist/index.html"));
    });
  }

mongoose.connect(keys.MONGODB_URI).then(
    app.listen(PORT,() => {
        console.log(`Server is listening to port ${PORT}`)
    })
).catch(error=>console.log(error))



