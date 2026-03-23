import express from "express"
import CreateStock from "../controllers/StockEquipment.js"

const router = express.Router()

router.post("/", CreateStock)


export default router