import express from "express"
import upload from "../middlewares/multer.js"
import imagekit from "../config/imagekit.js"

export const UploadStockImage =async (req, res)=>{
    try{
        if(!req.file)
            return res.status(401).json({message:"No File Available"})

        const result = await imagekit.upload({
            file: req.file.buffer,
            fileName: req.file.originalname,
            folder:"StockImages"

        })
        res.json({
            url:result.url

        })



    }catch(error){
        res.status(500).json({message:error.message})

    }

}