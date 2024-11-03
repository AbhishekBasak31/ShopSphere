import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../../components/Global/Header/Header.jsx";
import Footer from "../../../components/Global/Footer/Fotter.jsx";

function User(){
    
    let isLogin=()=>{
        if(localStorage.getItem("userId")){
            return true;
        }
        else{
            return false;
        }
    }
    console.log(isLogin());
    return(
        
        <div>
          <Header/>
          {isLogin()?<Outlet/>:<Navigate to={"/user/auth"}/>}
          
        </div> 
        
        
      
    )
}
export default User;