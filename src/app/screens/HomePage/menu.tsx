import React  from "react";
import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { CardCover } from "@mui/joy";
const card_list = Array.from(Array(1).keys());
export function Menu() {
    return (
        <div style={ { width: "1392px", height: "465px",marginLeft:"264px",marginTop:"38px", backgroundColor: "#FFF"}}>
            <Container >
                <Stack  >
                  <Box sx={{width:"366px", height: "75px", marginLeft: "520px",marginTop: "30px"}}>
                  <Typography
                      gutterBottom
                      variant="h1"
                      component="div"
                      sx={{ textAlign: "center", justifyContent: "center", marginTop:"5px", fontFamily: "" }}
                      style={{ fontWeight:"800px",fontSize: "45px"}}
                    >
                    From Our Menu
                    </Typography>
                  </Box>
                
                  <Box sx={{width:"1392px", height: "350px",marginLeft: "-60px"}}>
                    <Stack flexDirection={"row"}sx={{width:"1170px", height: "350px",  marginLeft: "105px"}}>
                    {card_list.map((ele, index) => {
                        return (

                            <Card sx={{ minHeight: 350,   
                                width: 270,     
                                marginRight: "30px",  cursor: "pointer" 
                                     }}>
                                        <img style={{width: "270px", height:"350px"}} src="/restaurant/menu.jpg"
                                     loading="lazy"
                                       alt="rasim"
                                             />
           
                                   </Card>
      
                      );
                    }
                    )}
                    
                    <Card sx={{ minHeight: 350,   
                                width: 270,     
                                marginRight: "30px", border: "1px solid red", cursor: "pointer" 
                                     }}>
                                        <img style={{width: "270px", height:"350px"}} src="/restaurant/menu4.jpg"
                                     loading="lazy"
                                       alt="rasim"
                                             />
           
                                   </Card>

                                   
                            <Card sx={{ minHeight: 350,   
                                width: 270,     
                                marginRight: "30px", border: "1px solid red", cursor: "pointer" 
                                     }}>
                                        <img style={{width: "270px", height:"350px"}} src="/restaurant/menu3.jpg"
                                     loading="lazy"
                                       alt="rasim"
                                             />
           
                                   </Card>
                                   
                            <Card sx={{ minHeight: 350,   
                                width: 270,     
                                marginRight: "30px", border: "1px solid red", cursor: "pointer" 
                                     }}>
                                        <img style={{width: "270px", height:"350px"}} src="/restaurant/menu1.jpg"
                                     loading="lazy"
                                       alt="rasim"
                                             />
           
                                   </Card>
                        
                </Stack>
                </Box>
               
                </Stack>
            </Container>
        </div>
    )
}          