import express from "express";
import { Deleted_product, addProduct,Product_by_Catagory,Product_by_Id,Getrandomproducts} from "../controller/Product_controller.js";
import { upload } from "../middleware/multer_middleware.js";
const Product_Routes= express.Router();
Product_Routes.post("/",upload.fields([
    {
        name:"Img_path",
        maxCount:1
    }
]), addProduct);
Product_Routes.delete("/:id",Deleted_product);
Product_Routes.post("/catagories",Product_by_Catagory)
Product_Routes.get("/randoms",Getrandomproducts);
Product_Routes.get("/:id",Product_by_Id);



export default Product_Routes;