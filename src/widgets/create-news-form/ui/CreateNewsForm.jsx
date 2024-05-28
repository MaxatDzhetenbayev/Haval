import { UploadButton } from "@/app/feauters";
import { db } from "@/shared/api/firebaseConfig";
import { Box, Button, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const CreateNewsForm = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const handleSave = async () => {
    await addDoc(collection(db, "news"), {
      content: text,
      title,
      date: new Date().toLocaleDateString(),
      image: imageUrl,
    });
  };

  return (
    <Box sx={{ padding: "30px 0px 0px" }}>
      <Typography variant="h4" textAlign="center">
        Создать новость
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        <TextField
          variant="standard"
          helperText="Заголовок"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <UploadButton onUploadComplete={(url) => setImageUrl(url)}>
          Загрузить картину
        </UploadButton>
        <ReactQuill style={{ height: 200 }} value={text} onChange={setText} />
        <Button sx={{ marginTop: "40px" }} onClick={handleSave}>
          Сохранить
        </Button>
      </Box>
    </Box>
  );
};
