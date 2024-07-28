import express from "express";
import { AddToCart,RemoveFromCart, ShowCartItem, ShowTotal } from "../controller/Cart_controller.js";
const Cart_Routes=express.Router();
Cart_Routes.post("/",AddToCart);
Cart_Routes.delete("/:id",RemoveFromCart);
Cart_Routes.get("/:id",ShowCartItem);
Cart_Routes.get("/total/:id",ShowTotal);

export default Cart_Routes;

