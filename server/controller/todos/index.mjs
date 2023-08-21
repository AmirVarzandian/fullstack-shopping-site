import { Todo4 } from "../../models/save/index.mjs"
import { Todo, Todo2, Todo3} from "../../models/todos/index.mjs"
export const GetTodoController = async (req , res) =>{
    const todos = await Todo.find()
    res.status(200).json({data: todos}
        )
}
export const GetTodoController2 = async (req , res) =>{
    const todos = await Todo2.find()
    res.status(200).json({data: todos}
        )
}
export const GetTodoController3 = async (req , res) =>{
    const todos = await Todo3.find()
    res.status(200).json({data: todos}
        )
}

export const GetByIdTodoController = async (req , res) =>{
    try{
        const {id} = req.params;
        const todo = await Todo.findById(id)
        res.status(200).json({data: todo}
            )
        }catch(ex){
console.log(ex)
        }
}
export const GetByIdTodoController2 = async (req , res) =>{
    try{

        const {id} = req.params;
        const todo = await Todo2.findById(id)
        res.status(200).json({data: todo}
            )
        }catch(ex){
console.log(ex)
        }
}
export const GetByIdTodoController3 = async (req , res) =>{
    try{

        const {id} = req.params;
        const todo = await Todo3.findById(id)
        res.status(200).json({data: todo}
            )
        }catch(ex){
console.log(ex)
        }
}
export const ShoppingCard = async (req , res) =>{
    try{
      
        const todo = new Todo4({
            ...req.body
        })
        await todo.save()
        res.status(201).json({msg:'todo saved successfully!'})
    }catch(ex){
        console.log(ex)
    }
}