import { React, useState } from "react";
import { Box, AppBar, Toolbar, IconButton, Typography, Button, TextField, List, ListItem, ListItemIcon, ListItemText, Tabs, Tab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Drawer, Dropdown, ListItemButton, Menu, MenuButton, MenuItem } from '@mui/joy';
import HomeIcon from '@mui/icons-material/Home';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router-dom";
import RedeemIcon from '@mui/icons-material/Redeem';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import OutboxIcon from '@mui/icons-material/Outbox';
import logo from '../../../../public/images/logo.png'

const styles = {
    paper: {
        backgroundColor: "red",
        width: "200px"
    }
}
function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [Search, setSearch] = useState('');
    const [ismenu, setMenu] = useState(false);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const isSellerLogin = useSelector(state => { return (state.seller.isLoggedIn) });
    const isUserLogin = useSelector(state => { return (state.user.isLoggedIn) });

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        console.log(searchTerm);
        // Perform search functionality here
    };
    const handleClose = () => {
        setMenu(false);
    }
    const handleClick = (event) => {
        setSearch(searchTerm)
        console.log(Search);
        handleClose()

    }

    function handleChange(event, value) {
        setValue(value);
    }

    return (
        <Box>
            <AppBar >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                    {/* <IconButton onClick={(e) => { setMenu(true) }}>
                        <MenuIcon sx={{ color: "white" }} />
                    </IconButton> */}
                    {/* <Drawer
                        anchor={"left"}
                        open={ismenu}
                        onClose={handleClose}

                    >
                        <List>


                            {!isSellerLogin && !isUserLogin && (
                                <>
                                    <ListItemButton component={Link} to="/" >
                                        <ListItemIcon >
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Home" />
                                    </ListItemButton>

                                    <ListItemButton component={Link} to="/Help" >
                                        <ListItemIcon >
                                            <HelpCenterIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Help" />
                                    </ListItemButton>



                                    <ListItemButton component={Link} to="/About" >
                                        <ListItemIcon >
                                            <InfoIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="About" />
                                    </ListItemButton>
                                </>
                            )
                            }
                            {
                                isUserLogin && (
                                    <>
                                        <ListItemButton component={Link} to="/home" >
                                            <ListItemIcon >
                                                <HomeIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Home" />
                                        </ListItemButton>

                                        <ListItemButton component={Link} to="/cart" >
                                            <ListItemIcon >
                                                <ShoppingCartIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Cart" />
                                        </ListItemButton>
                                        <ListItemButton component={Link} to="/userprofile" >
                                            <ListItemIcon >
                                                < Person2Icon />
                                            </ListItemIcon>
                                            <ListItemText primary="Profile" />
                                        </ListItemButton>
                                        <ListItemButton component={Link} to="/orders" >
                                            <ListItemIcon >
                                                < RedeemIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Orders" />
                                        </ListItemButton>
                                    </>
                                )
                            }

                            {
                                    isSellerLogin&& (
                                    <>
                                       

                                        <ListItemButton component={Link} to="/new" >
                                            <ListItemIcon >
                                                <ShoppingCartIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="New" />
                                        </ListItemButton>
                                        <ListItemButton component={Link} to="/profile" >
                                            <ListItemIcon >
                                                < Person2Icon />
                                            </ListItemIcon>
                                            <ListItemText primary="Profile" />
                                        </ListItemButton>
                                    </>
                                )
                            }

                        </List>

                    </Drawer> */}
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Box>
                        <img src={logo} alt=""  width={"60px"}/>
                        </Box>
                        <Box>
                        <Typography variant="h4" sx={{display:""}}>
                        ShopSphere
                    </Typography>
                        </Box>
                    </Box>
                   
                    <Box width={"60%"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
                        <TextField variant="standard" sx={{ width: "80%" }} value={searchTerm} onChange={handleSearch} />
                        <IconButton onClick={handleClick}>
                            <SearchIcon />
                        </IconButton>
                    </Box>



                    <Box >
                       
                        <Box display={"flex"} justifyContent={"space-evenly"} gap={5}>
                            {!isSellerLogin && !isUserLogin && (
                           <>
                           
                           <Box>
                                
                                <Link to="">
                                            <IconButton>
                                            <HomeIcon />
                                        </IconButton>
                                </Link>
                            </Box>
                            <Box> 
                               
                                <Link to="/user/auth">
                                            <IconButton>
                                            <AccountCircleIcon />
                                        </IconButton>
                                </Link>
                                </Box>
                            <Box>
                          
                                <Link to="/seller/auth">
                                            <IconButton>
                                            <StorefrontIcon/> 
                                        </IconButton>
                                </Link>
                            </Box>
                            </>
                        )
                        }

                            {
                                isUserLogin &&(
                                    <>
                                    
                                <Link to="/home">
                                            <IconButton>
                                            <HomeIcon/>
                                        </IconButton>
                                </Link>
                    
                            
                                <Link to="/cart/items">
                                            <IconButton>
                                            <ShoppingCartIcon/>
                                        </IconButton>
                                </Link>
                                    
                                    
                                <Link to="/userprofile">
                                            <IconButton>
                                            <AccountBoxIcon/>
                                        </IconButton>
                                </Link>

                                <Link to="/orders">
                                            <IconButton>
                                            <OutboxIcon />
                                        </IconButton>
                                </Link>
                                   
                                    </>
                                )
                            }
                        
                             {/* If the seller logged in   */}

                            {
                                isSellerLogin&&(
                                    
                                    <>
                                   
                                <Link to="/new">
                                            <IconButton>
                                            <OutboxIcon/>
                                        </IconButton>
                                </Link>
                                    
                                    
                            
                                <Link to="/sellerprofile">
                                            <IconButton>
                                            <AccountBoxIcon/>
                                        </IconButton>
                                </Link>
                                   
                                    </>
                                )
                            } 

                        </Box>
                    </Box>


                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Header;