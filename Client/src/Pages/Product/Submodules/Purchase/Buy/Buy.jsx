import {React,  useEffect, useState } from 'react'
import { Box,Button,Typography} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import { PlaceOrder, ProductByID,getUserData } from '../../../../../ApiRoutes.js';
import QuantityButton from '../../../../../components/Global/Quantity_Button/Quantitybtn.jsx';

function Buy() {
  const navigate=useNavigate();
  // It returning an object with two keys productId & catagory
  let Product_params=useParams();
  let ProductId=Product_params.productId
  console.log(Product_params.productId)

  const[Product,setProduct]=useState({});
  const [userData,setUserdata]=useState({})
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    ProductByID(ProductId)
        .then(res => setProduct(res.product))
        .catch(err => console.log(err));
}, [ProductId]);

useEffect(()=>{
  getUserData()
  .then(res=>setUserdata(res.user))
  .catch(err=>console.log(err))
},[])

const Increase = () => {
  setQuantity(prevQuantity => prevQuantity + 1);
};

const Decrease = () => {
  if (quantity > 1) {
    setQuantity(prevQuantity => prevQuantity - 1);
  }
};
const handleCancel=()=>{
  navigate(`/product/${Product_params.catagory}/${ProductId}`)
}
const handleConfirm=()=>{
  console.log({ProductName:Product.product_name,
      ProductId:ProductId,
      SellerId:Product.seller,
      Quantity:quantity,
      Totalprice:Product.product_price*quantity
    })
  PlaceOrder({ProductName:Product.product_name,
    ProductId:ProductId,
    SellerId:Product.seller,
    Quantity:quantity,
    Totalprice:Product.product_price*quantity
  })
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    setQuantity(1)
    setUserdata({})
    setProduct({})
    ProductId=""
    navigate('/')

}



  return (
    <Box m={"auto"} width={"100%"} height={"auto"}  >

      
      <Box display={"flex"}   flexDirection={"column"} gap={10} p={2} justifyContent={"center"} alignItems={"center"}>
        <Typography sx={{display:"block", left:"50px"}} variant="h4">Product Details</Typography>

            {/* Product detail and quantity */}
            <Box display={'flex'} gap={2} alignItems={"center"}  justifyContent={"space-evenly"}  borderRadius={"0.23rem"} boxShadow={"0px 1px 2px #949494"} p={5} width={'95%'}>

              <Box>{Product.product_img&&<img src={Product.product_img} width={250} height={250}/>}</Box>

              <Box display={'flex'} flexDirection={"column"} justifyContent={"left"} alignItems={"left"} textAlign={"justify"} gap={4} width={"50%"}>
                  <Typography sx={{ display:"block" }} variant="h4">{Product?Product.product_name:"NO name found"}</Typography>
                  <Typography sx={{ display:"block" }} variant="h5">{Product?Product.product_description:"NO description found"}</Typography>
                  <Typography sx={{ display:"block" }} variant="h4">₹{Product?Product.product_price*quantity:"NO price found"}</Typography>
              </Box>

              <Box p={2}>
                <QuantityButton Quantity={quantity} handleIncrease={Increase} handleDecrease={Decrease}/>
              </Box>

            </Box>

          {/* Customer details */}
          <Typography sx={{display:"block", left:"50px"}} variant="h4">Customer Details</Typography >
          
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}gap={10} borderRadius={"0.23rem"} boxShadow={"0px 1px 2px #949494"} p={5} width={'95%'}>

            <Box p={2} width={"33%"}>
            <Typography  variant="h5">{userData?userData.user_name:"NO name found"}</Typography>
            </Box>
            <Box width={"33%"} p={2} display={"flex"} flexDirection={"column"} alignItems={"left"} justifyContent={"left"} textAlign={"justify"} >
                  <Typography sx={{ display:"block" }} variant="h6">{userData?userData.user_email:"NO email found"}</Typography>
                  <Typography sx={{ display:"block" }} variant="h6">{userData?userData.user_mobile_no:"NO phone number found"}</Typography>
                 
            </Box>
            <Box p={2} width={"34%"}>
            <Typography  variant="h6">{userData?userData.user_address:"NO address found"}</Typography>
            </Box>
          </Box>

        <Box display={'flex'} gap={20} justifyContent={"center"}>
          <Button  variant='contained' sx={{bgcolor:"orange", fontSize:'1.38rem',px:6, ':hover': {bgcolor:'orange'}}} onClick={handleCancel}>Cancel</Button>
          <Button variant='contained' sx={{bgcolor:"yellowgreen;", fontSize:'1.38rem',px:6, ':hover': {bgcolor:'yellowgreen'}}} onClick={handleConfirm}>Confirm</Button>

        </Box>
      </Box>
      
    </Box>
  )
}

export default Buy;