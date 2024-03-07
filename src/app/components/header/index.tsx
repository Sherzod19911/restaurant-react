import { Badge, Box, Button, Container, IconButton, Stack } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

 export function NavbarHome(props: any)  {
    return (
      <div className="home_navbar">
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
                        <NavLink to="/Help" 
                        activeClassName="underLine">
                            Help
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
                 
                        <Button type='submit' href="LoginPage" variant='contained' style={{color: "#ffffff", background: "#1976D2"}}>
                        KIRISH
                        </Button>

                    </Box>
                    </Stack>
                </Stack>
                <Stack className="head_information" justifyContent={"row"} border={"black"}>
                    <Stack className="head_information1" justifyContent={"column"} border={"red"} style={{ marginTop: "86px",marginLeft: "24px" }} >
                        <Box className="header1">
                        The Quality Rest Station
                        </Box>
                        <Box className="define_restaurant">
                        
                           "Choosing The
                         <br></br>
                           <span  style={{color:"#7DA640"}}>Best Quality Food"</span>
                      

                        
                        </Box>
                        <Box className="header2">
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Cumque consequuntur possimus commodi odit dolor tempore!

                        </Box>
                        
                        <Box className="button" display={"flex"}  flexDirection={"row"} >
                        <Box sx={{mt:'40px'}}>
                            <Button variant='contained' style={{width:"166px", height: "57px", background: '#7DA640',color:'#ffffff'}}>
                            Book a Table
                            </Button>
                        </Box>

                        <Box sx={{mt:'40px'}}   style={{marginLeft:"25px" }}>
                            <Button variant='contained' style={{width:"150px", height: "57px", background: '#ffffff',color:"#7DA640"}}>
                            View More 
                            </Button>
                        </Box>
                        </Box>
                        <Box className="pagination" sx={{mt:'10px'}}>
                        

                        </Box>
                    </Stack>

                    <Stack className="big_img">

                        <Box className="right_sides" sx={{mt:'0px'}}>
                        <img src='./home/blister4.png' style={{width: "327px", height: "795px",marginLeft: "-200px", marginRight: "414px"}} alt='rasim'/>  

                        </Box>
                        <Box className="right_side">
                        <img src='./home/blister3.png'  style={{width: "560px", height: "965px", marginTop: "-133px",marginLeft: "70px"}} alt='rasim'/> 
                        </Box>
                        </Stack>

                </Stack>
        </Container>
        </div>);
 };