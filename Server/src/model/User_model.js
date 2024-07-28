import mongoose from 'mongoose';
import { SCHEMA } from '../utils/Constants.js';

const User_Model= new SCHEMA({
        user_name:{
            type: String,
            required: true,
            unique: true
        },
        user_email:{
            type: String,
            required: true,
            unique: true
        },
        user_mobile_no:{
            type: Number,
            required: true,
            unique: true
        },
        user_password:{
            type: String,
            required: true,

        },
       user_address:{
            type: String,
            required: true,
        },
        orders:[{
            type:mongoose.Types.ObjectId,
            ref:"Order_Data"
        }],
},{timestamps:true}
);

export const User=mongoose.model("User",User_Model);