import { useState } from 'react'
import {useSelector,useDispatch} from "react-redux";
import HomeMain from './pages/home/HomeMain/HomeMain.jsx';
import HomeHores from './pages/home/Submodules/Heroes/Heroess.jsx';
import UserAuth from './pages/Auth/UserAuth/UserAuth.jsx';
import SellerAuth from './pages/Auth/SellerAuth/SellerAuth.jsx'
import Help from './pages/home/Submodules/Help/Help.jsx'
import About from './pages/home/Submodules/About/About.jsx'
import User from './pages/User/UserMain/UserMain.jsx'
import UserCart_Main from './pages/User/Submodules/UserCart/UserCart Main/UserCart_Main.jsx'
import UserDashboard from './pages/User/Submodules/UserProfile/User_das.jsx'
import Seller from './pages/Seller/SellerMain/SellerMain.jsx'
import SellerDasboard from './pages/Seller/Submodules/Sellerprofile/Seller_das.jsx'
import Add_item from './pages/Seller/Submodules/AddItem/Add_item.jsx'
import Product_By_Id from './pages/Product/Submodules/ProductById/Product.jsx';
import Product_by_catagory from './pages/Product/Submodules/ProductByCatagory/Product_by_Catagories.jsx';
import ProductMain from './pages/Product/ProductMain/ProductMain.jsx';
import AddCart from './pages/Product/Submodules/Purchase/AddCart/AddCart.jsx';
import Buy from './pages/Product/Submodules/Purchase/Buy/Buy.jsx';
import Order from './pages/User/Submodules/Orders/Order.jsx';
import Buy_Cart_Item from './pages/User/Submodules/UserCart/Submodules/Buy_Cart_Item/Buy_Cart_Item.jsx';
import Cart from './pages/User/Submodules/UserCart/Submodules/Cart/Cart.jsx';

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
    <div>
        
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
            {/* <Route path='/' element={<User/>}>
                  <Route path='home' element={<HomeHores/>} />
                  <Route path='/cart' element={<UserCart_Main/>}>
                    <Route path='items' element={<Cart/>}/>
                    <Route path='buyitems' element={<Buy_Cart_Item/>}/>
                  </Route>
                  <Route path='userprofile' element={<UserDashboard/>}/>
                  <Route path='orders'element={<Order/>}/>
            </Route> */}
            {/* Seller dasboard */}
            {/* <Route path='/' element={<Seller/>}>
              <Route path='new' element={<Add_item/>}/>
              <Route path='sellerprofile' element={<SellerDasboard/>}/>
            </Route> */}
            
            {/* Product */}
            {/* <Route path='/product' element={<ProductMain/>}>
                  <Route path=':catagory' element={<Product_by_catagory/>}/>
                  <Route path=':catagory/:productId' element={<Product_By_Id/>}>
                      <Route path='buy' element={<Buy/>}/>
                      
                  </Route>

            </Route> */}
            </Routes>
        </section>
       
    </div>
    
  )
}

export default App
