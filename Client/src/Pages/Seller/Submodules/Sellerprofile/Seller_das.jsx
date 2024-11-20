import { Box } from "@mui/material";
import {React,useState,useEffect} from "react";
import { getSellerData } from "../../../../ApiRoutes.js";
import Profile from "../../../../components/Global/Profile/Profile.jsx";
import Footer from "../../../../components/Global/Footer/Fotter.jsx";
function SellerDasboard(){

    const [sellerData,setSellerdata]=useState({})
    useEffect(()=>{
        getSellerData().then(res=>setSellerdata(res.seller)).catch(err=>console.log(err))
    },[])
   
    return(
        <>
        <Box>
            <Profile isUser={false} Name={sellerData.seller_name} Email={sellerData.seller_email} Phone={sellerData.seller_mobile_no}/>
        </Box>
        <Footer/>
        </>
    )
}
export default SellerDasboard;