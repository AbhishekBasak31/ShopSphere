import React from "react";
import { Box, Typography} from "@mui/material";
import CARD from "../resuablecomp/CARD.jsx";
import Slider from "react-slick";
function Cardslider(props){
    let settings2={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
      const randomNumber=Math.floor(Math.random()*props.Itemlist.length)
    return(
        <Box mt={2}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mb={5}> 
                <Typography  variant="h5">{props.Heading}</Typography>
                </Box>
            
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}  gap={12} mb={5} mt={2}>
                        <Box width={"60%"}  display={"block"}>
                            <Slider {...settings2}>
                                {
                                    props.Itemlist.map((item)=>{
                                        return (<Box>
                                                <CARD _id={item._id} catagory={item.product_catagory}  height={"200"} card_height={"100%"} card_width={"150px"} pic={item.product_img} title={item.product_name} alter={item.product_name} price={item.product_price} discount={item.discount}/>
                                            </Box>) 
                                    })
                                }
                                    
                            </Slider>
                        </Box>

                        <Box display={"block"} width={"25%"}>
                            <CARD _id={props.Itemlist[randomNumber]._id} catagory={props.Itemlist[randomNumber].product_catagory}  height={"200"} card_height={"100%"} card_width={"100%"} pic={props.Itemlist[randomNumber].product_img} title={props.Itemlist[randomNumber].product_name} alter={props.Itemlist[randomNumber].product_name} price={props.Itemlist[randomNumber].product_price} discount={props.Itemlist[randomNumber].discount}/>

                        </Box>
                    </Box>
        </Box>
   
    )
}
export default Cardslider;