import  express  from "express";
import cors from 'cors'
import  {DbConfigs , DotenvConfigs}  from "./configs/index.mjs"
import { AuthRoutes } from "./routes/index.mjs"
import { TodoRoutes } from "./routes/todos/index.mjs";
import appRootPath from "app-root-path";
import { Save } from "./routes/save/index.mjs";
DotenvConfigs()
DbConfigs()
const app = express()
app.use(cors())
app.use(express.json({extended : false}))
 app.use(express.urlencoded({extended : true}))
 app.use("/uploads" , express.static(appRootPath + "/uploads"))
// app.use("/uploads" , express.static(appRootPath + "/uploads"))
// app.use(
//     fileUpload({
//         createParentPath : true,
//         limits : {
//             fileSize : 2*1024*1024*1024 ,
//         }
//     })
// )
// app.use('/api/auth/' ,AuthRoutes )
// app.use('/api/todosss/' ,TodoRoutes )
try{

    app.use('/api/auth/' ,AuthRoutes )
    app.use('/api/todosss/' ,TodoRoutes )
    app.use('/api/save/' ,Save )

    const PORT = process.env.PORT || 5000;
    app.listen(PORT , () => {
        console.log(`app is running at ${PORT} port`)
    })
}catch(ex){
    console.log(ex)
}