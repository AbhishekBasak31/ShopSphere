import { Seller } from "../model/Seller_model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
const SaltRound = Number(process.env.SALTROUND);

// Seller Signin
export const Seller_Signin = async (req, res) => {
  const {
    seller_name,
    seller_email,
    seller_mobile_no,
    seller_password,
    seller_address,
  } = req.body;
  if (
    !seller_name &&
    seller_name.trim() === "" &&
    !seller_email &&
    seller_email.trim() === "" &&
    !seller_password &&
    seller_password.trim() === "" &&
    !seller_address &&
    seller_address.trim() === "" &&
    !seller_mobile_no &&
    seller_mobile_no === undefined
  ) {
    return res
      .status(404)
      .json({ error: "Seller has not provided signin data" });
  }
  const existing_seller_by_email = await Seller.findOne({ seller_email });
  const existing_seller_by_ph_no=await Seller.findOne({seller_mobile_no});
  console.log(existing_seller_by_email);
  console.log(existing_seller_by_ph_no);
  if (
    existing_seller_by_email != null &&
    Object.keys(existing_seller_by_email).length > 0
  ) {
    return res
      .status(422)
      .json({ message: "Seller by this email id is already exists" });
  }
  else if(existing_seller_by_ph_no != null &&
    Object.keys(existing_seller_by_ph_no).length > 0){
        return res
      .status(422)
      .json({ message: "Seller by this phone number is already exists" });
  }
   else {
    let seller;
    try {
      console.log(SaltRound);
      console.log(seller_password);
      const hashed_Password = bcrypt.hashSync(seller_password, SaltRound);
      console.log(hashed_Password);
      seller = new Seller({
        seller_name,
        seller_email,
        seller_mobile_no,
        seller_password: hashed_Password,
        seller_address,
      });
      await seller.save();
    } catch (err) {
      console.log({ Failed_to_Signin_seller: err });
    }
    if (!seller) {
      return res.status(500).json({ error: "failed to get seller data" });
    }
    return res.status(201).json({ message: "Successfully signin", seller });
  }
};
// Seller login
export const Seller_Login = async (req, res) => {
  const { seller_email, seller_password } = req.body;
  if (
    !seller_email &&
    seller_email.trim() === "" &&
    !seller_password &&
    seller_password.trim() === ""
  ) {
    return res
      .status(422)
      .json({ error: "Seller has not provided login data" });
  }
  let existing_seller;
  try {
    existing_seller = await Seller.findOne({ seller_email });
  } catch (err) {
    console.log({ Failed_to_get_seller_data: err });
  }
  console.log(existing_seller);
  const result = bcrypt.compareSync(
    seller_password,
    existing_seller.seller_password
  );
  if (!result) {
    return res.status(422).json({ message: "Invalid password" });
  }
  const Token = jwt.sign(
    { id: existing_seller._id },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );
  console.log(`Token:${Token}`);
  return res.status(200).json({ seller:{_id: existing_seller._id}, token: Token });
};
// Get Seller by id
export const get_Seller_id=async(req,res)=>{
    const id= req.params.id;
    if(!id&&id.trim()===""){
        return res.status(404).json({message:""});
    }
    console.log(`id: ${id}`);
    let seller;
    try{
        seller=await Seller.findById(id);
    }
    catch(err){
        console.log({Failed_to_get_seller_by_id:err});
    }
    if(!seller){
        return res.status(505).json({error:"Failed to fetch specific seller data"});
    }
    return res.status(200).json({message:"Succesfully get seller data",seller});
};
// Get all seller
export const get_all_Seller=async(req,res) => {
    let sellers;
    try{
        sellers=await Seller.find();
    }
    catch(err){
        console.log({Failed_to_get_sellers_data:err});
    }
    if(!sellers){
        return res.status(505).json({error:"Sellers data not found"});
    }
    return res.status(200).json({message:"Sellers data successfully",sellers});
};
// Delete seller
export const Delete_Seller=async(req,res) => {
    const id= req.params.id;
    if(!id&&id.trim()===""){
        return res.status(404).json({message:"seller data not found"});
    }
    console.log(`id:${id}`);
    let seller;
    try{
        seller= await Seller.findByIdAndDelete(id);
    }
    catch(err){
        console.log({Failed_to_delete_seller_data:err});
    }
    if(!seller){
        return res.status(505).json({error:"Failed to delete due to server failure"});
    }
    return res.status(200).json({message:"Deleted Succesfully"});
};

export const getAllproductsBysellerid= async(req,res) => {
  try{

  
  const sellerId=new mongoose.Types.ObjectId(req.params.id); 
  const pipeline=[
    {
      $match: {
        _id: sellerId
    }
  },
    {
      $lookup: {
        from: 'product_datas', // The name of the product collection
        localField: 'products',
        foreignField: '_id',
        as: 'productDetails',
      },
    },
    {
      $unwind: '$productDetails',
    },
    {
      $project: {
        _id: 0,
        productDetails: 1,
      },
    },
  ]
  const result = await Seller.aggregate(pipeline)
  if (!result || result.length === 0) {
    return res.status(404).json({ error: "product  data by seller id not found" });
  }
return res.status(200).json({ message: "Successfully fetched product details", result });

}
catch(err){
  console.error("Failed to get Total price :", err);
  return res.status(500).json({ error: "Internal server error" });
}
  
}