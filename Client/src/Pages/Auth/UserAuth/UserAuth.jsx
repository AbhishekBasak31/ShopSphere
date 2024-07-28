import React from "react";
import { ShoppingBags } from "../../../components/Svg/Svg.jsx";
import Login_Signup from "../../../components/resuablecomp/Login_singup_form.jsx";
import { sendUserdata } from "../../../ApiRoutes.js";
import{useDispatch}from'react-redux';
import { userAction } from "../../../Store/Store.jsx";
import { useNavigate } from "react-router-dom";


function UserAuth(){
    const dispatch = useDispatch();
    const navigate=useNavigate()
    async  function onReceived(data){
        console.log(data.token)
        console.log(data.user._id)
        dispatch(userAction.login())

        if(data.token){
            localStorage.setItem("userId",data.user._id)
            localStorage.setItem("userToken",data.token)
        }
        localStorage.setItem("userId",data.user._id)
        navigate("/")
    }
   

    const Login_SignUp_text={
        switchedLogin:"Switch to Log in",
        switchedSingUp:"new user ? Sign in",
        loginHeading:"Log in your self",
        signupHeading:"Looks like you are new user Sign up your self",
       
        loginSubtext:"and get the access on your orders, wishlist & recommendations",
        signUpSubtext:" and start shopping.",
       
        signUpButtontext:"Sign in",
        loginButtontext:"Log in"
    }
    async function getData(data,isSingUp){
        console.log(data);
        console.log(isSingUp);
        sendUserdata(data,isSingUp).then(onReceived).catch(err=>console.log(err))
        
    }
    return(
        <>
    
            <Login_Signup SVG_image={<ShoppingBags Width={"300"} Height={"300"}/>}  Text={Login_SignUp_text} SendData={getData}/>
          
        </>
    )
}
export default UserAuth;