import React from "react";
import { Box, Typography} from "@mui/material";
import CARD from "../resuablecomp/CARD.jsx";




function CardGroup(props){

    return(
            <Box>
                <Typography mb={2} variant="h5">{props.Heading}</Typography>
                
                <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} gap={2} width={"100%"} padding={1} boxSizing={"border-box"} flexWrap={"wrap"}>
                    {props.Data.slice(0,5).map((item,index)=>{
                       
                         
                        return(<CARD catagory={item.Catagories}  height={props.Each_card_height} card_width={props.Each_card_width} id={index} pic={item.Image} title={item.Catagories} alter={item.Alt} isShadowon={true}/>)

                    })}
                </Box>
                
            </Box>)
}
export default CardGroup;