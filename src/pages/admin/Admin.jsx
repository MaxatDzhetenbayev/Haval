import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'

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
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/api/firebaseConfig';

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

    const handleGetVisitsData = async () => {
        const visitCollectionRef = collection(db, "visit");
        const querySnapshot = await getDocs(visitCollectionRef);
        const visits = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setVisitData(visits.sort((a, b) => {
            const [dayA, monthA, yearA] = a.date.split('.');
            const [dayB, monthB, yearB] = b.date.split('.');

            const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
            const dateB = new Date(`${yearB}-${monthB}-${dayB}`);

            return dateA - dateB;
        }).slice(-7));
    };

    useEffect(() => {
        handleGetVisitsData();
    }, []);

    console.log(visitData)


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
            <Box >
                <Bar options={options} data={barData} />
            </Box>
        </Container>
    )
}
