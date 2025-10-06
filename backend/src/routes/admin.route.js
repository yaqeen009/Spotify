import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router()

//method = getMethod
router.get('/', protectRoute, requireAdmin,(req, res) => {
    res.send('Admin route with get method')
})

export default router