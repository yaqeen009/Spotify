import { User } from "../models/user.model.js";

export const authCallback = async (req, res) => {
  try {
    const { id, userName, imageUrl } = req.body;

    //check if user exists
    const user = User.findOne({clerkID: id})

    //if user does not exist, handle signup
    if (!user) {
        await User.create({
            clerkID: id,
            usrName: userName,
            imgUrl: imageUrl
        })
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in auth callback", error);
    res.status(500).json({message: "Internal server error", error})
  }
};
