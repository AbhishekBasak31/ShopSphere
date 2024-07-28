import { Product_Data } from "../model/Product_model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { Seller } from "../model/Seller_model.js";
import { uploadOnCloudinary } from "../utils/Coudinary.js";

export const addProduct = async (req, res) => {
  //Token fetching
  const sellerToken = req.headers.authorization.split(" ")[1];
  console.log(sellerToken);
  console.log(typeof sellerToken);
  // Authentication
  let seller_id;
  jwt.verify(sellerToken, process.env.JWT_SECRET_KEY, (err, decrepted) => {
    if (err) {
      return res.status(404).json({ jwt_error: err });
    } else {
      console.log(`Decrepted seller id: ${decrepted.id}`);
      seller_id = decrepted.id;
      return;
    }
  });
  // Add product
  const {
    product_name,
    product_description,
    product_catagory,
    product_price,
    product_quantity,
    
  } = req.body;
  if (
    !product_name &&
    product_name.trim() === "" &&
    !product_description &&
    product_description.trim() === "" &&
    !product_catagory &&
    product_catagory.trim() === "" &&
    !product_price &&
    product_price === undefined &&
    !product_quantity &&
    product_quantity === undefined
  ) {
    return res.status(422).json({error:"Product's data missing"});
  }
  console.log(product_name,
    product_description,
    product_catagory,
    product_price,
    product_quantity,)
  const product_img_path=req.files?.Img_path[0]?.path;
  console.log(product_img_path)
  if(!product_img_path) return res.status(422).json({error:"Product image path missing"});

  const image= await uploadOnCloudinary(product_img_path)
  if(!image) return res.status(422).json({error:"Image is missing"});
  console.log(image.url)
    let product;
    try{
        product= new Product_Data({product_name,
          product_description,
          product_catagory,
          product_price,
          product_quantity,
          product_img:image.url,
          seller:seller_id});
        const seasons=await mongoose.startSession();
        const seller=await Seller.findById(seller_id);
        seasons.startTransaction();
        await product.save({seasons});
        seller.products.push(product);
        await seller.save({seasons});
        seasons.commitTransaction();
    }
    catch(err){
        console.error({Failed_to_add_product:err});
    }
    if(!product){
        return res.status(505).json({error:"product detail not found"});
    }

    return res.status(200).json({message:"Successfully addded product",product});
  
};

// Delete Product

export const Deleted_product=async(req, res)=>{
    const id=req.params.id;
    if(!id&&id.trim()===""){
        return res.status(404).json({error:"product id not found"});
    }
    let product;
    try{
        product=await Product_Data.findByIdAndDelete(id).populate("seller");
        const season= await mongoose.startSession();
        season.startTransaction();
        await product.seller.products.pull(product);
        await product.seller.save(season);
        season.commitTransaction();
    }
    catch(err){
        console.error({Failed_to_delete_product:err});
    }
    if(!product){
        return res.status(505).json({error:"deleted product data not found"})
    }
    return res.status(200).json({message:"Succesfully Delleted"})
};

// Product by catagory
export const Product_by_Catagory=async(req,res)=>{
  const category=req.body.category;
  const pipeline=[{

    $match:{
      product_catagory:category
    }
  }]

  Product_Data.aggregate(pipeline).
  then(result=>{
    if(!result){
      return res.status(505).json({error:"Product catgory not found"})
    }
    return res.status(200).json({message:"Successfully fetched",result})
  }).
  catch(err=>{console.error({Failed_to_getproduct_by_catagory:err})})
}

// Product by id
export const Product_by_Id= async(req,res)=>{
  const id=req.params.id;
  console.log(id);
  if(!id&&id.trim()===""){
    return res.status(404).json({error:"Product id not found"});
  }
  let product;
  try{
    product=await Product_Data.findById(id).lean();
  }
  catch(err){
    console.log(err)
  }
  if(!product){
    return res.status(505).json({error:"Perticular product by the product id not found"});
  }
  return res.status(200).json({message:"Successfully fetched ",product})
  }


  
  export const Getrandomproducts = async (req, res) => {
    try {
      const pipeline = [
        { $sample: { size: 5 } } // Randomly select 5 documents
      ];
  
      const products = await Product_Data.aggregate(pipeline);
      if (!products || products.length === 0) {
        return res.status(404).json({ error: 'No products found' });
      }
      return res.status(200).json({ message: 'Successfully fetched', products });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }