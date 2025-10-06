import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";

//route imports
import userRoute from './routes/user.route.js'
import adminRoute from './routes/admin.route.js'
import albumRoute from './routes/album.route.js'
import authRoute from './routes/auth.route.js'
import songRoute from './routes/song.route.js'
import statRoute from './routes/stat.route.js'



dotenv.config() 

const app = express();
const port = process.env.PORT;

app.use("/api/users", userRoute)
app.use("/api/admin", adminRoute)
app.use("/api/auth", authRoute)
app.use("/api/album", albumRoute)
app.use("/api/song", songRoute)
app.use("/api/stat", statRoute)


app.listen(port, () => {
    console.log("Server running on port "+ port);
    connectDB()
})