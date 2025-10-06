import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    usrName:{
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        required: true
    },
    clerkID:{
        type: String,
        required: true,
        unique: true
    },
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)