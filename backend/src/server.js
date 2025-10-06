import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path";

//route imports
import userRoute from "./routes/user.route.js";
import adminRoute from "./routes/admin.route.js";
import albumRoute from "./routes/album.route.js";
import authRoute from "./routes/auth.route.js";
import songRoute from "./routes/song.route.js";
import statRoute from "./routes/stat.route.js";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT;

app.use(express.json()); //parse req.body
app.use(clerkMiddleware()); //adds auth to req obj, i.e req.auth
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "temp"),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024, //file max size = 10mb
    },
  })
);

app.use("/api/users", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/auth", authRoute);
app.use("/api/album", albumRoute);
app.use("/api/song", songRoute);
app.use("/api/stat", statRoute);

app.listen(port, () => {
  console.log("Server running on port " + port);
  connectDB();
});
