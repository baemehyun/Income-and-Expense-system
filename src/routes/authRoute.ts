import express from "express";
import { login,registers,checkLogin } from "../controllers/authController";
import {authMiddleware} from "../middleware/auth"

const router = express.Router();

// router.get("/test", (req,res)=>{
//     res.send("test")
// });
router.get("/checkLogin",authMiddleware,checkLogin)

router.post("/login",login)

router.post("/register",registers)

export default router;