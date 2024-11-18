import { useEffect, useState } from 'react'
import '../public/styles/App.css'
import {Box} from '@mui/material';
import {Route,Routes,} from "react-router-dom";
import {userAction,sellerAction} from './Store/Store.jsx';
import {useSelector,useDispatch} from "react-redux";
import HomeMain from './Pages/home/HomeMain/HomeMain.jsx';
import HomeHores from './Pages/home/Submodules/Heroes/Heroess.jsx';
import Help from './Pages/home/Submodules/Help/Help.jsx';
import About from './Pages/home/Submodules/About/About.jsx'
import SellerAuth from './Pages/Auth/SellerAuth/SellerAuth.jsx'
import UserAuth from './Pages/Auth/UserAuth/UserAuth.jsx';
import User from './Pages/User/UserMain/UserMain.jsx'
import UserDashboard from './Pages/User/Submodules/UserProfile/User_das.jsx'
import Seller from './Pages/Seller/SellerMain/SellerMain.jsx'
import SellerDasboard from'./Pages/Seller/Submodules/Sellerprofile/Seller_das.jsx'
import Add_item from './Pages/Seller/Submodules/AddItem/Add_item.jsx'
import Product_By_Id from './Pages/Product/Submodules/ProductById/Product.jsx';
import Product_by_catagory from './Pages/Product/Submodules/ProductByCatagory/Product_by_Catagories.jsx';
import ProductMain from './Pages/Product/ProductMain/ProductMain.jsx';
import AddCart from './Pages/Product/Submodules/Purchase/AddCart/AddCart.jsx';
import Buy from './Pages/Product/Submodules/Purchase/Buy/Buy.jsx';
import Order from './Pages/User/Submodules/Orders/Order.jsx';
import UserCart_Main from './Pages/User/Submodules/UserCart/UserCart Main/UserCart_Main.jsx';
import Buy_Cart_Item from './Pages/User/Submodules/UserCart/Submodules/Buy_Cart_Item/Buy_Cart_Item.jsx';
import Cart from './Pages/User/Submodules/UserCart/Submodules/Cart/Cart.jsx';

function App() {
 const dispatch = useDispatch();
 const isSellerLogin=useSelector(state=>{return(state.seller.isLoggedIn)});
 const isUserLogin=useSelector(state=>{return(state.user.isLoggedIn)});

 console.log("is Seller logged in : ",isSellerLogin);
 console.log("is User logged in : ",isUserLogin);
 useEffect(()=>{
  if(localStorage.getItem("userId")){
    dispatch(userAction.login())
  }
  else if(localStorage.getItem("sellerId")){
    dispatch(sellerAction.login())
  }
 },[])


  return (
    <Box >
        
        <section>

            <Routes>
                <Route path='' element={<HomeMain/>}>
                    <Route path='/' element={<HomeHores/>}/>
                    <Route path='user/auth' element={<UserAuth/>}/>
                    <Route path='seller/auth' element={<SellerAuth/>}/>
                    <Route path='help' element={<Help/>}/>
                    <Route path='about' element={<About/>}/>
                    
            </Route>
            {/* User dasboard */}
            <Route path='/' element={<User/>}>
                  <Route path='home' element={<HomeHores/>} />
                  <Route path='/cart' element={<UserCart_Main/>}>
                    <Route path='items' element={<Cart/>}/>
                    <Route path='buyitems' element={<Buy_Cart_Item/>}/>
                  </Route>
                  <Route path='userprofile' element={<UserDashboard/>}/>
                  <Route path='orders'element={<Order/>}/>
            </Route>
            {/* Seller dasboard */}
            <Route path='/' element={<Seller/>}>
              <Route path='new' element={<Add_item/>}/>
              <Route path='sellerprofile' element={<SellerDasboard/>}/>
            </Route>
            
            {/* Product */}
            <Route path='/product' element={<ProductMain/>}>
                  <Route path=':catagory' element={<Product_by_catagory/>}/>
                  <Route path=':catagory/:productId' element={<Product_By_Id/>}>
                      <Route path='buy' element={<Buy/>}/>
                      
                  </Route>

            </Route>

                {/* <Route path='/' element={<Home/>}/>
             
                <Route path='/Help' element={<Help/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/User/auth' element={<UserAuth/>}/>
                <Route path='/Seller/auth' element={<SellerAuth/>}/>
               
                <Route path='/Seller' element={<Seller/>}>
                  <Route path='home' element={<Home/>} />

                </Route> */}

            </Routes>
        </section>
       
    </Box>
    
  )
}

export default App
