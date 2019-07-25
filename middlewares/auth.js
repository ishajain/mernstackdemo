import JWT from 'jsonwebtoken'
import keys from "../config/keys"

module.exports = (req,res,next) => {
    const authHeader = req.get('Authorization')
    console.log("AUTH")
    console.log(authHeader)
    if(!authHeader){
        req.isAuth = false;
        return next()
    }
    const token = authHeader.split(" ")[1] 
    if(!token  || token === ''){
        req.isAuth = false;
        return next()
    }
    let decodedToken
    try{
         decodedToken = JWT.verify(token, keys.JWTSECRET)
    }
    catch(error){
        req.isAuth = false;
        return next()

    }
    if(!decodedToken){
        req.isAuth = false;
        return next()
    }
    console.log("Token:", decodedToken)
    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();

}