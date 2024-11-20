import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../../components/Global/Header/Header.jsx";
import Footer from "../../../components/Global/Footer/Fotter.jsx";

function Seller(){
    let isSellerLogin=()=>{
        if(localStorage.getItem("sellerId")){
            return true;
        }
        else{
            return false;
        }
    }
    console.log(isSellerLogin());
    return(
        <div>
            <Header/>
            {isSellerLogin()?<Outlet/>:<Navigate to={"/seller/auth"}/>}
            
        </div>   
    )
}
export default Seller;