import React, { useState } from "react";
import { Box, Button, TextField, Typography,IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from "react-router-dom";


function Login_Signup(props){
    const[isSignin , setSignin]=useState(false);
    const [Input,setInput]=useState({name:"",email:"",address:"",password:"",phone:""})
   
    function handleClick(){
        setSignin(!isSignin);
        
    }

    function handleSubmit(event){
        event.preventDefault();
        props.SendData(Input,isSignin)
        setInput({name:"",email:"",address:"",password:"",phone:""})
        console.log(Input);
    }
    function handleChange(event){
        const{name,value}=event.target;
        setInput((prevData)=>{
            return{
                ...prevData,
                [name]: value
            }
        })

    }
    

    return(
        
           
                <Box   boxSizing={"border-box"} display={"flex"} width={"60%"}  height={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"4.5px 4.5px 4.5px #949494"} >

            
                    <Box width={"50%"} height={"auto"} p={0} bgcolor={"Yellow"} display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} alignItems={"center"} gap={28}> 
                        <Box textAlign={"start"} p={3}>
                            < Typography variant="h5">{isSignin?props.Text.signupHeading:props.Text.loginHeading}</Typography> < Typography variant="body">{ isSignin?props.Text.signUpSubtext:props.Text.loginSubtext}</Typography>
                        </Box>
                            {props.SVG_image}
                    </Box>
                    
                        <Box  boxSizing={"border-box"} width={"50%"} height={"100%"} bgcolor={"white"}   >
                            <Box display={"flex"} mb={0} justifyContent={"flex-end"} alignItems={"center"} padding={1}>
                                    <IconButton  LinkComponent={Link} to="/" >
                                            <CloseIcon />
                                    </IconButton>
                            </Box>
                        
                            <Box margin="auto" mt={3} mb={8} boxSizing={"border-box"} width={"70%"} minHeight={"60vh"} height={"auto"} display={"flex"} flexDirection={"column"} gap={3} justifyContent={"center"} alignItems={"center"}>                          
                            
                            

                            {isSignin&& <TextField  name="name" value={Input.name}  onChange={handleChange} variant="standard"fullWidth placeholder="Enter Name"/>}
                                <TextField  name="email" value={Input.email} onChange={handleChange} variant="standard"fullWidth placeholder="Enter Email-id"/>
                            {isSignin&& <TextField  name="address" value={Input.address}  onChange={handleChange} variant="standard"fullWidth placeholder="Enter Address"/>}
                            {isSignin&& <TextField  name="phone" value={Input.phone}  onChange={handleChange} variant="standard"fullWidth placeholder="Enter Phone no"/>}
                                <TextField  type="password" value={Input.password} onChange={handleChange} name="password" variant="standard"fullWidth placeholder="Enter Password"/>
                                <Button variant="contained" type="submit" onClick={handleSubmit} sx={{width:"100%",padding:2,bgcolor:"#1976d2", boxShadow:"none" ,":hover":{bgcolor:"#1976d2",boxshadow:"4.5px 4.5px 4.5px #949494"}}}  >{isSignin?props.Text.signUpButtontext:props.Text.loginButtontext}</Button>
                            
                                <Button variant="text" onClick={handleClick} sx={{width:"100%",padding:2,color:"#1976d2", boxShadow:"none" ,":hover":{bgcolor:"#1976d2", color:"white",outline:"none",boxshadow:"4.5px 4.5px 4.5px #949494"}}}>{isSignin?props.Text.switchedLogin:props.Text.switchedSingUp}</Button>
                                    

                            </Box>
                        
                        </Box>
                    </Box>
        
        
      
    )
}
export default Login_Signup;