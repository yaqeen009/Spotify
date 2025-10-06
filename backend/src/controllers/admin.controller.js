import { Album } from "../models/album.model.js"
import { Song } from "../models/song.model.js"
import cloudinary from "../lib/cloudinary.js"


const uploadToCloudinary = async (file) => {
    try {
      const result = await cloudinary.uploader.upload(file.tempFilePath, {
        resource_type: "auto",
      })  

      return result.secure_url
    } catch (error) {
        console.log("Couldn't upload file", error);
        throw new Error("Error uploading to cloudinary")
    }
}

//creating songs
export const createSong = async (req, res, next) => {
    try {
        if (!req.files || !req.files.audioFile || !req.files.imageFile) {
            res.status(400).json({message: "Please upload all files"})
        }

        const {title, artist, albumId, duration} = req.body
        const audioFile = req.files.audioFile 
        const imageFile = req.files.imageFile

        const audioUrl = uploadToCloudinary(audioFile)
        const imageUrl = uploadToCloudinary(imageFile)

        const song = new Song({
            title,
            artist,
            albumId,
            duration,
            imageUrl,
            audioUrl,
            albumId: albumId || null
        })

        await song.save()

        //update the album's song array if the created song belongs to it
        if (albumId) {
            await Album.findByIdAndUpdate({
                $push: {songs: song._id}
            })
        }

        res.status(201).json(song)

    } catch (error) {
        console.log("Couldn't create song", error);
        next(error)
    }
}