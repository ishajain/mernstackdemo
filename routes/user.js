import express from 'express'
import authController from '../controllers/authController'
const router = express.Router()

router.post("/login" , async (req, res) => {
    const {email,password} = req.body
    const user = await authController.login(email,password)
    res.send(user)
})

router.post("/register",async(req,res) => {
const {name,email,password} = req.body

const user = await authController.register(name,email,password)

res.send(user);

})

module.exports = router
