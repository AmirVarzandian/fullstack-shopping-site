import { Todo4 } from "../../models/save/index.mjs"

export const GetTodoController4 = async (req , res) =>{
    const todos = await Todo4.find()
    res.status(200).json({data: todos}
        )
}
export const DeleteSavesController = async (req , res) =>{
    try{ 

        const params = req.params
        const body = req.body
        const updatedTodo = await Todo4.findByIdAndDelete(params.id)
        res.status(200).json({data: updatedTodo})
    }
    catch(ex){
console.log(ex)
    }
        
}