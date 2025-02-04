import { Box, Typography,List, ListItemButton,ListItemText, TextField,Button} from '@mui/material';
import React, { useState } from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FolderIcon from '@mui/icons-material/Folder';
import Footer from '../../../../components/Global/Footer/Fotter';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect } from 'react';
import { getUserData } from '../../../../ApiRoutes.js';
import Profile from '../../../../components/Global/Profile/Profile.jsx';

function UserDashboard(){
    const navigate= useNavigate();
    const [isEmailEditable,setEmail]=useState(true);
    const [isPhoneEditable,setPhone]=useState(true);
    const[isNameEditable,setName]=useState(true);
    const [updatedData,setUpdatedData]=useState({});

    const [userData,setUserdata]=useState({})
    useEffect(()=>{
        getUserData().then(res=>setUserdata(res.user)).catch(err=>console.log(err))
    },[])
    function handleLogout(){
        localStorage.removeItem("userId")
        localStorage.removeItem("userToken")
        navigate("/User/auth")
        navigate(0);
    }
    return(
    <>
    <Profile isUser={true} Name={userData.user_name} Email={userData.user_email} Phone={userData.user_mobile_no}/>

   
    
    </>    
)
}
export default UserDashboard;


