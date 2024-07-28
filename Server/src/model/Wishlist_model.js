import mongoose from "mongoose";
import { SCHEMA } from "../utils/Constants.js";

const Wishlist_model= new SCHEMA({
  
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:"Product_Data"
    }

},
{timestamps:true}
);
export  const Wishlist_Data = mongoose.model("Wishlist_Data",Wishlist_model);