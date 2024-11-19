import { Box, Typography,Divider, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { PlaceMultipleOrder } from '../../../../../../ApiRoutes.js';
import AlertBox from '../../../../../../components/resuablecomp/AlertBox.jsx';
function Buy_Cart_Item() {
    const location = useLocation();
    const [Data, setData] = useState([]);
    const [isPlaced, setPlaced] = useState(false);

    useEffect(() => {
        setData(location.state?.data || []);
    }, [location.state?.data]);

    const BuyAllItems = () => {
        PlaceMultipleOrder(Data)
            .then((res) => {
                console.log(res);
                setPlaced(true); // Trigger success alert after successful order placement
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setData([]); // Clear data after processing is done
            });
    };

    return (
        <>
        {/* <Box sx={{width:"100%",display:'flex',flexDirection:"column", justifyContent:"center",alignItems:"center",}}> */}

        
            
            <Box
                display={"flex"}
                flexDirection={"column"}
                margin={"auto"}
                mt={15}
                width={"95%"}
                height={"auto"}
                bgcolor={"white"}
                padding={2}
                gap={2}
            >
                {isPlaced && (
                <AlertBox
                    alertData={{
                        severity: 'success',
                        message: 'Order placed successfully',
                        width:'100%'
                    }}
                />
            )}
                <Divider />
                <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} p={3}>
                    <Box width={"17%"}>
                        <Typography>Sl No</Typography>
                    </Box>
                    <Box width={"17%"}></Box>
                    <Box width={"17%"}>
                        <Typography>Product Name</Typography>
                    </Box>
                    <Box width={"17%"}>
                        <Typography>Quantity</Typography>
                    </Box>
                    <Box width={"17%"}>
                        <Typography>Price</Typography>
                    </Box>
                </Box>
                <Divider />
                <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} p={3}>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={8}>
                        {Data.map((item, index) => (
                            <Box key={item.product_id} width={"20%"} height={"50px"}>
                                <Typography>{index + 1}</Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={8}>
                        {Data.map((item) => (
                            <Box key={item.product_id} width={"100%"} height={"50px"}>
                                <Typography variant="body">{item.product_name}</Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box display="flex" flexDirection="column" justifyContent="center" gap={8}>
                        {Data.map((item) => (
                            <Box key={item.product_id} width={"100%"} height={"50px"}>
                                <Typography variant="body">{item.order_quantity}</Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box display="flex" flexDirection="column" justifyContent="center" gap={8}>
                        {Data.map((item) => (
                            <Box key={item.product_id} width={"100%"} height={"50px"}>
                                <Typography variant="body">{item.total_price}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Button variant="contained" sx={{ padding: "1%" }} onClick={BuyAllItems}>
                    Buy
                </Button>
            </Box>
            {/* </Box> */}
        </>
    );
}

export default Buy_Cart_Item;
