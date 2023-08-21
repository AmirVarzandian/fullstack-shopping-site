import mongoose from "mongoose"

export function DbConfigs() {
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("db connected succesfully")
    }).catch(()=>{
        console.log("db connected failed")
    })
}