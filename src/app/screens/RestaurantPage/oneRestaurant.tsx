import React from 'react';
import { Container, Button, Box, Stack } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder  from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RemoveRedIEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge"
import "../../../css/navbar.css";
import "../../../css/restaurant.css";

const restaurant_list = Array.from(Array(10).keys());
const product_list = Array.from(Array(8).keys());



 export function OneRestaurant(){        
    return <div className="single_restaurant">
       <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
                <Stack className={"avatar_big_box"}>
                    <Box className={"top_text"}>
                        <p>Gold Samarkand</p>
                        <Box className={"Single_search_big_box"}>
                            <form className={"Single_search_form"} action={""} method={""}>
                                <input
                                    type={"search"}
                                    className={"Single_searchInput"}
                                    name={"Single_resSearch"}
                                    placeholder={"Search"}
                                />
                                <Button
                                    className={"Single_button_search"}
                                    variant='contained'
                                    endIcon={<SearchIcon />}
                                >
                                 Search
                                </Button>
                            </form>
                        </Box>
                    </Box>     
                </Stack>

                <Stack
                    style={{ width: "100%", display: "flex" }}
                    flexDirection={"row"}
                    sx={{ mt: "35px" }}
                >
                    <Box className={"prev_btn restaurant-prev"}>
                        <ArrowBackIosNewIcon
                            sx={{ fontSize: 40 }}
                            style={{ color: "white" }} 
                        />
                    </Box>
                    <Swiper
                        className={"restaurant_avatars_wrapper"}
                        slidesPerView={7}
                        centeredSlides={false}
                        spaceBetween={30}
                        navigation={{
                            nextEl:".restaurant-next",
                            prevEl:".restaurant-prev",
                        }}
                    >
                        {restaurant_list.map((ele, index) => {
                            return (
                                <SwiperSlide
                                    style={{ cursor: "pointer" }}
                                    key={index}
                                    className={"restaurant_avatars"}
                                >
                                    <img src="/restaurant/shirin.jpg" />
                                    <span style={{color: "#222222"}}> Samarqand</span>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <Box
                        className={"next_btn restaurant-next"}
                        fontStyle={{ color: "green" }}>
                        <ArrowForwardIosIcon sx={{fontSize: 40}} />
                    </Box>
                </Stack>

                <Stack
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"flex-end"}
                    width={"90%"}
                    sx={{ mt: "65px" }}
                >
                    <Box className={"dishs_filter_box"}>
                        <Button variant={"contained"} color="secondary">
                            New
                        </Button>
                        <Button variant={"contained"} color="secondary">
                            Price
                        </Button>
                        <Button variant={"contained"} color="secondary">
                            Likes
                        </Button>
                        <Button variant={"contained"} color="secondary">
                            Views
                        </Button>
                    </Box>
                </Stack>


            <Stack
                    style={{ width: "100%", display: "flex", minHeight: "600px" }}
                    flexDirection={"row"}
                >

                <Stack className={"dish_category_box"}>
                 





                   
                    </Stack>

                <Stack className={"dish_wrapper"}>
                    {product_list.map((ele, index) => {
                        const size_volume = "normal size";

                        return (
                            <Box className={"dish_box"} key={`${index}`}>
                                <Box
                                    className={"dish_img"}
                                    sx={{
                                        backgroundImage:`url("/restaurant/photo1.jpg")`,          
                                    }}
                                >     
                                    <div className={"dish_sale"}>{size_volume}</div>
                                    <Button
                                        className={"like_view_btn"}
                                        style={{ left: "36px" }}     
                                    >
                                        <Badge badgeContent={8} color="primary">
                                            <Checkbox
                                                icon={<FavoriteBorder style={{ color: "white" }} />}
                                                id={`${index}`}
                                                checkedIcon={<Favorite style={{ color: "red" }} />}
                                                checked={true}
                                            />    
                                        </Badge>
                                    </Button>
                                    <Button className={"view_btn"}>
                                        <img
                                            src={"/icons/shopping-cart.svg"}     
                                            style={{ display: "flex" }}
                                        />
                                    </Button>      
                                    <Button
                                        className={"like_view_btn"}
                                        style={{ right: "36px" }}
                                    >
                                        <Badge badgeContent={1000} color="primary" >
                                            <Checkbox
                                                icon={
                                                    <RemoveRedIEyeIcon style={{ color: "white" }} />
                                                }
                                            />
                                        </Badge>
                                    </Button>
                                </Box>
                                <Box className={"dish_desc"}>
                                    <span className={"dish_title_text"}>very delicious</span>
                                    <div className={"dish_desc_text"} >
                                        <MonetizationOnIcon />7
                                    </div>
                                </Box>
                            </Box>
                        );
                    })};
            </Stack>
            </Stack>

        </Stack>
        </Container>

        <Stack className={"review_for_restaurant"}>
           
               <Box style={{width: "483px", height: "75px",marginLeft: "719px",  display :"flex", justifyContent: "center", alignItems: "center"}}>
                 <h1>Customer's Comment</h1> 
                </Box>
                <Stack sx={{width: "1170px",height: "466px",marginLeft: "375px",marginTop: "45px",display: "flex",flexDirection:"row"}}>
                    <Stack sx={{width: "705px",height: "470px",display: "flex",flexWrap: "wrap"}}>
                    <img style={{width: "230px",height: "230px"}} src="/restaurant/rasim1.jpg"
                      loading="lazy"
                           alt="rasim"
                          />

                    <img style={{width: "230px",height: "230px"}} src="/restaurant/rasim2.jpg"
                      loading="lazy"
                           alt="rasim"
                          />

                 <img style={{width: "230px",height: "230px"}} src="/restaurant/rasim5.jpg"
                      loading="lazy"
                           alt="rasim"
                          />
                            <img style={{width: "230px",height: "230px"}} src="/restaurant/rasim7.jpg"
                              loading="lazy"
                           alt="rasim"
                          />
                            <img style={{width: "230px",height: "230px"}} src="/restaurant/rasim5.jpg"
                      loading="lazy"
                           alt="rasim"
                          />
                            <img style={{width: "230px",height: "230px"}} src="/restaurant/rasim6.jpg"
                      loading="lazy"
                           alt="rasim"
                          />

                    </Stack>
                    <Stack sx={{ width:"470px",
  height: "470px",
  backgroundColor: "#7DA640"}}>
                    <p className="p2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        <Box sx={{display: "flex",flexDirection: "row"}}>
                          <div className="name2">
                          <h3>John Doe</h3>
                          <h5>Food Export</h5>
                          </div>
                          <div>
                          <img src="/restaurant/right-quote 1.png"
                      loading="lazy"
                           alt="rasim"
                          />
                        </div>
                        </Box>
                    </Stack>

                </Stack>
               
               
           
        </Stack>
        <Box style={{width: "170px", height: "184px",marginLeft: "1780px",marginTop: "-300px"}}>
        <img style={{width: "170px",height: "184px"}} src="/restaurant/l.png"
                      loading="lazy"
                           alt="rasim"
                          />
        </Box>
       
        

            <Stack
                sx={{ mt: "60px" }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box className={"category_title"}>Restaurant Address</Box>
                <iframe
                    style={{ marginTop: "60px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734762081!2d69.2267250514616!3d41.322703307863044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sko!2skr!4v1655461169573!5m2!1sko!2skr"
                    width="1320"
                    height="500"
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>

            </Stack>
    
    </div>
 }