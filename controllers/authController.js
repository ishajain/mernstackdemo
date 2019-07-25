import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'
import User from '../models/User'
import keys from "../config/keys"
 

module.exports = {
register : async (name,email, password) => {
    const existingUser = await User.findOne({email:email });
    if(existingUser) return new Error("User already exists!!")
    const hashedPassword = await bcrypt.hash(password,12);
    const user = new User({
        name,
        email,
        password:hashedPassword
    })
    try{
    const newUser = await user.save();
    //return {name:newUser.name,email:newUser.email,userId:newUser.id}
    const token = JWT.sign({userId:user.id,email:user.email},keys.JWTSECRET,
        {
          expiresIn: '1h'
        })
        return {userId : user.id, token : token , tokenExpiration: 1, name: user.name, email : user.email}
    }
    catch (error) {
         console.log(error)
    }


},
login: async (email,password) => {
    const user = await User.findOne({email : email})
    if(!user) throw new Error("No user found")
    const isEqual = await bcrypt.compare(password,user.password)
    if(!isEqual) throw new Error("Password is incorrect")
    const token = JWT.sign({userId:user.id,email:user.email},keys.JWTSECRET,
    {
      expiresIn: '1h'
    })
    return {userId : user.id, token : token , tokenExpiration: 1, name: user.name, email : user.email}

}

}


