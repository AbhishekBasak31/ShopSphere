import React from "react";
import { Box, Typography} from "@mui/material";
import CARD from "../resuablecomp/CARD.jsx";
import { MovieTicket } from "../Svg/Svg.jsx";

 function CardGrid(props){
    const data=  props.Items
   console.log(data)
    
    function generateNonRepeatingRandomNumbers(length) {
        if (length <= 0) {
          return [];
        }
        const maxNumber = length; // Adjust this range as needed
        const uniqueNumbers = [];
        while (uniqueNumbers.length < length) {
          const randomNumber = Math.floor(Math.random() * maxNumber) ;
          if (!uniqueNumbers.includes(randomNumber)) {
            uniqueNumbers.push(randomNumber);
          }
        }
        return uniqueNumbers;
      }
    
    let randomNumbers=generateNonRepeatingRandomNumbers(data.length);

    console.log(randomNumbers);

    console.log(randomNumbers[0])
    let fisrtCard=data[randomNumbers[0]]
console.log(data[randomNumbers[0]])
    console.log(fisrtCard.product_img);

    let secondCard=data[randomNumbers[1]]

    console.log(secondCard.product_img);

    let thirdCard=data[randomNumbers[2]]

    console.log(thirdCard.product_img);

    let fourthCard=data[randomNumbers[3]]

    console.log(fourthCard.product_img);

    let fifthCard=data[randomNumbers[4]]

    console.log(fifthCard.product_img);

    return(
        <Box className="wrapper" margin={2}>
                
                    <Box className="item1" margin={2} bgcolor={"white"} boxShadow={"0px 1px 2px #949494"}>
                        <CARD _id={fisrtCard._id} catagory={fisrtCard.product_catagory} height={"200"} card_height={"100%"} card_width={"100%"}  pic={fisrtCard.product_img} title={fisrtCard.product_name}  alter={fisrtCard.product_name} price={fisrtCard.product_price} discount={fisrtCard.discount} isShadowon={false}/>
                    </Box>   
                      
                    <Box className="item2" margin={2} bgcolor={"white"} boxShadow={"0px 1px 2px #949494"}>
                      <CARD _id={secondCard._id} catagory={secondCard.product_catagory} height={"200"} card_height={"100%"} card_width={"100%"}  pic={secondCard.product_img} title={secondCard.product_name} alter={secondCard.product_name} price={secondCard.product_price} discount={secondCard.discount} isShadowon={false}/> 
                    </Box>
                   
                    <Box className="item3" margin={2} bgcolor={"white"} boxShadow={"0px 1px 2px #949494"}>
                      <CARD _id={thirdCard._id} catagory={thirdCard.product_catagory} card_height={"100%"} height={"500"} pic={thirdCard.product_img} title={thirdCard.product_name} alter={thirdCard.product_name} price={thirdCard.product_price} discount={thirdCard.discount} isShadowon={false}/>
                    </Box>

                    <Box className="item4" margin={2} bgcolor={"white"} boxShadow={"0px 1px 2px #949494"}>
                      <CARD _id={fourthCard._id} catagory={fourthCard.product_catagory} height={"200"} card_height={"100%"} card_width={"100%"} pic={fourthCard.product_img} title={fourthCard.product_name} alter={fourthCard.product_name} price={fourthCard.product_price} discount={fourthCard.discount} isShadowon={false}/>
                    </Box>
                    
                 
                    <Box className="item5" margin={2} bgcolor={"white"} boxShadow={"0px 1px 2px #949494"}>
                      <CARD  _id={fifthCard._id} catagory={fifthCard.product_catagory}  height={"200"} card_height={"100%"} card_width={"100%"} pic={fifthCard.product_img} title={fifthCard.product_name} alter={fifthCard.product_name} price={fifthCard.product_price} discount={fifthCard.discount} isShadowon={false}/>
                    </Box>
                    
                    
                    <Box className="item6" margin={2} sx={{boxShadow:"0px 1px 2px #949494",borderRadius:"0.5em"}} >
                        <Box width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"} gap={2}>
                                <Box width={"50%"}><MovieTicket width={"600px"} height={"600px"}/></Box>
                                <Box>
                                    <Typography variant="h5">{props.adsheading}</Typography>
                                    <Typography>{props.adstagline}
                                    </Typography>
                                </Box>
                            </Box>
                    
                        </Box>

                    </Box>
                </Box>
    )

}
export default CardGrid;