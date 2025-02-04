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

        
            
            <div
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
                <div display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} p={3}>
                    <div width={"17%"}>
                        <Typography>Sl No</Typography>
                    </div>
                    <div width={"17%"}></div>
                    <div width={"17%"}>
                        <Typography>Product Name</Typography>
                    </div>
                    <div width={"17%"}>
                        <Typography>Quantity</Typography>
                    </div>
                    <div width={"17%"}>
                        <Typography>Price</Typography>
                    </div>
                </div>
                <Divider />
                <div display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} p={3}>
                    <div display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={8}>
                        {Data.map((item, index) => (
                            <div key={item.product_id} width={"20%"} height={"50px"}>
                                <Typography>{index + 1}</Typography>
                            </div>
                        ))}
                    </div>

                    <div display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={8}>
                        {Data.map((item) => (
                            <div key={item.product_id} width={"100%"} height={"50px"}>
                                <Typography variant="body">{item.product_name}</Typography>
                            </div>
                        ))}
                    </div>

                    <div display="flex" flexDirection="column" justifyContent="center" gap={8}>
                        {Data.map((item) => (
                            <div key={item.product_id} width={"100%"} height={"50px"}>
                                <Typography variant="body">{item.order_quantity}</Typography>
                            </div>
                        ))}
                    </div>

                    <div display="flex" flexDirection="column" justifyContent="center" gap={8}>
                        {Data.map((item) => (
                            <div key={item.product_id} width={"100%"} height={"50px"}>
                                <Typography variant="body">{item.total_price}</Typography>
                            </div>
                        ))}
                    </div>
                </div>

                <Button variant="contained" sx={{ padding: "1%" }} onClick={BuyAllItems}>
                    Buy
                </Button>
            </div>
            {/* </Box> */}
        </>
    );
}

export default Buy_Cart_Item;
