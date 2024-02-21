import { Badge, Box, Button, Container, IconButton, Stack } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

 export function NavbarRestaurant(props: any)  {
    return(<div className='format_restaurant home_navbar'>
       <Container>
            <Stack flexDirection={"row"} 
            className='navbar_config' 
            justifyContent={"space-between"}
            >
               <Box>
                 <img src="/icons/restaurant.png"/>
                </Box>
               <Stack 
               flexDirection={"row"}     
                justifyContent="space-evenly" 
                alignItems={'center'}
                className="navbar_links"
                >
                    <Box className="hover-line"  onClick={props.setPath}>
                        <NavLink to="/" 
                        activeClassName="underLine">
                            Home
                            </NavLink>
                    </Box>
                    <Box className="hover-line" onClick={props.setPath}>
                        <NavLink to="/Restaurant" 
                        activeClassName="underLine">
                            Restaurant
                            </NavLink>
                    </Box>

                    <Box className="hover-line"onClick={props.setPath}>
                        <NavLink to="/Order" 
                        activeClassName="underLine">
                            Order
                            </NavLink>
                    </Box>
                    <Box className="hover-line" onClick={props.setPath}>
                        <NavLink to="/Community" 
                        activeClassName="underLine">
                            Community 
                            </NavLink>
                    </Box>

                    <Box className="hover-line" onClick={props.setPath}>
                        <NavLink to="/Shops" 
                        activeClassName="underLine">
                            Shop
                            </NavLink>
                    </Box>

                    <Box className="hover-line" onClick={props.setPath}>
                        <NavLink to="/Contact Us" 
                        activeClassName="underLine">
                            Contact Us
                            </NavLink>
                    </Box>

                    <Box className="hover-line">
                        <IconButton    
                            aria-label="cart"
                            id="basic-button"
                            aria-controls={undefined}
                            aria-haspopup="true"      
                            aria-expanded={undefined} >

                            <Badge badgeContent={3} color="secondary">
                                <img src={'/icons/shopping_cart.svg'}/>
                            </Badge>
                        </IconButton>
                    </Box>    
                    <Box>
                 
                        <Button type='submit' variant='contained' style={{color: "#ffffff", background: "#1976D2"}}>
                        KIRISH
                        </Button>

                    </Box>
                    </Stack>
                </Stack>
              
                    

                
        </Container>
    </div>);
 };