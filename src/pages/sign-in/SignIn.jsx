import { auth } from '@/shared/api/firebaseConfig';
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const fetchSignIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
        return navigate("/admin");
    };
    return (

        <Box sx={{
            display: "flex",
            height: "calc(100vh - 64px)",
            alignItems: "center",
        }}>
            <Container>
                <Typography variant="h3" sx={{textAlign: "center"}}>Авторизация</Typography>

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
