import { db } from "@/shared/api/firebaseConfig";
import { Box, Container, Typography } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const NewsDetail = () => {
  const { id } = useParams();

  const [news, setNews] = useState({});
  const fetchNewsById = async (id) => {
    const docRef = doc(db, "news", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setNews(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    fetchNewsById(id);
  }, [id]);

  return (
    <Container sx={{ padding: "30px 10px 0px" }}>
      <Typography variant="h4">{news.title}</Typography>
      <Typography variant="h6">{news.date}</Typography>
      <img
        src={news.image}
        alt={news.title}
        style={{ width: "100%", marginTop: "30px" }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: news.content }}
        style={{
          padding: "40px 0px 20px",
        }}
      />
    </Container>
  );
};
