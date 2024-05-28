import { db } from "@/shared/api/firebaseConfig";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const News = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    onSnapshot(collection(db, "news"), (snapshot) => {
      const news = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setNews(news);
    });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container sx={{ padding: "30px 0px 0px" }}>
      <Typography variant="h4" textAlign="center">
        Новости
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {news.map((item) => (
          <Paper
            key={item.id}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography>{item.date}</Typography>
              <Typography variant="h5" sx={{ fontWeight: "600" }}>
                {item.title}
              </Typography>
              <Button
                variant="contained"
                sx={{ marginTop: "30px" }}
                onClick={() => navigate(item.id)}
              >
                ПОдробнее
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};
