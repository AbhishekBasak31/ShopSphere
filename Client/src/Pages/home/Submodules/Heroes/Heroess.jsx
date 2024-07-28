import { Box, Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DeliveryTruck,MovieTicket } from "../../../../components/Svg/Svg.jsx";
import "../../../../../public/styles/Home.css";
import CARD from "../../../../components/resuablecomp/CardGroup.jsx";
import { Electronics,allItems,Mensfashions,Womensfashions, latest_smartPhones,latestFashion,latestKitchen, AddsList, } from "../../../../cardData.jsx";
import CardGroup from "../../../../components/resuablecomp/CardGroup.jsx";
import CardGrid from "../../../../components/resuablecomp/CardGrid.jsx";
import Cardslider from "../../../../components/resuablecomp/CardSlider.jsx";
import AddSlider from "../../../../components/resuablecomp/AddSlider.jsx";
import { GetRandomProducts, ProductByCatagory } from "../../../../ApiRoutes.js";



function HomeHores(){
    const[randomProducts,setRandomproducts]=useState([])
    const [electronicsdata,setElectronicsdata]=useState([])
    const [fashionsdata,setFashionsdata]=useState([])
    const [othersdata,setOthersdata]=useState([])


    useEffect(()=>{
        GetRandomProducts().then(res=>{

            if (res && res.products) {
                const productsWithDiscounts = res.products.map(item => ({
                    ...item,
                    discount: `${Math.floor(Math.random() * 50)}%`
                }));
                setRandomproducts(productsWithDiscounts);

                console.log(productsWithDiscounts); // Logging the updated products
                
            } else {
                console.error('Invalid API response:', res);
                setLoading(false); // Set loading to false after data is fetched
            }

           
        }).catch(err=>{

            console.log(err)
            setLoading(false); // Set loading to false after data is fetched
        })
    },[GetRandomProducts])
const electronics=["SmartPhones","Laptop","TV","Speaker","HeadPhone"]
const randomNum=Math.floor(Math.random()*electronics.length)
let randomElectronics=electronics[randomNum]
console.log(randomNum)
console.log(randomElectronics)
    useEffect(()=>{
        ProductByCatagory(randomElectronics).then(res=>{
            console.log(res.result)
            if (res && res.result) {
                const productsWithDiscounts = res.result.map(item => ({
                    ...item,
                    discount: `${Math.floor(Math.random() * 50)}%`
                }));
                setElectronicsdata(productsWithDiscounts);

                console.log(productsWithDiscounts); // Logging the updated products
                
            } else {
                console.error('Invalid API response:', res);
            }

           
        }).catch(err=>{

            console.log(err)
           
        })
    },[ProductByCatagory])
    
    const Fashions=["MensFashions","WomensFashions"]
    const RandomNum=Math.floor(Math.random()*Fashions.length)
    let randomFashion=Fashions[RandomNum]
    console.log(RandomNum)
    console.log(randomFashion)
    useEffect(()=>{
        ProductByCatagory(randomFashion).then(res=>{
            console.log(res.result)
            if (res && res.result) {
                const productsWithDiscounts = res.result.map(item => ({
                    ...item,
                    discount: `${Math.floor(Math.random() * 50)}%`
                }));
                setFashionsdata(productsWithDiscounts);

                console.log(productsWithDiscounts); // Logging the updated products
                
            } else {
                console.error('Invalid API response:', res);
            }

           
        }).catch(err=>{

            console.log(err)
           
        })
    },[ProductByCatagory])

    const Others=["KitchenAccessories","MensWristWatchs","WomensWristWatchs","Sunglasses","Perfumes","MakeupKit"]
    const RandomNum2=Math.floor(Math.random()*Others.length)
    let randomOthers=Others[RandomNum2]
    console.log(RandomNum2)
    console.log(randomOthers)
    useEffect(()=>{
        ProductByCatagory(randomOthers).then(res=>{
            console.log(res.result)
            if (res && res.result) {
                const productsWithDiscounts = res.result.map(item => ({
                    ...item,
                    discount: `${Math.floor(Math.random() * 50)}%`
                }));
                setOthersdata(productsWithDiscounts);

                console.log(productsWithDiscounts); // Logging the updated products
                
            } else {
                console.error('Invalid API response:', res);
            }

           
        }).catch(err=>{

            console.log(err)
           
        })
    },[ProductByCatagory])


    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      let settings2={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    return(
        
          <>
        <Box display={"flex"} flexDirection={"column"} margin={"auto"} mt={15} width={"96%"} bgcolor={"white"}  >
            <AddSlider addsList={AddsList}/>
        
            <Box mt={15}>
                <CardGroup key={1} Heading={"Electronic"} Data={Electronics} Each_card_height={"142"} Each_card_width={"200px"}/>
            
                <CardGroup key={2} Heading={"Mens Fashions"} Data={Mensfashions} Each_card_height={"142"} Each_card_width={"200px"}/>

                <CardGroup key={3} Heading={"Womens Fashions"} Data={Womensfashions} Each_card_height={"142"} Each_card_width={"200px"}/>

            </Box>
            <Box>
               
                <CardGrid  Items={randomProducts.length!=0?randomProducts:allItems} adsheading={"Now book movie tickets just by a click"} adstagline={"Join prime  member ship to  eanable this kind of amazing features"}/>
            </Box>
            {/* bgcolor={"#f7f6f6"} */}
            <Box mt={2}>
                <Cardslider key={1} Itemlist={electronicsdata.length!=0?electronicsdata:latest_smartPhones} Heading={`Latest Selling ${randomElectronics}`} />
            </Box>


           
            <Cardslider key={2} Itemlist={fashionsdata.length!=0?fashionsdata:latestFashion} Heading={`Latest ${randomFashion}`}/>

            
{/* kitchen appliences */}
            <Box mt={2}>
                <Cardslider key={3} Itemlist={othersdata.length!=0?othersdata:latestKitchen} Heading={`Latest ${randomOthers}`} />

            </Box>



           
        </Box>
        
        </>
        
      

        
        
    )
}
export default HomeHores;