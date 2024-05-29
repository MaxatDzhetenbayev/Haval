import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const BannerTest = () => {


    const isMobile = useMediaQuery('(max-width: 600px)');

    return (
        <Box sx={{ backgroundColor: "#000" }}>
            <Container sx={{
                padding: "60px 10px",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px"
            }}>
                <Box>
                    <Typography  variant="h4" sx={{ color: "#fff", textAlign: isMobile ? "center" : "initial" }}>Хотите протестировать наши автомобили?</Typography>
                    <Typography variant="h6" sx={{ color: "#fff",  textAlign: isMobile ? "center" : "initial" }}>Запишитесь на тест-драйв</Typography>
                </Box>
                <Link to="/test-drive" style={{ backgroundColor: "#fff", color: "#000", padding: "10px 40px", borderRadius: "8px" }}>Записаться на тест драйв</Link>
            </Container>
        </Box>
    )
}
