import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '@/shared/api/firebaseConfig';

export const AdminSignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const fetchSignIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return navigate("/admin/create-car");
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <Box
            sx={{
                display: "flex",
                height: "calc(100vh - 64px)",
                alignItems: "center",
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="h3">Вход в админ панель</Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        marginTop: "20px",
                    }}
                >
                    <TextField
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        marginTop: "40px",
                        marginBottom: "20px",
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={() => fetchSignIn(email, password)}
                    >
                        Войти
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}
