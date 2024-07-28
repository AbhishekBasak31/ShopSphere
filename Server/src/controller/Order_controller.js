import { Order_Data } from "../model/Order_model.js";
import mongoose from "mongoose";
import { Seller } from "../model/Seller_model.js";
import { Product_Data } from "../model/Product_model.js";
import jwt from "jsonwebtoken";
import { User } from "../model/User_model.js";

const verifyJwt = async (token, secretKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};

export const Make_order = async (req, res) => {
  // User data fetching
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(404).json({ error: "Authorization header not found" });
  }

  const userToken = authHeader.split(" ")[1];
  if (!userToken || userToken.trim() === "") {
    return res.status(404).json({ error: "User token not found" });
  }

  let user_id;
  try {
    const decrypted = await verifyJwt(userToken, process.env.JWT_SECRET_KEY);
    console.log(`Decrypted user ID: ${decrypted.id}`);
    user_id = decrypted.id;
  } catch (err) {
    console.error("JWT verification error:", err);
    return res.status(404).json({ Jwt_error: err.message });
  }

  // Creating Order
  const { product_name, product_id, seller_id, order_quantity,total_price  } = req.body;
  if (
    !product_name || product_name.trim() === "" ||
    !product_id || product_id.trim() === "" ||
    !seller_id || seller_id.trim() === "" ||
    !order_quantity||!total_price
  ) {
    return res.status(404).json({ message: "Order data not found" });
  }

  let buyer, retailer, product;
  try {
    [buyer, retailer, product] = await Promise.all([
      User.findById(user_id),
      Seller.findById(seller_id),
      Product_Data.findById(product_id)
    ]);

    if (!buyer) {
      return res.status(404).json({ error: "Buyer data not found" });
    } else if (!retailer) {
      return res.status(404).json({ error: "Seller data not found" });
    } else if (!product) {
      return res.status(404).json({ error: "Product data not found" });
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    return res.status(500).json({ error: "Failed to fetch data" });
  }

  let order;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    order = new Order_Data({
      product_name,
      product_id,
      order_address: buyer.user_address,
      total_price,
      order_quantity,
      buyer_id: buyer._id,
      seller_id,
    });
    await order.save({ session });

    buyer.orders.push(order);
    retailer.orders.push(order);
    product.orders.push(order);

    await buyer.save({ session });
    await retailer.save({ session });
    await product.save({ session });

    await session.commitTransaction();
  } catch (err) {
    await session.abortTransaction();
    console.error("Failed to create order:", err);
    return res.status(500).json({ Failed_to_order: err.message });
  } finally {
    session.endSession();
  }

  if (!order) {
    return res.status(505).json({ error: "Order data not found" });
  }

  return res.status(200).json({ message: "Successfully order placed", order });
};

export const Multiple_order = async (req, res) => {
  // User data fetching
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(404).json({ error: "Authorization header not found" });
  }

  const userToken = authHeader.split(" ")[1];
  if (!userToken || userToken.trim() === "") {
    return res.status(404).json({ error: "User token not found" });
  }

  let user_id;

  try {
    const decrypted = await verifyJwt(userToken, process.env.JWT_SECRET_KEY);
    console.log(`Decrypted user ID: ${decrypted.id}`);
    user_id = decrypted.id;
  } catch (err) {
    console.error("JWT verification error:", err);
    return res.status(404).json({ Jwt_error: err.message });
  }

  // Creating order
  let buyer, retailer, product;
  let products = [];
  products = req.body;

  if (products === null || products.length === 0) {
    return res.status(404).json({ message: "Orders are missing" });
  }

  // Validation of products
  for (let item of products) {
    if (!item.product_name || item.product_name.trim() === "" ||
      !item.product_id || item.product_id.trim() === "" ||
      !item.seller_id || item.seller_id.trim() === "" ||
      !item.order_quantity || !item.total_price) {
      return res.status(404).json({ message: "Order data not found" });
    }
  }

  // Start session for transaction
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    // Fetching buyer data
    buyer = await User.findById(user_id).session(session);
    if (!buyer) {
      await session.abortTransaction();
      return res.status(404).json({ error: "Buyer data not found" });
    }
