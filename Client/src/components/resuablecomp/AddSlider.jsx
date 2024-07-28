import React from "react";
import Slider from "react-slick";
import { Box, Typography} from "@mui/material";
function AddSlider(porps){
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <Box>
          <Slider {...settings}>
            {/*boxShadow={"2px 2px 2px 2px #949494"}  */}
            {
                porps.addsList.map(adds=>{
                    return(
                        <Box padding={2} >
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} padding={2} >
                            <Box>
                                <Typography variant="h5">{adds.Title}</Typography>
                                <Typography>{adds.Tagline}</Typography>
                            </Box>

                            <Box width={"50%"} boxSizing={"border-box"}>
                                {adds.Svg}
                               
                            </Box>
                        </Box>
                        
                    </Box>
                    )
                })
            }
                    
            </Slider>
        </Box>
    )
}
export default AddSlider;