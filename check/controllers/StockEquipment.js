import StockEquipment from "../models/StockEquipment.js"

 export const CreateStock = async (req, res)=>{
    
    try{
        const {slug, title, imageUrl, specifications } = req.body
        if(!slug || !title || !imageUrl || !specifications){
        return res.status(400).json({message:"Fill required One"})
        }
      let specsArray = [];

if (Array.isArray(specifications)) {
  specsArray = specifications.filter(
    (item) => item.label && item.value
  );
}

const equipment = await StockEquipment.create({
  slug,
  title,
  imageUrl,
  specifications: specsArray,
});

        res.status(200).json(equipment)



    }catch(error){
        res.status(500).json({message:error.message})

    }

}




export const GetStockProducts = async(req, res)=>{
   try{
     const allStockProducts = await StockEquipment.find()
    if (allStockProducts.length === 0) {
    return res.status(404).json({ message: "No Products" });
}
    res.status(200).json(allStockProducts)

   }catch(error){
    res.status(500).json({message:error.message})

   }
}

export const GetSingleProduct = async(req, res)=>{
    try{
        const {slug} = req.params
        if(!slug){
            return res.status(400).json({message:"Check Your Slug"})
        }

        const SingleStockProduct = await StockEquipment.findOne({slug})
        if(!SingleStockProduct){
            return res.status(400).json({message:"No Products Available"})
        }
        res.status(200).json(SingleStockProduct)

    }catch(error){
        res.status(500).json({message:error.message})
    }
}

