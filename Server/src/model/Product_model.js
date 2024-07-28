import mongoose from "mongoose";
import { SCHEMA } from "../utils/Constants.js";
const Product_model= new SCHEMA({
    product_name:{
        type:String,
        required:true,

    },
    product_description:{
        type:String,
        required:true,
    },
    product_catagory:{
        type:String,
        required:true,
    },
    product_price:{
        type:Number,
        required:true,
        
    },
    product_quantity:{
        type:Number,
        required:true,
    },
    product_img:{
        type:String,
        required:true,
    },
    seller:{
        type:mongoose.Types.ObjectId,
        ref:"Seller"
    },
    orders:[{
        type:mongoose.Types.ObjectId,
        ref:"Order_Data"
    }],
    wishlist:[{
        type:mongoose.Types.ObjectId,
        ref:"Wishlist_Data"
    }]


},
{timestamps:true}
);
export const Product_Data= mongoose.model("Product_Data",Product_model);