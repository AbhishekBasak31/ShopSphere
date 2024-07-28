import express from "express";
import { get_all_orders, Make_order, order_Cancle,Multiple_order } from "../controller/Order_controller.js";

const Order_Routes=express.Router();
Order_Routes.post("/",Make_order);
Order_Routes.post("/multiple",Multiple_order);
Order_Routes.delete("/:id",order_Cancle);
Order_Routes.get("/:id",get_all_orders);



export default Order_Routes;