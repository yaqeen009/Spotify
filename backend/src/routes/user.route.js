import { Router } from "express";

const router = Router()

//method = getMethod
router.get('/', (req, res) => {
    res.send('User route with get method')
})

export default router