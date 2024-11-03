import {React,useEffect,useState,Fragment, useCallback, createContext} from "react";
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { FetchCartData, PlaceMultipleOrder, Removefromcart } from "../../../../../../ApiRoutes.js";
// import QuantityButton from "../../../../components/Global/Quantity_Button/Quantitybtn.jsx";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

function Cart(){
const [cart, setCart] = useState([]);
const [quantity, setQuantity] = useState([]);
const[Prices,setprices]=useState([])
const [total,setTotal]=useState()
const [refresh, setRefresh] = useState(false);
let productlist=[]
const navigate=useNavigate();

const RemoveItem = useCallback((id) => {
    Removefromcart(id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        setRefresh(prev => !prev)
}, []);
useEffect(() => {
    FetchCartData()
        .then(res => {
            setCart(res.result);
        })
        .catch(err => console.log(err));
}, [FetchCartData,refresh]);
console.log(cart)

const handleChange = (id, event) => {
    console.log(id);
    const { name, value } = event.target;
    setQuantity((prevData) => {
        // Find if the id already exists in the quantity array
        const existingIndex = prevData.findIndex(item => item._id === id);

        if (existingIndex >= 0) {
            // If it exists, create a new array with the updated quantity for that id
            const updatedData = prevData.map(item => 
                item._id === id ? { ...item, [name]: value } : item
            );
            return updatedData;
        } else {
            // If it doesn't exist, add the new quantity entry
            return [
                ...prevData,
                {
                    "_id": id,
                    [name]: value
                }
            ];
        }
    });

    console.log(quantity);
};
console.log(quantity);

const addPrices = (id, price) => {
    setprices((prevData) => {
        const existingIndex = prevData.findIndex(item => item._id === id);

        if (existingIndex >= 0) {
            const updatedData = prevData.map(item => 
                item._id === id ? { ...item, price } : item
            );
            return updatedData;
        } else {
            return [
                ...prevData,
                {
                    "_id": id,
                    price
                }
            ];
        }
    });
};
const calculateTotalPrice = () => {
    const totalPrice = Prices.reduce((total, item) => total + item.price, 0);
    setTotal(totalPrice);
};

const CreateProductlist = () =>{
    for (let i = 0; i < cart.length; i++) {   
        let object={ product_name:cart[i].productDetails.product_name,
            product_id:cart[i].productDetails._id,
            total_price:Prices[i].price,
            order_quantity:quantity[i].quantity,
            seller_id:cart[i].productDetails.seller}

            productlist.push(object)
    }
    return(productlist)
}
const Checkout = () =>{
    const data=CreateProductlist()
   
   
    navigate("/cart/buyitems" ,{ state: { data } });
      
    

    
    // PlaceMultipleOrder(data)
    // .then(res=>console.log(res))
    // .catch(err=>console.log(err))
    cart.map(item=>
    {
        RemoveItem(item._id) 
    }
    )
}
useEffect(() => {
    cart.forEach(item => {
        quantity.forEach(mem => {
            if (mem._id === item.productDetails._id) {
                addPrices(item.productDetails._id, item.productDetails.product_price * mem.quantity);
            }
        });
    });
}, [cart, quantity]);
console.log(Prices)
useEffect(() => {
    calculateTotalPrice();
}, [Prices]);

return (
    <Box display={"flex"} flexDirection={"column"} margin={"auto"} mt={15} width={"95%"} height={"auto"} bgcolor={"white"} padding={2}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Box p={3}>
                <Typography variant="h6">Total Price</Typography>
                <Typography>
                {
                  !total?0:total
                }
                </Typography>
            </Box>
            <Box p={3}>
                <Button variant="contained" sx={{ pt: 1, fontSize: '1.12rem' }} onClick={Checkout}>Check Out</Button>
            </Box>
        </Box>
        <Divider />
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
            <Box width={"17%"}></Box>
        </Box>
        <Divider />
        
                <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} p={3}>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={8}>
                        {
                            cart.map((item,index)=>{
                                return(
                                    <Box width={"20%"}  height={"50px"}>
                                        <Typography>{index}</Typography>
                                    </Box>
                                )
                            })
                        }


                    </Box>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}  gap={8}>
                       
                       {
                           cart.map((item)=>{
                               return(
                                   <Box width={"20%"} height={"50px"}>
                                   <img src={item.productDetails.product_img} alt="" width={"80px"}  height={"80px"}/>
                               </Box>
                               )
                           })
                       }

                   </Box>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}  gap={8}>
                       
                        {
                            cart.map((item)=>{
                                return(
                                    <Box width={"100%"} height={"50px"}>
                                    <Typography variant="body">{item.productDetails.product_name}</Typography>
                                </Box>
                                )
                            })
                        }

                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" gap={8}>
                        {
                            cart.map(item=>{
                                return(
                                    <input
                            key={item.productDetails._id}
                            name="quantity"
                            type="Number"
                            defaultValue={0}
                            onChange={(event) => {console.log(item.productDetails._id)
                                 handleChange(item.productDetails._id, event)}}
                        />
                                )
                            })
                        }
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" gap={8}>
                        {
                            cart.map(item=>{
                                return(
                                    <Typography>
                                   {Prices.find(priceItem => priceItem._id === item.productDetails._id)?.price || item.productDetails.product_price}
                                 </Typography>
                                )
                            })
                        }
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" gap={8}>
                        {
                            cart.map(item=>{
                                return(
                                    <Button variant="contained" sx={{bgcolor:'orange'}} onClick={() => {
                                        RemoveItem(item._id)
                                    }}>Remove</Button>
                                )
                            })
                        }
                    </Box>
                </Box>
              
        
    </Box>
);
}
export default Cart;