import bycript from 'bcryptjs'
import jwt from "jsonwebtoken"
import { User } from '../../models/auth/index.mjs'
export const signUpUserController = async (req , res)=>{
    // if(!req.body.username) return res.status(400).json({
    //     msg:"user name is required"
    // })
    const isUser = await User.findOne({email: req.body.email}).maxTimeMS(20000)
  if(isUser) return res.status(400).json({msg:"email already existence"})
try{
const hashsalt = await bycript.genSalt(10)
const {repeatPassword , ...restBody} = req.body
const hashed = await bycript.hash(req.body.password , hashsalt)
    const user= await new User({...restBody , password:hashed});
    await user.save();
    res.status(201).json({msg:'create!'})
}catch(err){
res.status(400).json({err})
}
}
export const SignInUserController = async (req,res)=>{
  const {email , password} = req.body
  const isUser = await User.findOne({email})
if(!isUser) return res.status(400).json({msg:"email already existence"})
const passwordValidate = await bycript.compare(password , isUser.password)
if(!passwordValidate){
  return res.status(400).json({
      msg:'email or password is wrong'
  })
}
const token = jwt.sign({user:isUser} , process.env.JWT_SECRET_KEY)
res.status(200).json({
  token
})
}