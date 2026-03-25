import mongoose from "mongoose";

const specificationSchema = new mongoose.Schema({
  label: String,
  value: String,
});

const stockEquipmentSchema = new mongoose.Schema({
  slug: String,
  title: String,
  imageUrl: String,
  specifications: [specificationSchema], // ✅ important
});

export default mongoose.model("StockEquipment", stockEquipmentSchema);