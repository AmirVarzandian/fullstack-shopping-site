import mongoose, { Schema } from "mongoose";
import * as yup from "yup"
export const SignUpschema = yup.object({
    body: yup.object({
        username:yup.string().required() ,
        email:yup.string().required() ,
        password:yup.string().required() ,
    })
  })
  export const SignInschema = yup.object({
    body: yup.object({
        email:yup.string().required() ,
        password:yup.string().required() ,
    })
  })
const UserSchema = new Schema({
    username:String,
    email:String ,
    password:String ,
})
export const User = mongoose.model('User' , UserSchema)