import React, { useRef, useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { useHandleUpload } from '../api/UploadButtonApi';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const UploadButton = ({ onUploadComplete, children }) => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [fileName, setFileName] = useState('');
    const [fileUrl, setFileUrl] = useState('');

    const inputRef = useRef(null);
    const handleUpload = useHandleUpload(setUploadProgress, setFileName, setFileUrl, onUploadComplete);


    const handleClick = () => {
        inputRef.current.click();
    }

    return (
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <input
                style={{ display: 'none' }}
                ref={inputRef}
                type="file"
                onChange={handleUpload}
            />
            <label htmlFor="upload-button-file">
                <Button variant="contained" component="span" startIcon={<CloudUploadIcon />} onClick={handleClick}>
                    {uploadProgress > 0 && uploadProgress < 100 ? (
                        <CircularProgress
                            variant="determinate"
                            sx={{ color: "#fff" }}
                            value={uploadProgress}
                            size={24}
                        />
                    ) : children || 'Загрузить'}
                </Button>
            </label>
            {uploadProgress === 100 && <p>Загружен файл: {fileName}</p>}
            {fileUrl && <Button href={fileUrl} target="_blank" rel="noopener noreferrer">View File</Button>}
        </div>
    );
};
