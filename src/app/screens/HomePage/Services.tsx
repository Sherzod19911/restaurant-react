import { Box, Container, Stack } from "@mui/material"
import React from "react"
 export function Services () {
    return (
     <div style={{}}>
        <Container>
        <Stack sx={{width: "1171px", height: "620px",border: "1px solid green",mt:"100px",marginLeft:"100px"}}>
            <Box style={{width:"814px", height:"146px",marginLeft: "178px"}}>
               <h1 style={{width:"734px", height:"60px", display: "flex", alignItems: "center", justifyContent: "center",marginTop: "2px"}}>We invite you to Visit Our Restaurant</h1>
                <p  style={{width:"814px", height: "72px",marginTop: "3px"}}>The restaurant industry encompasses businesses that prepare and serve food and beverages to customers. This sector is crucial as it contributes significantly to the global economy, reflects cultural diversity.
                
                <div className="ad_frame1 ">
          <video
            className={"ads_video"}
            autoPlay={true}
            loop
            muted
            playsInline
            data-video-media=""
          >
             <source
          // data-src="https://fnb-p-c6e19b1675f4.imgix.net/87994cc2-0b2c-4b4e-a402-45c9834c267e/HP-6s-1920x1080-3_def.mp4?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80"
          type="video.webm"
          src="./restaurant/video.webm"     
        />
          </video>
        </div>                                
                </p>

            </Box>
            <Box  style={{width:"1170px", height:"430px",border: "1px solid red",marginTop: "44px"}} ></Box>
            
        </Stack>

        <Stack sx={{width:"1170px",height: "353px",marginTop: "85px", marginLeft:"100px", backgroundColor:"#FFFFFF"}}>
            <Box style={{width: "260", height: "65px"}}>
                <h1 style={{display:"flex", alignContent: "center",justifyContent:"center"}}>What We Do</h1>

            </Box>
            <Box style={{display:"flex",justifyContent:"space-between",backgroundColor:"#f8f9fa",marginTop:"40px"}}>



                <Box style ={{width:"270px", height: "248px",display: "flex",justifyContent: "center",alignItems: "center",backgroundColor: "#e9ecef",flexDirection: "column"}}>
                    <div style={{width: "94px", height: "94px",borderRadius: "50%",backgroundColor: "#7da640"}}>
                    <img style={{width: "55px",height: "55px",display: "flex",justifyContent: "center",marginTop: "19px",marginLeft:"19px"}} src="./restaurant/vegetable1.png" alt="rasim" />
                    </div>

                    <h3 style={{width: "151px", height: "30px"}}>Fresh Products</h3>
                    <p  style={{width: "246px", height: "42px",marginTop: "2px"}}>The restaurant industry is largest componentsof the hospitality. 
                    </p>
                 </Box>

                 <Box style ={{width:"270px", height: "248px",display: "flex",justifyContent: "center",alignItems: "center",backgroundColor: "#e9ecef",flexDirection: "column"}}>
                    <div style={{width: "94px", height: "94px",borderRadius: "50%",backgroundColor: "#7da640"}}>
                    <img style={{width: "55px",height: "55px",display: "flex",justifyContent: "center",marginTop: "19px",marginLeft:"19px"}} src="./restaurant/chef-hat 1.png" alt="rasim" />
                    </div>

                    <h3 style={{width: "151px", height: "30px"}}>Skilled Chefs</h3>
                    <p  style={{width: "246px", height: "42px",marginTop: "2px"}}>The restaurant industry is largest componentsof the hospitality. 
                    </p>
                 </Box>

                 <Box style ={{width:"270px", height: "248px",display: "flex",justifyContent: "center",alignItems: "center",backgroundColor: "#e9ecef",flexDirection: "column"}}>
                    <div style={{width: "94px", height: "94px",borderRadius: "50%",backgroundColor: "#7da640"}}>
                    <img style={{width: "55px",height: "55px",display: "flex",justifyContent: "center",marginTop: "19px",marginLeft:"19px"}} src="./restaurant/cocktail 1.png" alt="rasim" />
                    </div>

                    <h3 style={{width: "151px", height: "30px",marginLeft: "10px"}}>Best Bar Logo</h3>
                    <p  style={{width: "246px", height: "42px",marginTop: "2px"}}>The restaurant industry is largest componentsof the hospitality. 
                    </p>
                 </Box>

                 <Box style ={{width:"270px", height: "248px",display: "flex",justifyContent: "center",alignItems: "center",backgroundColor: "#e9ecef",flexDirection: "column"}}>
                    <div style={{width: "94px", height: "94px",borderRadius: "50%",backgroundColor: "#7da640"}}>
                    <img style={{width: "55px",height: "55px",display: "flex",justifyContent: "center",marginTop: "19px",marginLeft:"19px"}} src="./restaurant/cuisine 1.png" alt="rasim" />
                    </div>

                    <h3 style={{width: "151px", height: "30px"}}>Vegan Cuisene</h3>
                    <p  style={{width: "246px", height: "42px",marginTop: "2px"}}>The restaurant industry is largest componentsof the hospitality. 
                    </p>
                 </Box>
               
               
                
                
            </Box>
        </Stack>

        </Container>
     </div>
    )
 }