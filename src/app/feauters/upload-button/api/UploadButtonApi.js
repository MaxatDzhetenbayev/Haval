import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

export const useHandleUpload = (setUploadProgress, setFileName, setFileUrl, onUploadComplete) => {
    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const storage = getStorage();
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
            },
            (error) => {
                console.error('Upload failed:', error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFileUrl(downloadURL);
                    setFileName(file.name);
                    if (onUploadComplete) {
                        onUploadComplete(downloadURL);
                    }
                });
            }
        );
    };

    return handleUpload;
};
