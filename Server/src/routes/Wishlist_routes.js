import express from 'express';
import { Additem, deleteitem } from "../controller/Wishlist_controller.js";
const Wishlist_Routes=express.Router();
Wishlist_Routes.post("/",Additem);
Wishlist_Routes.delete("/:id",deleteitem);

export default Wishlist_Routes;