// Processing each product order
for (let item of products) {
  // Fetching retailer and product data
  retailer = await Seller.findById(item.seller_id).session(session);
  product = await Product_Data.findById(item.product_id).session(session);

  if (!retailer) {
    await session.abortTransaction();
    return res.status(404).json({ error: `Seller data not found for seller_id: ${item.seller_id}` });
  } else if (!product) {
    await session.abortTransaction();
    return res.status(404).json({ error: `Product data not found for product_id: ${item.product_id}` });
  }

  // Creating order document
  const order = new Order_Data({
    product_name: item.product_name,
    product_id: item.product_id,
    order_address: buyer.user_address,
    total_price: item.total_price,
    order_quantity: item.order_quantity,
    buyer_id:user_id,
    seller_id: item.seller_id,
  });

  // Saving order
  await order.save({ session });

  // Updating buyer, retailer, and product with order reference
  buyer.orders.push(order._id);
  retailer.orders.push(order._id);
  product.orders.push(order._id);

  // Saving updates
  await buyer.save({ session });
  await retailer.save({ session });
  await product.save({ session });
}

// Committing transaction
await session.commitTransaction();
session.endSession();

return res.status(200).json({ message: "Successfully placed orders", orders: products });

} catch (err) {
// Aborting transaction in case of error
await session.abortTransaction();
session.endSession();
console.error("Failed to create orders:", err);
return res.status(500).json({ error: "Failed to create orders" });
}
};

// Canceled/deleted order 

export const order_Cancle=async(req, res) => {
    const id=req.params.id;
    if(!id&&id.trim()===""){
        return res.status(404).json({error:"order id not found"});
    }
    let order;
    try{
        order=await Order_Data.findByIdAndDelete(id).populate("product_id buyer_id seller_id");
        const seasons= await mongoose.startSession();
        seasons.startTransaction();
        await order.product_id.orders.pull(order);
        await order.buyer_id.orders.pull(order);
        await order.seller_id.orders.pull(order);
        await order.product_id.save(seasons);
        await order.buyer_id.save(seasons);
        await order.seller_id.save(seasons);
        seasons.commitTransaction();
    }
    catch(err){
        console.error({Failed_to_order_data:err});
    }
    if(!order){
        return res.status(505).json({error:"Deleted order data not found"});
    }
    return res.status(200).json({message:"Succesfully order cancled/deleted"});

};

// Get all placed orders
export const get_all_orders=async(req,res)=>{
 try{
  const user_id=req.params.id;
  if(!user_id&&user_id.trim()===""){
      return res.status(404).json({error:"user id not found"});
  }
  const objectIdUserId = new mongoose.Types.ObjectId(user_id);
  const pipeline=[
    {
      $match: {
        buyer_id: objectIdUserId
      }
    },
    {
      $lookup: {
        from: 'product_datas',
        localField: 'product_id',
        foreignField: '_id',
        as: 'product_details'
      }
    },
    {
      $lookup: {
        from: 'users',
        localField: 'buyer_id',
        foreignField: '_id',
        as: 'buyer_details'
      }
    },
    {
      $lookup: {
        from: 'sellers',
        localField: 'seller_id',
        foreignField: '_id',
        as: 'seller_details'
      }
    },
    {
      $unwind: {
        path: '$product_details',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $unwind: {
        path: '$buyer_details',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $unwind: {
        path: '$seller_details',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $project: {
        _id: 1,
        product_name: 1,
        order_address: 1,
        order_quantity: 1,
        total_price:1,
        createdAt: 1,
        updatedAt: 1,
        'product_details._id': 1,
        'product_details.product_price': 1, // include relevant product fields
        'product_details.product_img': 1, // include relevant product fields
        'product_details.product_catagory': 1, // include relevant product fields
        'buyer_details._id': 1,
        'buyer_details.user_name': 1, // include relevant buyer fields
        'seller_details._id': 1,
        'seller_details.seller_name': 1 ,// include relevant seller fields
        'seller_details.seller_email': 1 // include relevant seller fields

      }
    }
  ]

  const result = await Order_Data.aggregate(pipeline);
  
  if (!result || result.length === 0) {
    return res.status(404).json({ error: "Cart data not found" });
  }

  return res.status(200).json({ message: "Successfully fetched order details", result });
}catch (err) {
    console.error("Failed to get Total price :", err);
    return res.status(500).json({ error: "Internal server error" });
  }

}