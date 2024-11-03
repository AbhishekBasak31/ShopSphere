import React, { useState } from "react";
import { ShoppingBags } from "../../../components/Svg/Svg.jsx";
import Login_Signup from "../../../components/resuablecomp/Login_singup_form.jsx";
import { sendUserdata } from "../../../ApiRoutes.js";
import{useDispatch}from'react-redux';
import { userAction } from "../../../Store/Store.jsx";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import AlertBox from "../../../components/resuablecomp/AlertBox.jsx";



function UserAuth(){
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [alertData, setAlertData] = useState(null); 
    async  function onReceived(data){
        console.log(data);
        if(data!=null|| data!=undefined){
            setAlertData({
                severity: "success",
                message: "Congratulations, you have successfully signed up."
              });
              if(data.token){
                    console.log(data.token);

                    console.log(data.user._id);
                    localStorage.setItem("userId",data.user._id);
                    localStorage.setItem("userToken",data.token);
                    dispatch(userAction.login());
                    navigate("/");
                }
        }
        else{
            setAlertData({
                severity: "error",
                message: "Unfortunately, signup failed."
              });
        }
        
        // 
        
        // 
        // localStorage.setItem("userId",data.user._id)
        // navigate("/")
    }
   

    const Login_SignUp_text={
        switchedLogin:"Already have an account? Sign in",
        switchedSingUp:"new user ? Sign up",
        loginHeading:"Log in your self",
        signupHeading:"Looks like you are new user Sign up your self",
       
        loginSubtext:"and get the access on your orders, wishlist & recommendations",
        signUpSubtext:" and start shopping.",
       
        signUpButtontext:"Sign up",
        loginButtontext:"Log in"
    }
    async function getData(data,isSingUp){
        console.log(data);
        console.log(isSingUp);
        sendUserdata(data,isSingUp).then(onReceived).catch(err=>console.log(err))
        
    }
    return(
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} py={5} mt={8} gap={3} bgcolor={"white"}>
            {alertData && (
                <AlertBox  alertData={alertData}/>
            )}
        
            <Login_Signup SVG_image={<ShoppingBags Width={"300"} Height={"300"}/>}  Text={Login_SignUp_text} SendData={getData} alertData={alertData}/>
          
         </Box>
    )
}
export default UserAuth;