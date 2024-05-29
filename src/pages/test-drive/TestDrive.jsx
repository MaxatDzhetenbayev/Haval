import React, { useEffect, useState } from 'react'

import { Box, Button, Container, MenuItem, Select, TextField, Typography } from '@mui/material'
import { addDoc, collection, doc, getDocs } from 'firebase/firestore'
import { db } from '@/shared/api/firebaseConfig'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayJs from 'dayjs'
import { toast } from 'react-toastify'




export const TestDrive = () => {

  const [modelList, setModelList] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [model, setModel] = useState('')
  const [date, setDate] = useState(null)

  const fetchModels = async () => {
    const models = await getDocs(collection(db, 'cars'))

    return models.docs.map(doc => ({ name: doc.data().name, id: doc.id }))
  }

  const fetchSetTestDrive = async (e) => {
    e.preventDefault()

    const data = {
      name,
      phone,
      model,
      date: date.toDate()
    }

    await addDoc(collection(db, "test-drives"), data)

    toast.success('Заявка отправлена')  

    setName('')
    setPhone('')
    setModel('')
    setDate(null)
  }

  useEffect(() => {
    fetchModels().then(models => {
      setModelList(models)
      setModel(models[0].name)
    })
  }, [])


  return (
    <Container maxWidth="sm" sx={{ padding: "40px 10px" }}>
      <Box>
        <Typography textAlign="center" variant="h4">Записаться на тест-драйв</Typography>
        <form onSubmit={fetchSetTestDrive} style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}>
          <TextField placeholder='Ваше имя*' value={name} onChange={(e) => setName(e.target.value)} />
          <TextField placeholder='Телефон*' value={phone} onChange={(e) => setPhone(e.target.value)} />
          <Select value={model} onChange={((e) => setModel(e.target.value))}>
            {
              modelList.map(model => (
                <MenuItem key={model.id} value={model.name}>{model.name}</MenuItem>
              ))
            }
          </Select>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={date} onChange={(newValue) => setDate(dayJs(newValue))} />
          </LocalizationProvider>
          <Button variant='contained' type='submit'>Отправить заявку</Button>
        </form>
      </Box>
    </Container>
  )
}
