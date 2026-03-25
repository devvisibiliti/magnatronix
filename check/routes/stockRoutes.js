import express from "express"
import upload from "../middlewares/multer.js"
import {CreateStock, GetSingleProduct, GetStockProducts} from "../controllers/StockEquipment.js"
import { UploadStockImage } from "../controllers/UploadStockImage.js"

const router = express.Router()

router.post("/uploadstockimage",upload.single("file"), UploadStockImage)
router.post("/", CreateStock)
router.get("/", GetStockProducts)
router.get("/:slug", GetSingleProduct)



export default router