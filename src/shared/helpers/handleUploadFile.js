import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../api/firebaseConfig";

export const handleUpload = async (file) => {
  const fileRef = ref(storage, `images/${file.name}`);

  const snapshot = await uploadBytes(fileRef, file);
  const imageurl = await getDownloadURL(snapshot.ref);

  return imageurl;
};
