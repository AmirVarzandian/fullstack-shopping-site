import { instance } from "../../Constanstant"

export const getTodoService = async () =>{ 
    const res = await instance.get("/todosss")
    return res.data
       }
       export const getTodoService2 = async () =>{ 
        const res = await instance.get("/todosss/2")
        return res.data
           }
           export const getTodoService3 = async () =>{ 
            const res = await instance.get("/todosss/3")
            return res.data
               }
              

           export const getSingleTodoService = async (id:string | number) =>{ 
            const res = await instance.get(`/todosss/${id}`)
            return res.data
               }
               export const getSingleTodoService2 = async (id:string | number) =>{ 
                const res = await instance.get(`/todosss/2/${id}`)
                return res.data
                   }
                   export const getSingleTodoService3 = async (id:string | number) =>{ 
                     const res = await instance.get(`/todosss/3/${id}`)
                     return res.data
                        }
                       
                            