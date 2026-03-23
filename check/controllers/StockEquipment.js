import StockEquipment from "../models/StockEquipment.js"

const CreateStock = async (req, res)=>{
    
    try{
        const {slug, title, imageUrl, specifications } = req.body
        if(!slug || !title || !imageUrl || !specifications){
           return res.status(400).json({message:"Fill required One"})
        }
        const equipment = await StockEquipment.create({
            slug,title,imageUrl,specifications
        })

        res.status(200).json(equipment)



    }catch(error){
        res.status(500).json({message:error.message})

    }

}

export default CreateStock