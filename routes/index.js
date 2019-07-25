import express from 'express'
const router = express.Router()

router.get("/" , (req, res) => {
    res.send({
        greet : "Hello from express"
    })
})


module.exports = router