import { Wishlist_Data } from "../model/Wishlist_model.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { Product_Data } from "../model/Product_model.js";
import { User } from "../model/User_model.js";

 
export const Additem = async (req, res) => {
  // Token fetching
  const userToken = req.headers.authorization.split(" ")[1];
  console.log(`Token ${userToken}`);
  console.log(typeof userToken);
  // Authentication
  let User_id;
  jwt.verify(userToken, process.env.JWT_SECRET_KEY, (err, decrepted) => {
    if (err) {
      return res.status(404).json({ jwt_error: err });
    } else {
      console.log(`Decrepted user id:${decrepted.id}`);
      User_id = decrepted.id;
      return;
    }
  });
  // Add item

  const { product_name, product_description, product_id } = req.body;
  if(!product_name&&product_name.trim()===""&&!product_description&&product_description.trim()===""&&!product_id&&product_id.trim()==="") 
  {
    return res.status(422).json({error:"Product's data missing"});
  }
  let user= await User.findById(User_id);
  let product= await Product_Data.findById(product_id);
  if(!user){
    return res.status(404).json({error:"User not found"});
  }
  else if(!product){
    return res.status(404).json({error:"Product not found"});
  }
  else{

  
  let Wishlist;
  try{
    Wishlist = new Wishlist_Data({product_name,product_description,user_id:User_id,product_id,});
    const seasons= await mongoose.startSession();
    seasons.startTransaction();
    await Wishlist.save({seasons});
    user.wishlist.push(Wishlist);
    product.wishlist.push(Wishlist);
    await user.save({seasons});
    await product.save({seasons});
    seasons.commitTransaction();
  }
  catch(err){
    console.error({Failed_to_add_in_wishlist:err});
  }
  if(!Wishlist){
    return res.status(505).json({error:"Wish list data not found "});
  }
  return res.status(200).json({message:"Successfully added in wish list",Wishlist});
}
};

// Delete item from wish list
export const deleteitem= async(req, res)=>{
    const id = req.params.id;
    if(!id&&id.trim()===""){
        return res.status(404).json({error:"wish list item id not found"});
    }
    let Wishlist;
    try{
        Wishlist= await Wishlist_Data.findByIdAndDelete(id).populate("user_id product_id");
        const seasons= await mongoose.startSession();
        seasons.startTransaction();
        await Wishlist.user_id.wishlist.pull(Wishlist);
        await Wishlist.product_id.wishlist.pull(Wishlist);
        await Wishlist.user_id.save(seasons);
        await Wishlist.product_id.save(seasons);
        seasons.commitTransaction();

    }
    catch(err){
        console.error({Failed_to_delete_wishlist_items:err});
    }
    if(!Wishlist){
        return res.status(505).json({error:""});
    }
    return res.status(200).json({message:"Successfully deleted from wishlist"});
}
