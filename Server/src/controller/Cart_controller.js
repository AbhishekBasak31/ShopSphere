import { Cart_data } from "../model/Cart_model.js";
import mongoose from "mongoose";

export const AddToCart= async(req,res)=>{
    const{user_id,product_id}= req.body;
    if(!user_id&&user_id.trim()===""&&
    !product_id&&product_id.trim()===""
        ){
            return res.status(404).json({message:"No user id and product is found"});
        }
    let Cart;
    try{
        Cart=new Cart_data({
            user_id,
            product_id
        });
        await Cart.save()
    }
    catch(err){
        console.error({Failed_to_add_in_cart:err});
    }
    if(!Cart){
        return res.status(505).json({error:"Cart data not found"});
    }
    return res.status(200).json({message:"Succesfully added in cart",Cart})
}

export const RemoveFromCart= async(req,res)=>{
    const id=req.params.id;
    if(!id&&id.trim()===""){
        return res.status(404).json({error:"cart item id not found"});
    }
    let Cart;
    try{
        Cart=await Cart_data.findByIdAndDelete(id)
    }
    catch(err){
        console.error({Failed_to_remove_item_from_cart:err});
    }
    if(!Cart){
        return res.status(505).json({error:"Deleted cart item data not found"});
    }
    return res.status(200).json({message:"successfully deleted from cart"})
}
export const ShowCartItem = async (req, res) => {
    try {
      const userId = req.params.id;
      console.log(userId);
  
      if (!userId && userId.trim() === "") {
        return res.status(404).json({ error: "User id not found" });
      }
  
      const objectIdUserId = new mongoose.Types.ObjectId(userId);
  
      const pipeline = [
        // Match the documents for the specific user
        {
          $match: { "user_id": objectIdUserId }
        },
        // Join the cart collection with the product_datas collection
        {
          $lookup: {
            from: "product_datas",
            localField: "product_id",
            foreignField: "_id",
            as: "productDetails"
          }
        },
        // Unwind the joined array to de-normalize it
        {
          $unwind: "$productDetails"
        },
        // Project the fields you want to include in the result
        {
          $project: {
            _id: 1,
            "productDetails._id": 1,
            "productDetails.product_name": 1,
            "productDetails.product_description": 1,
            "productDetails.product_catagory": 1,
            "productDetails.product_price": 1,
            "productDetails.product_img": 1,
            "productDetails.seller": 1,

          }
        }
      ];
  
      const result = await Cart_data.aggregate(pipeline);
  
      if (!result || result.length === 0) {
        return res.status(404).json({ error: "Cart data not found" });
      }
  
      return res.status(200).json({ message: "Successfully fetched", result });
  
    } catch (err) {
      console.error("Failed to get cart data:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  export const ShowTotal=async(req,res)=>{
    try{
        const userId = req.params.id;
        console.log(userId);
        if (!userId && userId.trim() === "") {
            return res.status(404).json({ error: "User id not found" });
          }
          const objectIdUserId = new mongoose.Types.ObjectId(userId);

          const pipeline=[
            // Match the documents for the specific user
            {
              $match: { "user_id": objectIdUserId }
            },
            // Join the cart collection with the products collection
            {
              $lookup: {
                from: "product_datas",
                localField: "product_id",
                foreignField: "_id",
                as: "productDetails"
              }
            },
            // Unwind the joined array to de-normalize it
            {
              $unwind: "$productDetails"
            },
            // Group by user_id and calculate the total price
            {
              $group: {
                _id: "$user_id",
                totalPrice: { $sum: "$productDetails.product_price" }
              }
            }
          ]

      const result = await Cart_data.aggregate(pipeline);
  
      if (!result || result.length === 0) {
        return res.status(404).json({ error: "Cart data not found" });
      }
  
      return res.status(200).json({ message: "Successfully fetched", result });
    }catch (err) {
        console.error("Failed to get Total price :", err);
        return res.status(500).json({ error: "Internal server error" });
      }
  }