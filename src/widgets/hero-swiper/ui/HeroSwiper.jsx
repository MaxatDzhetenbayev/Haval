import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/shared/api/firebaseConfig";
import { useTranslation } from "react-i18next";

export const HeroSwiper = () => {
  const { t } = useTranslation();
  const [cars, setCars] = useState([]);

  const fetchCommonCarsInfo = async () => {
    const cars = await getDocs(collection(db, "cars"));

    const carsList = cars.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    setCars(carsList);
  };

  useEffect(() => {
    fetchCommonCarsInfo();
  }, []);

  const theme = useTheme();

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {cars.map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "calc(100vh - 64px)",
              display: "flex",
              alignItems: "center",
              color: "white",
              fontSize: "2rem",
            }}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: item.position,
              }}
            >
              <Typography
                component="h1"
                variant="h1"
                fontWeight="600"
                sx={{ fontSize: "clamp(46px, 6vw, 96px)" }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "clamp(28px , 6vw, 43px)" }}
              >
                {t("starting_price", { price: item.starting_price })}
              </Typography>
              <Link
                to={`/models/${item.id}`}
                style={{
                  marginTop: "20px",
                  padding: "10px 40px",
                  fontSize: "1.5rem",
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "5px",
                }}
              >
                {t("more")}
              </Link>
            </Container>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
