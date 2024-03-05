import React  from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Container, Stack } from "@mui/material";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import { CssVarsProvider } from "@mui/joy";

const card_list = Array.from(Array(4).keys());

export function TodaysMenu() {
    return (
        <div style={{ width:"1920px", height: "1101px",  backgroundColor: "#F4FDE7", border:"1px solid black", marginRight: "50px" }}>
            <Container>
                <Stack flexDirection="column" alignItems={"center"} sx={{mt:"45px"}}>
              <Box sx={{  width:"1170px", height: "560px", border:"1px solid green", marginRight: "170px", marginTop: "61px" }}>

                <Box sx={{  width:"288px", height: "78px", border:"1px solid green",marginTop: "40px",display:"flex",justifyContent: "center",alignItems: "center", marginLeft:"400px"}}>
                  </Box> 
                  <Box sx={{  width:"1170px", height: "350px", border:"1px solid green",marginTop: "40px"}}>
                  
                    </Box>
                    <Box sx={{  width:"170px", height: "184px", marginRight: "200px", marginTop: "-380px", marginBottom: "833px", marginLeft: "1300px"}}>
                <img src="/restaurant/Homes.png" alt="" />
                <Box sx={{  width:"190px", height: "203px", marginLeft: "-1550px", marginTop: "365px"}}>
                <img src="/restaurant/left1.png" alt="" />
            </Box>
             </Box>
              </Box>    
            
           
              <Box sx={{ width:"1170px", height: "391px", border:"1px solid red",  marginRight: "170px",display: "flex", alignItems:"flex-end"}}>
               
               
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
                      Reataurent
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
        </Stack>
       
              </Box>
               
            

                </Stack>     
            </Container>
            
        </div>
    )
}           