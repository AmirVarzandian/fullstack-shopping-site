import { toast } from "react-hot-toast"
import { instance } from "../../Constanstant"


export const signUpService = async (data : any) =>{ 
 const res = await instance.post('/auth/sign-up' , data)
return res.data
}
export const signInService = async (data : any) =>{ 
    try {
        const res = await instance.post('/auth/sign-up', data);
        toast.success('Login successfully');
        return res.data;
      } catch (error) {
        toast.error('Wrong username or password');
        throw error; // optional: rethrow the error to handle it in the calling code
      }
   }