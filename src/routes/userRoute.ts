import express from "express";
import {authMiddleware} from "../middleware/auth"

const router = express.Router();

// router.get("/checkLogin",authMiddleware,checkLogin)
// router.post("/login",login)
// router.post("/register",registers)



export default router;