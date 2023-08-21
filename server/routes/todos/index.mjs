import { Router } from "express"
import { GetByIdTodoController, GetByIdTodoController2, GetByIdTodoController3, GetTodoController, GetTodoController2, GetTodoController3, GetTodoController4, ShoppingCard } from "../../controller/index.mjs"
import { validateUser } from "../../middleware/index.mjs"

export const TodoRoutes = Router() 

TodoRoutes.get('/',GetTodoController)
TodoRoutes.get('/2',GetTodoController2)
TodoRoutes.get('/3',GetTodoController3)
TodoRoutes.get('/:id',GetByIdTodoController)
TodoRoutes.get('/2/:id',GetByIdTodoController2)
TodoRoutes.get('/3/:id',GetByIdTodoController3)
TodoRoutes.post('/card',ShoppingCard)
TodoRoutes.get('/4',GetTodoController4)






