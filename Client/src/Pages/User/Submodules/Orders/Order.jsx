import { Box ,Button,Divider,Typography} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Cancelorder, FetchOrderData } from '../../../../ApiRoutes';
import { useNavigate } from 'react-router-dom';

function Order() {
    const navigate=useNavigate()
    const[orders,setorders]=useState([])
    const handleClick=(id)=>{
        Cancelorder(id).then(res=>console.log(res)).catch(err=>console.log(err))
        // navigate("/home")     
        }
    useEffect(()=>{
        FetchOrderData()
        .then(res=>setorders(res.result))
        .catch(err=>console.log(err))
    },[handleClick,FetchOrderData]
)

    
  return (
    <Box display={"flex"} flexDirection={"column"}  margin={"auto"} mt={15} width={"95%"} bgcolor={"white"} padding={3} >
   <Divider/>
   {orders?<>
   <Box display={"flex"}  justifyContent={"space-evenly"} my={2} >
            <Box width={"14%"}>
                <Typography>Sl No</Typography>
            </Box>
            <Box width={"14%"}></Box>
            <Box width={"14%"}>
                <Typography>Product details</Typography>
            </Box>
            <Box width={"14%"}>
                <Typography>Quantity</Typography>
            </Box>
            <Box width={"14%"}>
                <Typography>Price</Typography>
            </Box>
            <Box width={"14%"}><Typography>Selled details</Typography></Box>
            <Box width={"14%"}></Box>
    </Box>
    <Divider/>
    {
        orders.map((item,index)=>{
            return(
                <Box display={"flex"}  justifyContent={"space-evenly"} my={2}>
                    <Box width={"14%"}>
                <Typography>{index+1}</Typography>
            </Box>
            <Box width={"14%"}>
                <img src={item.product_details.product_img} alt="product image" width={"120px"} height={"120px"}/>
            </Box>
            <Box width={"14%"} textAlign={"center"} >
                <Typography variant='body'>Product nam: {item.product_name}</Typography>
                <Typography variant='body'>catagory: {item.product_details.product_catagory}</Typography>

            </Box>
            <Box width={"14%"}>
                <Typography variant='body'>{item.order_quantity}</Typography>
            </Box>
            <Box width={"14%"}>
                <Typography variant='body'>{item.total_price}</Typography>
            </Box>
            <Box width={"14%"}>
                <Typography variant='body'>Seller name: {item.seller_details.seller_name}</Typography>
                <Typography variant='body'>Seller contact: {item.seller_details.seller_email}</Typography>
            </Box>
            <Box width={"14%"} textAlign={"center"}>
                <Button variant='contained' sx={{bgcolor:"orange"}} onClick={()=>{
                    handleClick(item._id)
                }}>Cancel</Button>
            </Box>
           
                </Box>

            )
        })
    }
    </>
    : <Box >
        <Typography variant='h3'>
            No Orders has placed yet
        </Typography>
        </Box>}
    </Box>
  );
}

export default Order;