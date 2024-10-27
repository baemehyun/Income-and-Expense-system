import { Request, Response } from "express";
import { AppDataSource } from "../data-source"
import { User } from "../entity/User" 
import passwordhash from "password-hash"
import {generateToken} from "../services/auth"

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    //find user
    const user = await AppDataSource
    .getRepository(User).findOneBy({
        username: username,
    })
    //if have no user -> user or password wrong
    if(!user){
        res.status(400).json({message:"username or password is wrong",status:false})
        return
    }

    //password verify with password 
    const isVerify = passwordhash.verify(password,user.password)
    //check
    //false -> user or password wrong
    if(!isVerify){
        res.status(400).json({message:"username or password is wrong",status:false})
        return
    }
    //gen token
    const result = await generateToken(user.user_id)
    // console.log("token:",token)
    if(!result.successed){
        res.status(500).json({error:result.error,message:"something went wrong",status:false})
        return
    }

    res.status(200).json({data:result.token,message:"Logined successful",status:true})
    return
};
export  const registers = async (req: Request, res: Response) => {
    const { username, password, comfirmPassword } = req.body;

    //check password and comfirmpassword
    if(password!=comfirmPassword){
        res.status(400).json({message:"2 passwords is not equal ",status:false})
        return
    }
    //check username --> find in db
    const hashedPass = passwordhash.generate(password)
    const users = await AppDataSource
    .getRepository(User).findOneBy({
        username: username,
    })
    // const users = await AppDataSource
    // .getRepository(User)
    // .createQueryBuilder("users")
    // .select("username", "id")
    // .getMany()
    console.log(users)
    // const findUser = await User.findBy({
    //     username:username,
    // })
    // res.json({users})
    if(users){
        res.send({message:"this username is there already",status:false})
        return
    }
    // res.send({})
    // return
    //insert to db
    try {
        
        const insertResult = await AppDataSource
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
            { username: username, password: hashedPass,is_active:1 },
        ])
        .execute() 
    //     const userRepository = AppDataSource.getRepository(User)
    //     const user = new User()
    //     user.userName = username
    //     user.password = password
    //     user.isActive = true
    //     const result = await userRepository.save(user)
        res.json({data:insertResult,message:"register success",status:true})
        return
    } catch (error) {
        res.status(400).json({data:error,message:"somethg wrong",status:false})
        return
    }
    

    

    //return
    //   const user = findUser(username);

    //   if (!user || user.password !== password) {
    //     return res.status(401).json({ message: "Invalid credentials" });
    //   }

    // Simulate token (normally you'd use JWT)
    //   const token = `fake-jwt-token-for-${user.username}`;

    res.json({ message: "registered successful" });
};
export const checkLogin = (req: Request, res: Response)=>{
    const user = res.locals.user; 
    res.status(200).json({data:user,message:"succussed",status:false})
    return
}