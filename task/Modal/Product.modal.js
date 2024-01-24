
import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
      name:{
            type:String,
            require:true
      },
      price:{
            type:Number,
            require:true
      },
      category:{
            type:String,
            require:true
      },
      image:{
            type:String,
            require:true
      },
      description:{
            type:String,
            require:true

      },
      userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
})

export default mongoose.model("Product",productSchema)