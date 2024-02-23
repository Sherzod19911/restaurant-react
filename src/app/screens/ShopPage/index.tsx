import { Stack } from "@mui/joy";
import { Box, Container } from "@mui/material";
import React from "react";
import  "../../../css/navbar.css";


export function ShopPage() {
    return <div className="shop_page">
        <Container>
            <Stack className="shop_main_css">
              <Box className="shop_left_side"></Box>
              <Box className="shop_right_side"></Box>

            </Stack>
        </Container>
        </div>
}