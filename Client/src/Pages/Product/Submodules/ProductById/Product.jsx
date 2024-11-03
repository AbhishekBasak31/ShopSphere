import { Box, Typography,Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams,useNavigate, useLocation } from "react-router-dom";
import { Addtocart, ProductByID } from "../../../../ApiRoutes.js";
import { Outlet } from "react-router-dom";

export function handleAddcart(){
    setCart((prevData)=>{
        return[
            ...prevData,
            Product
        ]
    })
    console.log(cart)
}
const userId=localStorage.getItem('userId');


console.log(typeof(userId))
function Product_By_Id(){
    const location=useLocation();
    const navigate=useNavigate();
    let { productId } = useParams();
    let [Product, setProduct] = useState({});
    console.log(productId);

    useEffect(() => {
        ProductByID(productId)
            .then(res => setProduct(res.product))
            .catch(err => console.log(err));
    }, [productId]);

    console.log(Product);

    //If the path contain /buy or /addcart then isChildRouteActive will be true  
    const isChildRouteActive = location.pathname.includes('/buy');

    // Check if Product.product_description is defined before accessing its properties
    let specifiction = Product.product_description
        ? Product.product_description.split("|")
        : [];

    console.log(specifiction);
    const handleBuy = () => {
        if(userId){
            navigate(`/product/${Product.product_catagory}/${Product._id}/buy`)

        }
        else{
            navigate('/user/auth')
        }

    }
    const handleAddcart = () => {
        if(userId){
        Addtocart(Product._id)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))}
        else{
            navigate('/user/auth')
        }
    }
    return (
        <>
            <Box margin={"auto"} width={"95%"} height={"auto"}  p={12} mt={18} bgcolor={"white"} display={"flex"} flexDirection={"column"} gap={3} padding={2} justifyContent={"center"} alignItems={"center"}>
               
                {!isChildRouteActive&&(
                <Box display={"flex"} gap={5} padding={2} width={"100%"} justifyContent={"center"}>
                    <Box width={"50%"} sx={{ boxShadow: "0.2px 0.2px 1px 1px  #949494" }} padding={3} display={"flex"} flexDirection={"column"} gap={3} alignItems={"center"}>
                        {Product.product_img && <img src={Product.product_img} alt="" width={500} height={500} />}
                        <Box display={"flex"} gap={3} pb={1}>
                            
                                <Button variant="contained" sx={{ bgcolor: "yellowgreen", boxShadow: "2px 2px 2px #949494", ":hover:": { bgcolor: "yellowgreen" } }} onClick={handleBuy}>Buy Now</Button>
                            
                            
                                <Button variant="contained" sx={{ bgcolor: "orange", boxShadow: "2px 2px 2px #949494", ":hover:": { bgcolor: "orange" } }} onClick={handleAddcart}>Add to Cart</Button>               
                            
                            
                        </Box>
                    </Box>
                    <Box width={"50%"} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} gap={5} sx={{ textAlign: "justify" }}>
                    <Typography variant="h3">{Product.product_name || "No Description"}</Typography>
                       
                        <Typography sx={{ fontSize: "1.3em" }} variant="body">{Product.product_description || "No Description"}</Typography>
                        <Typography variant="h4"> ₹ {Product.product_price || "N/A"}</Typography>
                        <Box width={"100%"} m={5}>
                            <Typography  textAlign={"justify"}>Specification</Typography>
                            <ol>
                                {specifiction.map((spec, index) => (
                                    <li key={index}>
                                        {spec}
                                    </li>
                                ))}
                            </ol>
                        </Box>
                    </Box>
                </Box>
                )
                }
                <Outlet />
            </Box>
            
        </>
    );


}
export  default Product_By_Id;