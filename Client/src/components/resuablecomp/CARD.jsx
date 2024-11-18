import React from "react";
import {Card,CardContent,Typography,CardMedia,makeStyles} from '@mui/material';
import { Link } from "react-router-dom";




function CARD(props){
    const Product_id=props._id
    console.log(Product_id)
    const Product_catagory = props.catagory
    console.log(typeof(Product_catagory))
  
    if(Product_id){
        return(
       
            <Card component={Link} to={`/product/${Product_catagory}/${Product_id}`} key={props.id} sx={{ minWidth:props.card_width , minHeight:props.card_height ,padding:2,textDecoration:'none',boxShadow:props.isShadowon&&'0px 1px 2px #949494'}}>
                               
                <CardMedia
                    component="img"
                    height={props.height}
                    sx={{objectFit:"contain", mt:2,}}
                    image={props.pic}
                    alt={props.alter}
                    />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom variant="body" component="div">
                    {"₹"+props.price+"/"}
                    </Typography>
                    <Typography gutterBottom variant="body" sx={{color:"green"}} >
                        {"flat"+props.discount+"discount"}
                    </Typography>
                </CardContent>         
            </Card>);
    }
    else{
        return(
       
            <Card component={Link} to={`/product/${Product_catagory}`} key={props.id} sx={{ minWidth:props.card_width , minHeight:props.card_height ,padding:2,textDecoration:'none'}}>
                               
                <CardMedia
                    component="img"
                    height={props.height}
                    sx={{objectFit:"contain", mt:2,}}
                    image={props.pic}
                    alt={props.alter}
                    />
                <CardContent >
                    <Typography  variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography  variant="body" component="div">
                        {props.price}
                    </Typography>
                    <Typography  variant="body" sx={{color:"green"}}>
                        {props.discount}
                    </Typography>
                </CardContent>         
            </Card>);
    }
    
}
export default CARD;