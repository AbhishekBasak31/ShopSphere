import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductByCatagory } from "../../../../ApiRoutes.js";
import ProductByCatagorySkeleton from "../../../../components/Global/Skeleton/Product by catagory/ProductByCatagorySkeleton.jsx";

function Product_by_catagory(){
    const naviaget=useNavigate();
    let{catagory}=useParams();
    const[products,setProducts]=useState([]);
    const[loading,setLoading]=useState(true);
    console.log(catagory)

    useEffect(()=>{
        const fetchData= async ()=>{
            try{
                const Result= await ProductByCatagory(catagory)
                console.log(Result.result);
                setProducts(Result.result);
            }
            catch(err){
                console.error(`Api request error :${err}`)
            }
            finally{
                setLoading(false);
            }
        }
        const timmer=setTimeout(fetchData,100);
        return ()=> clearTimeout(timmer);
        // ProductByCatagory(catagory).then(res=>setProducts(res.result)).catch(err=>console.log(err))
    },[])
    // ProductByCatagory(catagory).then(res=>setProducts(res.result)).catch(err=>console.log(err))

    // console.log(products)
   

    return (
        <>
        {
            loading?
            <ProductByCatagorySkeleton/>:
            <Box  margin={"auto"} width={"95%"} height={"auto"} mt={18} bgcolor={"white"} display={"flex"} flexDirection={"column"} gap={3} padding={2} overflow={"hidden"}> 
        {products.map((product)=>{
        return<>
        
       
                <Box key={product._id} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} gap={6} boxShadow={"2px 2px 2px #949494"} minHeight={250} pb={2} sx={{textDecoration:"none"}} component={Link} to={`/product/${product.product_catagory}/${product._id}`}> 
                        <Box>
                            <img src={product.product_img} alt="" width={250} height={250} style={{objectFit:"contain"}}/>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={2}> 
                            <Typography sx={{color:"black"}} variant="h5">{product.product_name}</Typography>
                            <Typography sx={{textAlign:"start" ,color:"black"}} variant="h6">{product.product_description}</Typography>
                            
                            <Typography sx={{textAlign:"start",color:"black",fontSize:"1.23rem"}} variant="body">Price: ₹{product.product_price}</Typography>                           
                      
                        </Box>
                        

                </Box>
                </> })}
        </Box>
        }
        
     
        </>
    )
}
export default Product_by_catagory;