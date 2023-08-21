import mongoose, { Schema } from "mongoose";
import * as yup from "yup"
export const TodoSchema = yup.object({
    body: yup.object({
        title:yup.string().required() ,
        description:yup.string().required() ,
        
    })
  })
const TodosSchema = new Schema({
    _id:{
        required:true ,
type: mongoose.Schema.Types.ObjectId,
    },
    name:{
        required:true ,
       type: String
    },
    start:{
        required:true ,
       type: Number
    },
    rew:{
        required:true ,
       type: String
    },
    img:{
        required:true ,
        type: String,
      
     },
    price:{
        required:true ,
        type: Number
     },
     

})
export const Todo = mongoose.model( 'TodoPic1' , TodosSchema , 'TodoPic1' )
export const Todo2 = mongoose.model( 'TodoPic2' , TodosSchema , 'TodoPic2' )
export const Todo3 = mongoose.model( 'TodoPic3' , TodosSchema , 'TodoPic3' )


