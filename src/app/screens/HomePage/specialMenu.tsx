import React  from "react";
import { Box, Container, Stack } from "@mui/material";
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import { Favorite } from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/LocationOnRounded';
import { Card } from "@mui/joy";





export function SpecialMenu() {
    return (
        <div className="menu_static_frame">
            <Container>
                <Stack 
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                style={{ width:"930px" }}
                sx={{mt:"85px"}}

                >
                    <Box className="category_title">
                    Special Menu
                    </Box>

                    <Stack 
                    flexDirection={"row"}
                        sx={{mt:"45px"}}
                        marginRight={"5px"}
                        marginLeft={"80px"}
                        paddingLeft={"100px"}
                        >
                              <CssVarsProvider>

{/* The first restaurants vs codes */}

<Card
sx={{ minHeight: 415,   
width: 300,     
marginRight: "25px", cursor: "pointer" 
}}
>    
<CardCover >

<img className="menu_photo" src="/restaurant/piz1.jpg"
      loading="lazy"
      alt="rasim"
   />
 
   
   </CardCover>


 <CardCover
     sx={{
 background: "#F5F5F5"
       
  }}
 />
 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="menu_photo" src="/restaurant/pizza.png"
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="pizza" level="h3" fontSize="24px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   Pizza
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
    Lorem ipsum dolor sit amet consectetur adipisicing elit.

    <h5 className="price">$550</h5>
    <a className="buttun_card">Add to Cart</a>
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
         <Favorite style={{ fill: "white"}}/>

         </IconButton>
        <Stack sx={{flexDirection: "row"}}>
     <Typography 

       sx={{
         fontWeight: "md", 
         color: "neutral.300", 
         alignItems: "center",
         display: "flex" }}
        >
       100 {" "}
       <VisibilityIcon 
         sx={{ 
          fontSize: 20, 
          marginLeft: "10px"}}/>
      </Typography>

      {/* <Box sx={{ width: 2, bgcolor: "divider", ml: "6px", mr: "6px"}}/> */}
     <Typography 
       sx={{ 
        fontWeight: "md", 
        color: "neutral.300", 
        alignItems: "center", 
        display: "flex" 
       }}
      >      

     <div>50</div>
    <Favorite sx={{ fontSize: 20, marginLeft: "10px"}}/>
    </Typography>
  </Stack>
</CardOverflow>

</Card>

<Card
sx={{ minHeight: 415,   
width: 300,     
marginRight: "25px", cursor: "pointer" 
}}
>    
<CardCover >

<img className="menu_photo" src="/restaurant/piz1.jpg"
      loading="lazy"
      alt="rasim"
   />
 
   
   </CardCover>


 <CardCover
     sx={{
 background: "#F5F5F5"
       
  }}
 />
 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="menu_photo" src="/restaurant/piz1.jpg"
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="pizza" level="h3" fontSize="24px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   Rice
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
    Lorem ipsum dolor sit amet consectetur adipisicing elit.

    <h5 className="price">$550</h5>
    <a className="buttun_card">Add to Cart</a>
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
         <Favorite style={{ fill: "white"}}/>

         </IconButton>
        <Stack sx={{flexDirection: "row"}}>
     <Typography 

       sx={{
         fontWeight: "md", 
         color: "neutral.300", 
         alignItems: "center",
         display: "flex" }}
        >
       100 {" "}
       <VisibilityIcon 
         sx={{ 
          fontSize: 20, 
          marginLeft: "10px"}}/>
      </Typography>

      {/* <Box sx={{ width: 2, bgcolor: "divider", ml: "6px", mr: "6px"}}/> */}
     <Typography 
       sx={{ 
        fontWeight: "md", 
        color: "neutral.300", 
        alignItems: "center", 
        display: "flex" 
       }}
      >      

     <div>50</div>
    <Favorite sx={{ fontSize: 20, marginLeft: "10px"}}/>
    </Typography>
  </Stack>
</CardOverflow>

</Card>

<Card
sx={{ minHeight: 415,   
width: 300,     
marginRight: "25px", cursor: "pointer" 
}}
>    
<CardCover >

<img className="menu_photo" src="/restaurant/piz1.jpg"
      loading="lazy"
      alt="rasim"
   />
 
   
   </CardCover>


 <CardCover
     sx={{
 background: "#F5F5F5"
       
  }}
 />
 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="menu_photo" src="/restaurant/greensalad.jpg"
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="pizza" level="h3" fontSize="24px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   Green Salad
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
    Lorem ipsum dolor sit amet consectetur adipisicing elit.

    <h5 className="price">$550</h5>
    <a className="buttun_card">Add to Cart</a>
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
         <Favorite style={{ fill: "white"}}/>

         </IconButton>
        <Stack sx={{flexDirection: "row"}}>
     <Typography 

       sx={{
         fontWeight: "md", 
         color: "neutral.300", 
         alignItems: "center",
         display: "flex" }}
        >
       100 {" "}
       <VisibilityIcon 
         sx={{ 
          fontSize: 20, 
          marginLeft: "10px"}}/>
      </Typography>

      {/* <Box sx={{ width: 2, bgcolor: "divider", ml: "6px", mr: "6px"}}/> */}
     <Typography 
       sx={{ 
        fontWeight: "md", 
        color: "neutral.300", 
        alignItems: "center", 
        display: "flex" 
       }}
      >      

     <div>50</div>
    <Favorite sx={{ fontSize: 20, marginLeft: "10px"}}/>
    </Typography>
  </Stack>
</CardOverflow>

</Card>

<Card
sx={{ minHeight: 415,   
width: 300,     
marginRight: "25px", cursor: "pointer" 
}}
>    
<CardCover >

<img className="menu_photo" src="/restaurant/piz1.jpg"
      loading="lazy"
      alt="rasim"
   />
 
   
   </CardCover>


 <CardCover
     sx={{
 background: "#F5F5F5"
       
  }}
 />
 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="menu_photo" src="/restaurant/pasta.jpg"
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="pizza" level="h3" fontSize="24px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   Pasta
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
    Lorem ipsum dolor sit amet consectetur adipisicing elit.

    <h5 className="price">$550</h5>
    <a className="buttun_card">Add to Cart</a>
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
         <Favorite style={{ fill: "white"}}/>

         </IconButton>
        <Stack sx={{flexDirection: "row"}}>
     <Typography 

       sx={{
         fontWeight: "md", 
         color: "neutral.300", 
         alignItems: "center",
         display: "flex" }}
        >
       100 {" "}
       <VisibilityIcon 
         sx={{ 
          fontSize: 20, 
          marginLeft: "10px"}}/>
      </Typography>

      {/* <Box sx={{ width: 2, bgcolor: "divider", ml: "6px", mr: "6px"}}/> */}
     <Typography 
       sx={{ 
        fontWeight: "md", 
        color: "neutral.300", 
        alignItems: "center", 
        display: "flex" 
       }}
      >      

     <div>50</div>
    <Favorite sx={{ fontSize: 20, marginLeft: "10px"}}/>
    </Typography>
  </Stack>
</CardOverflow>

</Card>





</CssVarsProvider>

                    </Stack>
               
               </Stack>
            </Container>
        </div>
    )
}