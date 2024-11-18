import React, { useState } from "react";
import { Box, Button, TextField, Typography,IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from "react-router-dom";
import { BusinessDeal } from "../../../components/Svg/Svg.jsx";
import Login_Signup from "../../../components/resuablecomp/Login_singup_form.jsx";
import { sendSellerdata } from "../../../ApiRoutes.js";
import { useDispatch } from "react-redux";
import { sellerAction } from "../../../Store/Store.jsx";
import AlertBox from "../../../components/resuablecomp/AlertBox.jsx";

function SellerAuth(){
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [alertData, setAlertData] = useState(null)
    async function onReceived(data){
        console.log(data);
        if(data!=null||data!=undefined){
            setAlertData({
                severity: "success",
                message: "Congratulations, you have successfully signed up.",
                width:'60%'
            });
            if(data.token){
                console.log(data.token);

                console.log(data.seller._id);
                localStorage.setItem("sellerId",data.seller._id);
                localStorage.setItem("sellerToken",data.token);
                dispatch(sellerAction.login())
                navigate("/")
                navigate(0);
            }
        }
        else{
            setAlertData({
                severity: "error",
                message: "Unfortunately, signup failed.",
                width:'60%'
            })
        }

    }


    const Login_SignUp_text={
    switchedLogin:"Already have an account? Sign in",
    switchedSingUp:"New Seller? Sign Up",
    loginHeading:"Sign in your self",
    signupHeading:"Join with us",
    loginSubtext:"and bring your business at online and growth un boundly",
    signUpSubtext:"and start selling your goods , with an effective prices",
    signUpButtontext:"Sign Up",
    loginButtontext:"Sign in"
   };

    function getData(data,isSingUp){
    sendSellerdata(data,isSingUp).then(onReceived).catch(err=>console.log(err));
   }
    return(
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} py={5} mt={8} gap={3} bgcolor={"white"}>
             {alertData && (
                                <AlertBox alertData={alertData}/>             
            )}
             <Login_Signup SVG_image={<BusinessDeal Width={"300"} Height={"300"}/>} Text={Login_SignUp_text} SendData={getData}/>
        </Box>
           
          
        
    )
}
export default SellerAuth;
