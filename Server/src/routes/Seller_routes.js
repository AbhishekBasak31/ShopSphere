import express from 'express';
import { Delete_Seller, Seller_Login, Seller_Signin, get_Seller_id, get_all_Seller,getAllproductsBysellerid } from '../controller/Seller_controller.js';

const Seller_Routes=express.Router();
Seller_Routes.get("/",get_all_Seller);
Seller_Routes.get("/:id",get_Seller_id);
Seller_Routes.get("/products/:id",getAllproductsBysellerid);
Seller_Routes.post("/Signin",Seller_Signin);
Seller_Routes.post("/Login",Seller_Login);
Seller_Routes.delete("/:id",Delete_Seller);
export default Seller_Routes;