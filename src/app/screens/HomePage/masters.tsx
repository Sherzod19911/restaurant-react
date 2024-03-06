import { Box, Card, CardContent, Container, Stack } from "@mui/material";
import React from "react";
import Typography from "../../MaterialTheme/typography";
export function Masters () {
    return(
        <div style={{width: "1920px", height: "689px", border: "1px solid green", backgroundColor: "#F4FDE7"}}>
            <Box sx={{ width: "295px", height: "75px", border: "1px solid green",Font: "lobster",marginLeft: "812px",marginTop: "86px", backgroundColor: "#F4FDE7" }}>
             Master Chefs
            </Box>
            <Box sx={{ flexDirection:"row", width: "1394px", height: "388px", border: "1px solid green", marginLeft: "264px",marginTop: "40px", backgroundColor: "#F4FDE7"}}>
            <Stack  flexDirection={"row"} width={"1170px"} height={"388px"} border={"1px solid black"} marginLeft={"110px"}>
            <Card sx={{ minHeight: 311,   
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

                                   <Card sx={{ minHeight: 350,   
                                width: 270,     
                                marginRight: "30px", border: "1px solid red", cursor: "pointer" 
                                     }}>
                                        <img style={{width: "270px", height:"300px"}} src="/restaurant/menu1.jpg"
                                     loading="lazy"
                                       alt="rasim"
                                             />
                                             <Box sx={{display: "flex", flexDeriction: "rov"}}>
                                               <Box>
                                              <p>225</p>
                                              <p>55</p>
   
                                                </Box> 
                                                <Box>
                                                <img src="/restaurant/menu1.jpg" style={{width: "15,75px", height: "18px", border:"1px solid green" }}/>
                                                </Box>
                                             </Box>
           
                                   </Card>

                                 

                                  
                                   </Stack>
            </Box>
      
        </div>
    )
}



