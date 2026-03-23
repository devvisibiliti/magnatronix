import mongoose from "mongoose"

const StockEquipmentSchema = new mongoose.Schema({
    slug:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,

    },
    imageUrl:{
        type:String,
        required:true,

    },
    specifications:[{
        label:{
            type:String,

        },
        values:{
            type:String
        }
    }]

}

)

export default mongoose.model("StockEquipment", StockEquipmentSchema)