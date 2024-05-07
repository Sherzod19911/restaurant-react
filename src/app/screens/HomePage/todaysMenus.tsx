// import React  from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Container, Stack } from "@mui/material";
 import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
// import { CardCover,  CssVarsProvider } from "@mui/joy";
// import CardOverflow from "@mui/joy/CardOverflow";
// import IconButton from "@mui/joy/IconButton";
// import { Favorite } from "@mui/icons-material";
// import VisibilityIcon from '@mui/icons-material/LocationOnRounded';



import React from "react";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import { Favorite } from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/LocationOnRounded';

//REDUX
import { useSelector} from "react-redux";
import { createSelector } from "reselect";

import {retrieveTodaysMenus } from "../../screens/HomePage/selector"
import { Restaurant } from "../../../types/user";
import { serviceApi } from "../../../lib/config";



//REDUX SELECTOR
const todaysMenuRetriever = createSelector(
  retrieveTodaysMenus,
  (todaysMenus) => ({
    todaysMenus,
  })
);


//const card_list = Array.from(Array(4).keys());

export function TodaysMenus() {
  const {todaysMenus} = useSelector(todaysMenuRetriever);
  console.log("todaysMeenus::", todaysMenus);
    return (
        <div style={{ width:"1920px", height: "1055px",  backgroundColor: "#F4FDE7", marginRight: "50px" }}>
            <Container>
                <Stack flexDirection="column" alignItems={"center"} sx={{mt:"45px"}}>
              <Box sx={{  width:"1170px", height: "560px", marginRight: "150px", marginTop: "61px" }}>

                <Stack sx={{  width:"288px", height: "78px",marginTop: "40px",display:"flex",justifyContent: "center",alignItems: "center", marginLeft:"400px"}}>
                <h1>Unique Restaurants</h1>    
                  </Stack> 
                  <Stack sx={{  width:"1170px", height: "350px",marginTop: "40px",display: "flex", flexDirection: "row",justifyContent: "space-between" }}>
                 

                  {/* {todaysMenus.map((ele: Restaurant) => {
                  const image_path = `${serviceApi}/${ele.mb_image}`;
                  return (
                  <CssVarsProvider key={ele._id}>
                  
                  <Card sx={{ minHeight: 350,   
                                width: 276,     
                                marginRight: "30px",  cursor: "pointer" 
                                     }}>
                                        <img style={{width: "270px", height:"220px"}} src={image_path}
                                     loading="lazy"
                                       alt="rasim"
                                             />
                                            <CardContent>
                                         <Typography
                                        gutterBottom
                                      variant="h3"
                                   component="div"
                                 sx={{ textAlign: "center" }}
                               >
                              {ele.mb_nick}
                          </Typography>
                       <Typography
                        variant="body2"
                       color="text.secondary"
                       sx={{ textAlign: "center" }}
                       >
                      Lorem ipsum dolor sit amet, dipiscing elit, sed
                      </Typography>
                      </CardContent>
           
                      </Card>
                      </CssVarsProvider>)     

})} */}

{todaysMenus.map((ele: Restaurant) => {
                  const image_path = `${serviceApi}/${ele.mb_image}`;
                  return (
                  <CssVarsProvider key={ele._id}>


<Card
                 sx={{ minHeight: "430px",   
                 width: 325, 
                 marginRight: "35px", cursor: "pointer" 
                 }}
                 >    
                   <CardCover>
                      <img
                         src={image_path}
                         loading="lazy"
                         alt=""
                      />
                    </CardCover>
                    <CardCover
                        sx={{
                    background:
                          'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                     }}
                    />
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                     <Typography level="h2" fontSize="lg" textColor="#fff" mb={"1"}>
                     {ele.mb_nick}
                    </Typography>
                    <Typography
                       startDecorator={<LocationOnRoundedIcon />}
                       textColor="neutral.300"
                      >
                     {ele.mb_address}
                     </Typography>
                     </CardContent>
                     <CardOverflow 
                     sx={{
                      display: "flex", 
                      gap: 1.5, py: 1.5, 
                      px: "var(--Card-padding)", 
                      borderTop: "1px solid"
                      }}
                      >
                      <IconButton
                         aria-label="Like minimal photography" 
                         size="md" 
                         variant="solid" 
                         color="neutral"
                              sx={{
                                 position: "absolute",
                                 zIndex: 2,
                                 borderRadius: "50%",
                                 right: "1rem",
                                 bottom: 45,
                                 transform: "translateY(50%)",
                                 color: "rgba(0,0,0,.4)"


                              }}
                            >
                            {/* <Favorite style={{ fill: "white"}}/> */}
                            <Favorite 
                            style={{
                              fill: 
                              ele?.mb_liked && ele?.mb_liked[0].my_favorite
                              ? "red"
                              : "white",
                            }}
                            />

                            </IconButton>
                           <Stack sx={{flexDirection: "row"}}>
                        <Typography 

                          sx={{
                            fontWeight: "md", 
                            color: "neutral.300", 
                            alignItems: "center",
                            display: "flex" }}
                           >
                               {ele.mb_views}
                          <VisibilityIcon 
                            sx={{ 
                             fontSize: 20, 
                             marginLeft: "5px"}}/>
                         </Typography>

                         <Box sx={{ width: 2, bgcolor: "divider", ml: "6px", mr: "6px"}}/>
                        <Typography 
                          sx={{ 
                           fontWeight: "md", 
                           color: "neutral.300", 
                           alignItems: "center", 
                           display: "flex" 
                          }}
                         >

                        <div>{ele.mb_likes}</div>
                       <Favorite sx={{ fontSize: 20, marginLeft: "5px"}}/>
                       </Typography>
                     </Stack>
                   </CardOverflow>

                  </Card>
                  
                  </CssVarsProvider>)     

})}

                                   
                  {/* <Card sx={{ minHeight: 350,   
                                width: 276,     
                                marginRight: "30px",  cursor: "pointer" 
                                     }}>
                                        <img style={{width: "270px", height:"220px"}} src="/restaurant/ice.jpg"
                                     loading="lazy"
                                       alt="rasim"
                                             />
                                            <CardContent>
                                         <Typography
                                        gutterBottom
                                      variant="h3"
                                   component="div"
                                 sx={{ textAlign: "center" }}
                               >
                              Restaurant
                          </Typography>
                       <Typography
                        variant="body2"
                       color="text.secondary"
                       sx={{ textAlign: "center" }}   
                       >
                      Lorem ipsum dolor sit amet, dipiscing elit, sed
                      </Typography>
                     
                  </CardContent>
                  <Favorite style={{ fill: "white"}}/>
           
                                   </Card> */}

                                   
                  {/* <Card sx={{ minHeight: 350,   
                                width: 276,     
                                marginRight: "30px",  cursor: "pointer" 
                                     }}>
                                        <img style={{width: "270px", height:"220px"}} src="/restaurant/zira.jpg"
                                     loading="lazy"
                                       alt="rasim"
                                             />
                                            <CardContent>
                                         <Typography
                                        gutterBottom
                                      variant="h3"
                                   component="div"
                                 sx={{ textAlign: "center" }}
                               >
                              Restaurant
                          </Typography>
                       <Typography
                        variant="body2"
                       color="text.secondary"
                       sx={{ textAlign: "center" }}
                       >
                      Lorem ipsum dolor sit amet, dipiscing elit, sed
                      </Typography>
                    
                  </CardContent>
           
                                   </Card> */}

                                                     
                  {/* <Card sx={{ minHeight: 350,   
                                width: 276,     
                                marginRight: "30px",  cursor: "pointer" 
                                     }}>
                                        <img style={{width: "270px", height:"220px"}} src="/restaurant/pizza.png"
                                     loading="lazy"
                                       alt="rasim"
                                             />
                                            <CardContent>
                                         <Typography
                                        gutterBottom
                                      variant="h3"
                                   component="div"
                                 sx={{ textAlign: "center" }}
                               >
                              Restaurant
                          </Typography>
                       <Typography
                        variant="body2"
                       color="text.secondary"
                       sx={{ textAlign: "center" }}
                       >
                      Lorem ipsum dolor sit amet, dipiscing elit, sed
                      </Typography>
                  </CardContent>
           
                                   </Card> */}

                                   
                 
                                   
                
                                   
                    </Stack>
                    <Box sx={{  width:"170px", height: "184px", marginRight: "200px", marginTop: "-380px", marginBottom: "833px", marginLeft: "1300px"}}>
                <img src="/restaurant/Homes.png" alt="" />
                <Box sx={{  width:"190px", height: "203px", marginLeft: "-1550px", marginTop: "365px"}}>
                <img src="/restaurant/left1.png" alt="" />
            </Box>
             </Box> 
              {/*   
              </Box>    
            
           
               <Box sx={{ width:"1170px", height: "391px", marginRight: "140px",display: "flex", alignItems:"flex-end"}}>
               
               
               <Stack flexDirection={"row"}  gap={5} >
          {card_list.map((ele, index) => {
            return (
              <Card sx={{ maxWidth: 270, p: "30px", borderRadius: 5}}>
                <CardActionArea>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <StoreMallDirectoryOutlinedIcon
                      sx={{ width: 70, height: 70, color: "#ffc822" }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h3"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      Restaurant
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center" }}
                    >
                      Lorem ipsum dolor sit amet, dipiscing elit, sed
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ); 
          })} 
        </Stack> */}
       
              </Box>
              
            

                </Stack>     
            </Container>
            
        </div>
    )
}           





