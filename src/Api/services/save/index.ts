import { instance } from "../../Constanstant"

export const addTodoService = async (data : any) =>{ 
    const res = await instance.post("/save/card" , data)
    return res.data
       }
       export const getTodoService4 = async () =>{ 
        const res = await instance.get("/save/saves")
        return res.data
           }
           export const deleteSavesService = async (id:string ) =>{ 
            const res = await instance.delete(`/save/delete/${id}`)
            return res.data
               }