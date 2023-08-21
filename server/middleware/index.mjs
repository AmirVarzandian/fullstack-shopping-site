import  jwt  from "jsonwebtoken";

export const validationMiddleWare = (Schema) => async (req,res,next) => {
    try{
        await Schema.validate({
            body:req.body,
            query:req.query,
            params: req.params
        })
        return next();
    } catch (err) {
        res.status(400).json(err)
    }
    }
    export const validateUser = async (req,res,next) => {
        const token = req.headers['authorization']
        if(!token){
            res.status(401).json({ msg:' Un Authorization'})
        }
     const validate = await jwt.verify(token , process.env.JWT_SECRET_KEY)
     console.log([validate])
     if(!validate){
        res.status(401).json({
            msg:'acess denied'
        })
     }
        next()
    }