import { Router } from "express";
import { authCallback } from "../controllers/auth.controller";

const router = Router()

//method = postMethod
router.post('/callback', authCallback)

export default router