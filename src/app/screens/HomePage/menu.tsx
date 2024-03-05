import React  from "react";
import { Box, Container, Stack, Typography } from "@mui/material"
export function Menu() {
    return (
        <div style={ { width: "1392px", height: "465px", border: "1px solid red",marginLeft:"264px",marginTop:"38px", backgroundColor: "#FFF"}}>
            <Container >
                <Stack  >
                  <Box sx={{width:"366px", height: "75px", border: "1px solid green", marginLeft: "520px",marginTop: "38px"}}>
                  <Typography
                      gutterBottom
                      variant="h1"
                      component="div"
                      sx={{ textAlign: "center", justifyContent: "center", marginTop:"15px" }}
                      style={{ fontWeight:"50px"}}
                    >
                    From Our Menu
                    </Typography>
                  </Box>
                  <Box sx={{width:"1170px", height: "350px", border: "1px solid green",marginLeft: "70px"}}>

                  </Box>
                </Stack>
            </Container>
        </div>
    )
}          