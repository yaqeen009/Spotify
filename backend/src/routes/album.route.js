import { Router } from "express";

const router = Router()

//method = getMethod
router.get('/', (req, res) => {
    res.send('Album route with get method')
})

export default router