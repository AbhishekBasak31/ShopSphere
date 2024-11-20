import { Box,Divider, Typography,TextField, Button } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { addNewProduct,getallSellproductbyId } from '../../../../ApiRoutes.js';
import Form from '../../../../components/Global/Form/Form.jsx';
import { useNavigate } from 'react-router-dom';
function Add_item() {
  const [isOpen,setOpen]=useState(false)
  const[sellProducts,setsellProducts]=useState([])
  const navigate =useNavigate();
 const sendData= useCallback((Formdata,Img_path)=>{
 
    addNewProduct({
      productName:Formdata.Product_name,
      productDescription:Formdata.Product_description,
      productCatagory:Formdata.Product_catagory,
      productPrice:Formdata.Product_price,
      productQuantity:Formdata.Product_quantity,
      imgPath:Img_path
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    
    
    navigate("/new");
    setOpen(false);

 },[]) 

 const handleAdd= () =>{
  setOpen(true)
 }
const handleClose= () =>{
  setOpen(false);
  navigate(0);
}
useEffect(() =>{
  getallSellproductbyId()
  .then(res => {
    console.log(res.result)
    setsellProducts(res.result)
  }
    
  )
  .catch(err => console.log(err))
},[getallSellproductbyId,sendData])
  return (
    
    <Box  display={'block'} width={'95%'} height={'auto'} margin={'auto'}   bgcolor={'white'} p={2}  >
      <Box p={4} m={2} mt={8} width={'90%'} margin={"auto"} height={'auto'} display={"flex"} flexDirection={"column"} gap={3}  >
        <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}> 
          <Button variant='contained' sx={{bgcolor:"greenyellow"}} onClick={handleAdd}>
            Add New
          </Button>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={5} >
          {
            sellProducts.map((Products,index) => {
              return(
                <Box key={index} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} boxShadow={"4.5px 4.5px 4.5px 4.5px #949494"} px={1} borderRadius={"1.23rem"}>
                  <Box width={"25%"} display={"flex"} justifyContent={"center"}>
                    <img src={Products.productDetails.product_img} alt="product image" width={250} height={250} />
                  </Box>
                  <Box width={"25%"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={1}>
                    <Typography variant='h6' display={"block"}>
                      {
                        Products.productDetails.product_name
                      }
                    </Typography>
                    <Typography variant='body' display={"block"} textAlign={"justify"}>
                      {
                        Products.productDetails.product_description

                        
                      }
                    </Typography>
                  </Box>
                  <Box width={"25%"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={1}>
                        <Typography display={"block"} variant='body'>
                          Quantity: {
                            Products.productDetails.product_quantity

                          }
                        </Typography>
                        <Typography display={"block"} variant='body'>
                          Price: {
                            Products.productDetails.product_price

                          }
                        </Typography>
                  </Box>
                  <Box width={"25%"} display={"flex"} justifyContent={"center"}>
                    <Button 
                    variant='contained'
                    sx={{
                      bgcolor:"orange",
                     fontSize:"0.8rem"
                    }}
                    
                    >Remove</Button>
                  </Box>
                </Box>
              )
            })
          
          }
        </Box>
      
       <Form SendData={sendData} isopen={isOpen} isClose={handleClose}/>
      </Box>
       
      
    </Box>
  )
}

export default Add_item