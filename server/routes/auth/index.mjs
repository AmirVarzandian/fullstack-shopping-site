import { Router } from "express";
import { SignInschema, SignUpschema, User } from "../../models/auth/index.mjs";
import bycript from "bcryptjs"
export const AuthRoutes = Router();
import { validationMiddleWare } from "../../middleware/index.mjs";
import { SignInUserController, signUpUserController } from "../../controller/index.mjs";
AuthRoutes.post('/sign-up' ,validationMiddleWare(SignUpschema),signUpUserController)
AuthRoutes.post('/sign-in' ,validationMiddleWare(SignInschema),SignInUserController)
