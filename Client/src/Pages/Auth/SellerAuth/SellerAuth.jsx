import React, { useState } from "react";
import { Box, Button, TextField, Typography,IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from "react-router-dom";
import { BusinessDeal } from "../../../components/Svg/Svg.jsx";
import Login_Signup from "../../../components/resuablecomp/Login_singup_form.jsx";
import { sendSellerdata } from "../../../ApiRoutes.js";
import { useDispatch } from "react-redux";
import { sellerAction } from "../../../Store/Store.jsx";

function SellerAuth(){
    const dispatch = useDispatch();
    const navigate=useNavigate();
    async function onReceived(data){
        dispatch(sellerAction.login())
        if(data.token){
            localStorage.setItem("sellerId",data.seller._id);
            localStorage.setItem("sellerToken",data.token);
        }
        localStorage.setItem("sellerId",data.seller._id);
        navigate("/")

    }


    const Login_SignUp_text={
    switchedLogin:"Switch to Log in",
    switchedSingUp:"New Seller? Sign in",
    loginHeading:"Log in your self",
    signupHeading:"Join with us",
    loginSubtext:"and bring your business at online and growth un boundly",
    signUpSubtext:"and start selling your goods , with an effective prices",
    signUpButtontext:"Sign in",
    loginButtontext:"Log in"
   };

    function getData(data,isSingUp){
    sendSellerdata(data,isSingUp).then(onReceived).catch(err=>console.log(err));
   }
    return(
        <>
            <Login_Signup SVG_image={<BusinessDeal Width={"300"} Height={"300"}/>} Text={Login_SignUp_text} SendData={getData}/>
          
        </>
    )
}
export default SellerAuth;
