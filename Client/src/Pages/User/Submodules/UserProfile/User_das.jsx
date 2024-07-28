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
    }
    return(
<>
    <Box display={"block"} margin={"auto"} mt={15} width={"95%"} bgcolor={"white"} padding={1} textAlign={"center"}>
        <Box display={"flex"} alignItems={"center"} gap={4} p={3}>
            <Box width={"20%"} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"} padding={3} >
                <Box width={"100%"} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} gap={11} boxShadow={"0px 1px 2px #949494"}padding={2}>
                    <Box>
                        <AccountCircleIcon sx={{fontSize:45}}/>
                       
                    </Box>
                    <Box display={"flex"}  flexDirection={"column"} >
                                <Typography variant='body'>User</Typography>
                                <Typography variant='h6'>{userData.user_name}</Typography>
                    </Box>
                </Box>
                <Box width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={3} boxShadow={"0px 1px 2px #949494"}padding={2}>
                    <Box sx={{textDecoration:"none"}} component={Link} to={"/orders"}>
                        <Typography variant='h6'>My Orders</Typography>
                    </Box>
                
                </Box>
                <Box width={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"} gap={3} boxShadow={"0px 1px 2px #949494"}padding={2}>
                        <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} gap={5}>
                            <Box>
                                <Person2Icon sx={{fontSize:35}}/>
                                
                            </Box>
                            <Box>
                                <Typography variant='h6'>Acccount Setting</Typography>
                            </Box>
                            
                        </Box>
                        <Box>
                        <List>
                                <ListItemButton component={Link} to="/User/info">
                                    <ListItemText primary="Profile information"/>
                                </ListItemButton>
                                <ListItemButton component={Link} to="/User/Mannage/Address">
                                    <ListItemText primary="Mannage Address"/>
                                </ListItemButton>
                                <ListItemButton component={Link} to="/User/Mannage/Email/Phone">
                                    <ListItemText primary="Mannage Email and Phone"/>
                                </ListItemButton>

                        </List>
                        </Box>
                
                </Box>
                <Box width={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"} gap={3} boxShadow={"0px 1px 2px #949494"}padding={2}>
                    <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} gap={5}>
                        <Box>
                        <AccountBalanceWalletIcon sx={{fontSize:35}}/>
                            
                        </Box>
                        <Box>
                            <Typography variant='h6'>Payments</Typography>
                        </Box>
                        
                    </Box>
                    <Box>
                       <List>
                            <ListItemButton component={Link} to="/User/gift">
                                <ListItemText  sx={{px:9}}primary="Rewards"/>
                            </ListItemButton>
                            <ListItemButton component={Link} to="/User/Mannage/Address">
                                <ListItemText sx={{px:9}} primary="gift card"/>
                            </ListItemButton>
                           

                       </List>
                    </Box>
                
                </Box>
                <Box width={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"} gap={3} boxShadow={"0px 1px 2px #949494"}padding={2}>
                    <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} gap={5}>
                        <Box>
                        <FolderIcon sx={{fontSize:35}}/>
                            
                        </Box>
                        <Box>
                            <Typography variant='h6'>My staffs</Typography>
                        </Box>
                        
                    </Box>
                    <Box>
                       <List>
                            <ListItemButton component={Link} to="/User/gift">
                                <ListItemText sx={{px:7}} primary="My Cupons"/>
                            </ListItemButton>
                            <ListItemButton component={Link} to="/User/Mannage/Address">
                                <ListItemText sx={{px:7}} primary="My Wishlist"/>
                            </ListItemButton>
                           

                       </List>
                    </Box>
                
                </Box>
            </Box>

            {/* Large content section */}
            <Box  width={"80%"} height={"auto"} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} padding={2} gap={2} boxShadow={"0px 1px 2px #949494"}>
                <Box display={"flex"} gap={3} mb={3}>
                        <Typography variant='h5'>
                            Personal Information
                        </Typography>
                        
                        <Button onClick={()=>{
                            setName(!isNameEditable)
                        }}> 
                            Edit
                        </Button>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}gap={4}>
                        <TextField disabled={isNameEditable}  name='user_name' placeholder='User Name' value={isNameEditable?userData.user_name:updatedData.user_name}/>
                        {!isNameEditable&&<Button sx={{width:85,padding:1}} >Submit</Button>}

                        {!isNameEditable&&<Button sx={{width:85,padding:1}} onClick={()=>{
                        setName(!isNameEditable)
                    }} >Cancel</Button>}
                    </Box>
                
                <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} mt={2}>
                        <Typography>Gender</Typography>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox  />} label="Male" />
                            <FormControlLabel  control={<Checkbox />} label="Female" />
                           
                        </FormGroup>

                </Box>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} mb={5} gap={2}>

                    <Box display={"flex"} gap={3}>
                        <Typography variant='h5' >
                            Email address
                        </Typography> 
                        <Button onClick={()=>{setEmail(!isEmailEditable) }}> 
                        Edit
                        </Button>
                    
                    </Box>

                    <Box display={"flex"} gap={3}>

                    <TextField disabled={isEmailEditable}  placeholder='Email' name='user_email' onChange={(e)=>{
                        const{name,value}=e.target;
                        setUpdatedData((prevData)=>{
                            return{
                                ...prevData,
                                [name]:value
                            }
                        })
                    }} value={isEmailEditable?userData.user_email:updatedData.user_email}/>


                    {!isEmailEditable&&<Button sx={{width:85,padding:1}} >Submit</Button>}

                    {!isEmailEditable&&<Button sx={{width:85,padding:1}} onClick={()=>{
                        setEmail(!isEmailEditable)
                    }} >Cancel</Button>}
                    </Box>
                    
                </Box>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} mb={2} gap={2}>

                    <Box  display={"flex"} gap={3}>
                         <Typography variant='h5'>
                            Phone
                        </Typography> 
                        <Button onClick={()=>{setPhone(!isPhoneEditable) }}> 
                         Edit
                        </Button>
                    </Box>

                    <Box display={"flex"} gap={3}>
                    <TextField disabled={isPhoneEditable} name='user_mobile_no' placeholder='Phone' onChange={(e)=>{
                        const {name,value}=e.target;
                        setUpdatedData((prevData)=>{
                            return{
                                ...prevData,
                                [name]:value
                            }
                        })
                    }} value={isPhoneEditable?userData.user_mobile_no:updatedData.user_mobile_no}/>


                    {!isPhoneEditable&&<Button sx={{width:85,padding:1}}>Submit</Button>}

                    {!isPhoneEditable&&<Button sx={{width:85,padding:1}} onClick={()=>{setPhone(!isPhoneEditable)}}>     
                    Cancel
                    </Button>}


                    </Box>
                   
                </Box>
                <form onSubmit={handleLogout}>
                <Button type='submit' variant='contained' sx={{ width:152,padding:2}}>Log Out</Button>
                </form>
      

            </Box>

        </Box>
            
        
    </Box>
   
    
    </>    
)
}
export default UserDashboard;


