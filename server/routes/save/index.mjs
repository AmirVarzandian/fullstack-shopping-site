import { Router } from "express"
import { DeleteSavesController, GetTodoController4, ShoppingCard } from "../../controller/index.mjs"
export const Save = Router() 
Save.post('/card',ShoppingCard)
Save.get('/saves',GetTodoController4)
Save.delete('/delete/:id',DeleteSavesController)
