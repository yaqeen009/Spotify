import { Router } from "express";
import { authCallback } from "../controllers/auth.controller.js";

const router = Router()

//method = postMethod
router.post('/callback', authCallback)

export default router