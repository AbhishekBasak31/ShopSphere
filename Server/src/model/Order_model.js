import mongoose from "mongoose";
import { SCHEMA } from "../utils/Constants.js";

const Order_model= new SCHEMA({
    product_name:{
        type: String,
        required: true,
    },
    product_id:{
        type: mongoose.Types.ObjectId,
        ref:"Product_Data"
    },
    order_address:{
        type: String,
        required: true,
    },
    total_price :{
        type:Number,
        require:true,
    },
    order_quantity:{
        type:Number,
        require:true,
    },
    buyer_id:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
    seller_id:{
        type: mongoose.Types.ObjectId,
        ref:"Seller"
    }
},
{timestamps:true}
);
export const Order_Data= mongoose.model("Order_Data",Order_model);