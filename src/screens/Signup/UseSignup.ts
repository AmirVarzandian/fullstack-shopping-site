import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import React, {useCallback } from "react";
import { instance } from "../../Api/Constanstant";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export interface IRegister {
    username:string;
    email:string;
    password:string;
}
const LoginSchema = yup.object({
    username:yup.string().required(),
    email:yup.string().required().email(),
    password:yup.string().required(),
    
})
export const UseSignUp = () =>{
const {register , formState: {errors} , handleSubmit} = useForm<IRegister>({
    resolver: yupResolver(LoginSchema)
})
const navigate = useNavigate()
const HandleLoginScreen = useCallback(
    (data : IRegister)=>{
        instance.post('/auth/sign-up',data).then(res=>{
            toast.success('Login successfully')
            console.log(res)
            navigate('/HomeScreen')
        }        
            ).catch(()=>{
                toast.error('wrong username or password')
            })
console.log(data)
    },[]
)
return{
    HandleLoginScreen,
    handleSubmit,
    register,
    errors
}
}