import axios from "axios";

// User and Seller
export const sendUserdata=async(data,isSingUp)=>{
    if(data){
        
    }
    const response=await axios.post(`/Users/${isSingUp?"Signin":"Login"}`,isSingUp?{user_name:data.name,user_email:data.email,user_mobile_no:data.phone,user_password:data.password,user_address:data.address}:{user_email:data.email,user_password:data.password})
    .catch(err=>console.error(err))
    if(response.status!==201&&response.status!==200){
        return console.error("failed to post");
    }
    return (await response.data)
}


export const getUserData= async ()=>{
    const id =localStorage.getItem("userId")
    const response= await axios.get(`/Users/${id}`)
    .catch(err=>console.error(err))
    if(response.status!==200){
        return console.error("failed to get user data");
    }
    return (await response.data)
}

// Seller
export const sendSellerdata=async(data,isSingUp)=>{
    const response =await axios.post(`/Sellers/${isSingUp?"Signin":"Login"}`,isSingUp?{seller_name:data.name,seller_email:data.email,seller_mobile_no:data.phone,seller_password:data.password, seller_address:data.address}:{seller_email:data.email,seller_password:data.password})
    .catch(err=>console.error(err))
    if(response.status!==201&&response.status!==200){
        return console.error("failed to send");
    }
    return (await response.data)
}

export const getSellerData= async()=>{
    const id=localStorage.getItem("sellerId")
    const response = await axios.get(`/Sellers/${id}`)
    .catch(err=>console.error(err))
    if(response.status!==200){
        return console.error("failed to get seller data");
    }
    return(await response.data)
}

export const getallSellproductbyId=async() =>{
    const response = await axios.get(`/Sellers/products/${localStorage.getItem("sellerId")}`)
    .catch(err => console.error(err))
    if(response.status!==200){
        return console.error("failed to get product data by seller id");
    }
    return(await response.data)
}


// Product
export const addNewProduct=async(data)=>{
    try{
        const response=await axios.post('/Products',{
            product_name:data.productName,
            product_description:data.productDescription,
            product_catagory:data.productCatagory,
            product_price:data.productPrice,
            product_quantity:data.productQuantity,
            Img_path:data.imgPath
            
        },{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('sellerToken')}`,
                'Content-Type' :'multipart/form-data'

            }
        })

    
    if(response.status!=200){
        return console.error("failed to send new product data");
    }
    return(await response.data)
}catch(err){
        if(err){
            console.error({Failed_to_post_the_product_data:err})
        }
}
}

export const ProductByCatagory = async (data)=>{
    const response= await axios.post('/Products/catagories',{category:data})
    .catch(err=>console.error(err))
    if(response.status!==200){
        return console.error("failed to get product data by catagorie")
    }
    return(await response.data)
}
export const ProductByID= async (product_ID)=>{
    const response = await axios.get(`/Products/${product_ID}`)
    .catch(err=>console.error(err))
    if(response.status!==200){
        return console.error("failed to get product data by id")
    }
    return(await response.data)
}

export const GetRandomProducts= async()=>{
    const response = await axios.get('/Products/randoms')
    .catch(err=>console.log(err))
    if(response.status!=200){
        return console.error("failed to fetch random products data")
    }
    return (await response.data)
}




// Order
export const PlaceOrder=async(data)=>{
    
        console.log(data)
    const response = await axios.post('/Orders',{product_name:data.ProductName,
        product_id:data.ProductId,
        seller_id:data.SellerId,
        order_quantity:data.Quantity,
        total_price:data.Totalprice
    },
        {headers:{
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`
            }
        }).catch(err=>console.error(err))
        if(response.status!=200){
            return console.error("failed to send new order data")
        }
        return (await response.data)
    
  
    
}
export const PlaceMultipleOrder=async(Products)=>{
    const response = await axios.post(`/Orders/multiple`,Products,
        {headers:{
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
                }})
    .catch(err => console.error(err))
    if(response.status!=200){
        return console.error("failed to fetch order data")
    }
    return (await response.data)
}
export const FetchOrderData=async()=>{
    const response = await axios.get(`/Orders/${localStorage.getItem('userId')}`)
    .catch(err=>console.error(err))
    if(response.status!=200){
        return console.error("failed to fetch order data")
    }
    return (await response.data)
}
export const Cancelorder=async(id)=>{
    const response = await axios.delete(`/Orders/${id}`)
    .catch(err=>console.error(err))
    if(response.status!=200){
        return console.error("failed to cancel order ")
    }
    return(await response.data)
}

// Cart 

export const Addtocart = async(productId) => {
 
        const response = await axios.post('/Addcart',{
            user_id:localStorage.getItem('userId'),
            product_id:productId
        })
        .catch(err=>console.error(err))
        if(response.status!=200){
            return console.error('failed to add item in cart')
        }
        return(await response.data)
  
    
}
export const FetchCartData = async()=>{
    const response = await axios.get(`/Addcart/${localStorage.getItem('userId')}`)
    .catch(err=>console.error(err))
    if(response.status!=200){
        return console.error("failed to fetch cart data")
    }
    return (await response.data)
} 
export const Removefromcart = async(id)=>{
    console.log(id)
    const response =await axios.delete(`/Addcart/${id}`)
    .catch(err=>console.error(err))
    if(response.status!=200){
        return console.error('failed to remove from cart')
    }
    return (await response.data)
 }