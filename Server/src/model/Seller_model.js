import mongoose from 'mongoose';
import {SCHEMA} from'../utils/Constants.js'

const Seller_model=new SCHEMA({
    seller_name:{
        type:String,
        required:true,

    },
    seller_email:{
        type: String,
        required: true,
        unique: true
    },
    seller_mobile_no:{
        type: Number,
        required: true,
        unique: true
    },
    seller_password:{
        type: String,
        required: true,

    },
    seller_address:{
        type: String,
        required: true,
    },
    orders:[{
        type:mongoose.Types.ObjectId,
        ref:"Order_Data"
    }],
    products:[{
        type:mongoose.Types.ObjectId,
        ref:"Product_Data"
    }]



},{timestamps:true})

export const Seller=mongoose.model("Seller",Seller_model);