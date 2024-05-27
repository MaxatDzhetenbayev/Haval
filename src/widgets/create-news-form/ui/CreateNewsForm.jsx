import { UploadButton } from '@/app/feauters';
import { db } from '@/shared/api/firebaseConfig';
import { Box, Button, TextField, Typography } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



export const CreateNewsForm = () => {

    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState(null)

    const handleSave = async () => {
        await addDoc(collection(db, "news"), { content: text, title, date: new Date(), image: imageUrl });
    };


    return (
        <Box>
            <Typography variant="h3" textAlign="center">Создать новость</Typography>
            <TextField variant='standard' helperText="Заголовок" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <UploadButton onUploadComplete={(url) => setImageUrl(url)}>Загрузить картину</UploadButton>
            <ReactQuill value={text} onChange={setText} />
            <Button onClick={handleSave}>Сохранить</Button>
        </Box>
    )
}
