import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/shared/api/firebaseConfig";

export const Admin = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const [visitData, setVisitData] = useState([]);
  const [testDriveData, setTestDriveData] = useState([]);

  const handleGetVisitsData = async () => {
    const visitCollectionRef = collection(db, "visit");
    const querySnapshot = await getDocs(visitCollectionRef);
    const visits = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setVisitData(
      visits
        .sort((a, b) => {
          const [dayA, monthA, yearA] = a.date.split(".");
          const [dayB, monthB, yearB] = b.date.split(".");

          const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
          const dateB = new Date(`${yearB}-${monthB}-${dayB}`);

          return dateA - dateB;
        })
        .slice(-7)
    );
  };

  const fetchTestDriveData = async () => {
    const testDriveCollectionRef = collection(db, "test-drives");
    const querySnapshot = await getDocs(testDriveCollectionRef);
    const testDriveData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setTestDriveData(testDriveData);
  };

  useEffect(() => {
    handleGetVisitsData();
  }, []);

  useEffect(() => {
    fetchTestDriveData();
  }, []);

  console.log(testDriveData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Статистика посещения сайта",
        font: {
          size: 20,
        },
      },
    },
  };

  const labels = visitData.map((item) => item.date);

  const barData = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: visitData.map((item) => item.count),
        backgroundColor: "rgba(00, 00, 255, 0.5)",
      },
    ],
  };

  return (
    <Container sx={{ padding: "30px 0px" }}>
      <Box>
        <Bar options={options} data={barData} />
      </Box>
      <Box
        sx={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <h2>Список заявок на тест-драйв</h2>
        {testDriveData.map((item) => (
          <Paper
            elevation={1}
            sx={{
              display: "flex",
              padding: "30px 10px",
              gap: "20px",
              alignItems: "center",
              justifyContent: "space-around",
            }}
            key={item.id}
          >
            <Typography>Имя: {item.name}</Typography>
            <Typography>Телефон: {item.phone}</Typography>
            <Typography>
              Дата: {new Date(item.date.seconds * 1000).toLocaleString()}
            </Typography>
            <Typography>Модель: {item.model}</Typography>
            <Typography />
          </Paper>
        ))}
      </Box>
    </Container>
  );
};
