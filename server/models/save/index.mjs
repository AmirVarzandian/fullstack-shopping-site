import mongoose, { Schema } from "mongoose";

const TodosSchemaa = new Schema({
    _id:{
      type: mongoose.Schema.Types.ObjectId,
          },
    name:{
       type: String
    },
    start:{
       // required:true ,
       type: Number
    },
    rew:{
       
       type: String
    },
    img:{
        //required:true ,
        type: String,
      
     },
    price:{
        //required:true ,
        type: Number
     },
     

})
export const Todo4 = mongoose.model( 'Save' , TodosSchemaa )


