import mongoose from 'mongoose';
import {SCHEMA} from'../utils/Constants.js'

const Cart_model=new SCHEMA({
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    product_id:{
        type:mongoose.Types.ObjectId,
        ref:"Product_Data"
    }
},
{timestamps:true}
);
export const Cart_data=mongoose.model("Cart_data",Cart_model);