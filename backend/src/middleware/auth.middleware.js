import { clerkClient } from "@clerk/express"

//protect routes, permit only logged in users 
export const protectRoute = async (req, res, next) => {
    //check user auth status
    if (!req.auth.userId) {
        return res.status(401).json({message: "Unauthorized! You must be logged in"})
    }

    next()
}


//permit only admins

export const requireAdmin = async (req, res, next) => {
    try {
        const currentUser = await clerkClient.users.getUser(req.auth.userId)
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress

        if (!isAdmin) {
            return res.status(401).json({message: "Unauthorized Access"})
        }

        next()
    } catch (error) {
        res.status(500).json({message: "Internal Server Error!"})
    }
}