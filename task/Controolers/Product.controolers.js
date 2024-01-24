import ProductModal from "../Modal/Product.modal.js";

export const addProduct = async(req,res) =>{
      try {
            const { name, price, image, category, description} = req.body;
            const {token}  = req.body;
            if(!name || !image || !category || !price  || !description)
            return res.status(404).json(
      {success:false, message:"All fields are mandtory"})
      // console.log(name,price,image,category,token)
      const productData = new ProductModal({name,price,image,category,userId:userId})
      const decodedData = jwt.verify(token,process.env.JWT_SECRET)
      if(!decodedData){
            return res.status(404).json({success:false,message:" Not valid token "})
      }
      const userId = decodedData .userId

      const product = new ProductModal({name,price,image,category,  description,userId:userId})
       await product.save();
       return res.status(201).json({success:true,message:"Product Created...."})
      } catch (error) {
            return res.status(500).json({ success:false,message:error.message })
            
      }
}


export const  getByHandle = async(req,res) =>{
      try {
            const {token} = req.body;
            const decodedData = jwt.verify(token,process.env.JWT_SECRET)
            if(!decodedData){
                  return res.status(404).json({success:false,message:"Token not valid"})
            }
            const userId = decodedData?.userId
            const yourProducts = await ProductModal.find({userId})

                     // console.log(yourProducts,"yourProducts" )
             if(yourProducts){
                  return res.status(200).json({success:true,message:"All Your Product"})
             }
      } catch (error) {
            return res.status(500).json({ success:false,message:error.message })

            
      }
}



  export const update = async(req,res)=>{
      try {
  const { productId, name, image, price, category, description, token } = req.body;
  if(!token)
          if (!token) return res.status(404).json({ status: "error", message: "Token is mandtory.." })
if(decodedData){
 return res.status(404).json({ status: "error", message: "Token not valid." })
}

const userId = decodedData.userId;   
      const updatedProduct = await ProductModal.findOneAndUpdate({ _id: productId, userId: userId }, { name, image, price, category, description }, { new: true })
               if (updatedProduct) {
                  return res.status(200).json({ status: "Success", product: updatedProduct })
                     }
                     return res.status(404).json({ status: "error", message: "You are trying to update product which is not yours.." })    
      } catch (error) {
            return res.status(500).json({status:"error",error:error.message})
            
      }
  }

  export const  deleteproduct = async (req,res) =>{
      const{ productId, token} = req.body;
      if(!productId) return res.staus(404).json({success:error,message:"product Id is require"})
       const decodedData = jwt.verify(token,process.env.JWT_SECRET)
      const userId = decodedData;
      const isDeleted = await ProductModal.findOneAndDelete({_id: productId,userId:userId})
      if(isDeleted){
            return res.status(200).json({success:true,message:"Product Delite "})
      }
      // throw new  error ("Mongodb error")
      try {     
      } catch (error) {
            return res.status(500).json({status:"error",error:error.message})
            
      }
  }

  export const createCategory = async (req, res) => {
      try {
        const { name, description } = req.body;
        const category = new   category({ name, description });
        await category.save();
        res.status(200).json({ message: 'Category created successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

    export  const getAllCategories = async (req, res) => {
      try {
        const categories = await category.find();
        res.status(200).json(categories);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };



