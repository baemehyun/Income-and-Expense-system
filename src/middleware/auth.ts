import { Request, Response,NextFunction } from "express";
// import { AppDataSource } from "../data-source"
import {checkToken} from "../services/auth"
export const authMiddleware= async (req:Request, res:Response, next:NextFunction)=> {

    //input Request header 
    const token = req.headers["authorization"] || null
    //Is there Req header that we want 
    //if not --> return unauth
    if(!token){
        res.status(401).json({message:"sth went wrong",status:false})
        return
    }
    //check token table is that revoke
    const findToken = await checkToken(token)

    //if have no token -> unauth
    if(!findToken){
        res.status(401).json({message:"sth went wrong",status:false})
        return
    }
    //is revoke by find token 
    if(findToken.is_revoke){
        res.status(401).json({message:"sth went wrong",status:false})
        return
    }
    
    //keep them and send who logined to controller
    res.locals.user = findToken.user;
    next()
}