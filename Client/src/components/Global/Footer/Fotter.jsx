import { Box,Typography } from "@mui/material";
import React, { Fragment } from "react";
import Divider from '@mui/material/Divider';

function Footer(){
    return(
        <footer style={{backgroundColor:"#1976d2",color:"white",padding:"0 2 2 2",}}>

            <Box display={"flex"} padding={5} pt={2} pb={7} justifyContent={"space-between"}  >
                <Typography variant="body"  textAlign={"justify"} padding={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget elit sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam vestibulum finibus ornare. Quisque fringilla porttitor erat. Donec vel pulvinar nunc. Etiam quis mollis est. Nulla eget dolor nec elit sodales efficitur in luctus tellus. Nunc laoreet mattis mauris vitae gravida. Vestibulum sed nibh ullamcorper, aliquet orci a, egestas nulla. Nullam suscipit ullamcorper tellus vitae condimentum. Donec ac euismod diam, eget aliquet ligula. Nulla eu efficitur urna. In pharetra dolor sit amet nisi rutrum rutrum. Aliquam blandit metus augue, a auctor risus efficitur sit amet. Praesent dapibus interdum libero, sed fringilla eros hendrerit commodo.</Typography>
                <Typography variant="body"  textAlign={"justify"}padding={2}>Aenean ornare eleifend lectus ut aliquam. Donec interdum pharetra condimentum. Mauris dignissim eget nisi ut aliquet. Aenean id volutpat purus. Morbi tortor ipsum, scelerisque a cursus a, consectetur sit amet arcu. Ut congue viverra est faucibus suscipit. Etiam gravida est sed urna tristique maximus.</Typography>
                <Typography variant="body"  textAlign={"justify"}padding={2}>semper lacinia eget sed odio. Nam a risus ut libero vulputate dictum vitae vel metus. Praesent eget pulvinar ligula, ut pharetra massa. Nulla aliquam, lectus sed viverra accumsan, magna sem posuere ipsum, a sodales tellus tortor id nibh. In facilisis ex dui, eget condimentum lacus pulvinar vel.</Typography>
                <Box display={"flex"} gap={2} justifyContent={"center"} textAlign={"justify"} padding={2}>
                    <Typography variant="body"  >Aenean porta molestie mattis. Vestibulum iaculis dui eu interdum fringilla. Pellentesque dapibus sit amet orci eget fermentum. Nulla lacinia gravida bibendum. Quisque pellentesque diam vel lorem dapibus ultricies. Maecenas nec ante ut purus vestibulum bibendum. Nam congue imperdiet leo id rhoncus.</Typography>
                    <Divider sx={{color:"white",width:4}} orientation="vertical"/> 
                </Box>
                <Typography variant="body"  textAlign={"justify"} padding={2}>Curabitur at turpis diam. Nunc tincidunt sollicitudin nisl, sed porttitor ante. Proin vulputate, justo nec laoreet iaculis, enim risus hendrerit dolor, eu placerat est massa id mauris. </Typography>
                
            </Box>
             <Divider component="hr" /> 
             <Box margin={"auto"} width={"80%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} pb={2}>
                <Typography>Become a seller</Typography>
                <Typography>Advertise</Typography>
                <Typography>Gift Card</Typography>
                <Typography>Help Center</Typography>
                <Typography variant="body"  textAlign={"justify"} padding={2}>Copyright@{new Date().getFullYear()}</Typography>
                <Box display={"flex"} gap={2} justifyContent={"center"} alignContent={"center"} >
                    <img src="https://imgs.search.brave.com/UgHikAaPbdU0CQzM6ynjkNAgjAKJyVrK_IJ64ZNAWTo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzJhL01hc3RlcmNh/cmQtbG9nby5zdmc.svg"  style={{width:"30px", height:"20px" ,objectFit:"contain",backgroundColor:"white" ,padding:2}} alt="mastercard" />
                    <img src="https://pngimg.com/uploads/visa/visa_PNG38.png" style={{width:"30px", height:"20px" ,objectFit:"contain",backgroundColor:"white" ,padding:2}} alt="mastercard" />
                    <img src="https://imgs.search.brave.com/QagRLSKwQck4Gh3_sYLVkE-V1lempPoS6XWQNUa32GI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGl0ZWNodHVyZS5h/Z2VuY3kvYnJhbmQt/bG9nb3Mvd3AtY29u/dGVudC91cGxvYWRz/L3dwZG0tY2FjaGUv/UnVQYXktOTAweDAu/cG5n" style={{width:"30px", height:"20px" ,objectFit:"contain",backgroundColor:"white" ,padding:2}} alt="mastercard" />
                    <img src="https://imgs.search.brave.com/ok_XxjjTJsu16taikifw7H1Joc2NBvVAlW3q0Oa1JF4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9wYXl0bS1p/Y29uLnBuZw" style={{width:"30px", height:"20px" ,objectFit:"contain",backgroundColor:"white" ,padding:2}} alt="mastercard" />


                </Box>

             </Box>
        </footer>
        

        
    )
}
export default Footer;