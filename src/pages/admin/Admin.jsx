import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from "@/shared/api/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";




const createCar = async () => {

  const modelInfo = {
    name: "Haval Dargo",
    cardImage: "https://haval-motor.kz/userdata/cars/cars_26/image_s.png?1698657874",
    imaage: "https://haval-motor.kz/userdata/cars/cars_26/image_s.png?1698657874",
    video: "https://firebasestorage.googleapis.com/v0/b/haval-86ee7.appspot.com/o/images%2Fh6_gt.mp4?alt=media&token=0e2ebdb0-2266-420b-9dfb-4563406212e1",
  }

  const specifications = {
    "Тип двигателя": "Бензиновый",
    "Объем двигателя": "2.0 л",
    "Мощность": "190 л.с.",
    "Крутящий момент": "340 Нм",
    "Коробка передач": "Автоматическая",
    "Привод": "Полный",
    "Разгон до 100 км/ч": "9.6 с",
  }

  const configurations = [
    {
      name: "Comfort",
      engineOptions: [
        {
          name: "2.0 л 190 л.с.",
          price: "8 490 000 тг",
        },
        {
          name: "4.0 л 2100 л.с.",
          price: "8 490 000 тг",
        }
      ],
      feauteres: {
        "Экстерьер": {
          "Панорамная крыша с люком": false,
          "Электропривод двери багажника с сенсором": false
        },
        "Интерьер": {
          "Стальная накладка на пороги": false,
          "Макияжные зеркала в солнцезащитных козырьках с подсветкой": false
        }
      }
    },
    {
      name: "Elite",
      engineOptions: [
        {
          name: "2.0 л 190 л.с.",
          price: "8 490 000 тг",
        },
        {
          name: "4.0 л 2100 л.с.",
          price: "8 490 000 тг",
        }
      ],
      feauteres: {
        "Экстерьер": {
          "Панорамная крыша с люком": false,
          "Электропривод двери багажника с сенсором": false
        },
        "Интерьер": {
          "Стальная накладка на пороги": false,
          "Макияжные зеркала в солнцезащитных козырьках с подсветкой": false
        }
      }
    }
  ]


  const carRef = (await addDoc(collection(db, "cars"), modelInfo)).id

  await addDoc(collection(db, `cars/${carRef}/specifications`), specifications)

  configurations.forEach(async (config) => {
    const configRef = (await addDoc(collection(db, `cars/${carRef}/configurations`), config)).id

    config.engineOptions.forEach(async (engine) => {
      await addDoc(collection(db, `cars/${carRef}/configurations/${configRef}/engineOptions`), engine)
    })

    await addDoc(collection(db, `cars/${carRef}/configurations/${configRef}/features`), config.feauteres)
  })



}


export const Admin = () => {

  useEffect(() => {
    createCar()
  }, []);



  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");


  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Progress function...
        },
        (error) => {
          console.log(error);
        },
        () => {
          // Complete function...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
            console.log('File available at', downloadURL);
          });
        }
      );
    }
  };

  return (
    <Box>
      <div>
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleUpload}>Upload</button>
        <br />
        {url && <img src={url} alt="Uploaded" />}
      </div>
    </Box>

  );
};
