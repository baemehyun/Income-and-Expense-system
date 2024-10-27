// import { User } from "../entity/User" 
import { Token } from "../entity/Token" 
import { AppDataSource } from "../data-source"
import { error } from "console";

const generateToken = async (userid:number,length=200) => {
    let token = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      token += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    const result = await saveToken(userid,token)

    return result;
}
const saveToken = async (userid:number,token:string)=>{
    //insert
    
    try {
        await AppDataSource
        .createQueryBuilder()
        .insert()
        .into(Token)
        .values([
            { user_id: userid, token,is_revoke:0 },
        ])
        .execute() 
        return {error:null,token,successed:true}
    } catch (error) {
        console.log(error)
        return {error,token,successed:false}
    }
}
const checkToken = async (token:string)=>{
    const result = await AppDataSource.getRepository(Token).findOne({
        where: { token: token },
        relations: ['user'],
    })
    
    //query users table


    return result
}
export {generateToken,checkToken}