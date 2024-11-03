import { Box, Typography,Divider } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
function Buy_Cart_Item() {
    const location = useLocation();
    const Data = location.state?.data || [];
    console.log(Data);
    const BuyAllItems = () =>{
        
        
        PlaceMultipleOrder(Data)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        cart.map(item=>
        {
            RemoveItem(item._id) 
        }
        )
    }  
  return (
    <Box display={"flex"} flexDirection={"column"} margin={"auto"} mt={15} width={"95%"} height={"auto"} bgcolor={"white"} padding={2}>

    <Divider/>
    <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} p={3}>
            <Box width={"17%"}>
                <Typography>Sl No</Typography>
            </Box>
            <Box width={"17%"}></Box>
            <Box width={"17%"}>
                <Typography>Product Name</Typography>
            </Box>
            <Box width={"17%"}>
                <Typography>Quantity</Typography>
            </Box>
            <Box width={"17%"}>
                <Typography>Price</Typography>
            </Box>
            
        </Box>
        <Divider/>
        <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} p={3}>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={8}>
                        {
                            Data.map((index,item)=>{
                                return(
                                    <Box key={item.product_id} width={"20%"}  height={"50px"}>
                                        <Typography>{index}</Typography>
                                    </Box>
                                )
                            })
                        }


                    </Box>
                    
                     <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}  gap={8}>
                       
                        {
                            Data.map((item)=>{
                                return(
                                    <Box key={item.product_id} width={"100%"} height={"50px"}>
                                    <Typography variant="body">{String(item.product_name)}</Typography>
                                </Box>
                                )
                            })
                        }

                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" gap={8}>
                        {
                            Data.map(item=>{
                                return(
                                  <Box key={item.product_id} width={"100%"} height={"50px"}>
                                  <Typography variant="body">{String(item.order_quantity)}</Typography>
                              </Box>
                                )
                            })
                        }
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" gap={8}>
                        {
                            Data.map(item=>{
                                return(
                                  <Box key={item.product_id} width={"100%"} height={"50px"}>
                                  <Typography variant="body">{String(item.total_price)}</Typography>
                              </Box>
                                )
                            })
                        }
                    </Box> 
                    </Box>


        </Box>
  )
}

export default Buy_Cart_Item