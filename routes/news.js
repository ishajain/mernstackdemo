import express from 'express'
const router = express.Router()
import newsController from '../controllers/newsController'

router.get("/" , async (req, res) => {
  console.log("TEST")

  if(!req.isAuth) throw new Error("UnAuthorized User, Please login first")
  console.log(req.userId)
  const news = await newsController.findByUser(req.userId)
    res.status(200).send({
        data: news
      })
})

router.post("/new",async(req,res) => {
  if(!req.isAuth) throw new Error("UnAuthorized User, Please login first")
  const news = await newsController.create(req.body,req.userId)
  res.send(news);
})

module.exports = router