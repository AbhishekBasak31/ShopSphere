import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import DB_Connection from "./src/databases/Database.js";
import UserRoutes from "./src/routes/User_routes.js";
import Seller_Routes from "./src/routes/Seller_routes.js";
import Product_Routes from "./src/routes/Product_routes.js";
import Order_Routes from "./src/routes/Order_routes.js";
import Wishlist_Routes from "./src/routes/Wishlist_routes.js";
import Cart_Routes from "./src/routes/Cart_routes.js";

dotenv.config({
    path:"./"
})
const app = express();
const port=process.env.PORT || 8040;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/Users",UserRoutes);
app.use("/Users/:id",UserRoutes);
app.use("/Users/Signin",UserRoutes);
app.use("/Users/Login",UserRoutes);

app.use("/Sellers",Seller_Routes);
app.use("/Sellers/:id",Seller_Routes);
app.use("/Sellers/Signin",Seller_Routes);
app.use("/Sellers/Login",Seller_Routes);
app.use("/Sellers/products/:id",Seller_Routes);


app.use("/Products",Product_Routes);
app.use("/Products/catagories",Product_Routes);
app.use("/Products/randoms",Product_Routes);
app.use("/Products",Product_Routes);



app.use("/Orders",Order_Routes);
app.use("/Orders/multiple",Order_Routes);
app.use("/Orders/:id",Order_Routes);

app.use("/Wishlist",Wishlist_Routes);
app.use("/Wishlist/:id",Wishlist_Routes);

app.use("/Addcart",Cart_Routes);
app.use("/Addcart/:id",Cart_Routes);
app.use("/Addcart/total/:id",Cart_Routes);


DB_Connection();
app.listen(`${port}`,()=>{
    console.log(`Server is listening on : http://localhost:${port}`);
})
