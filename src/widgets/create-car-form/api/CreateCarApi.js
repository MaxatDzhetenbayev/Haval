import { db } from "@/shared/api/firebaseConfig";
import { handleUpload } from "@/shared/helpers/handleUploadFile";
import { addDoc, collection } from "firebase/firestore";


export const fetchCreateCar = async ({ modelInfo, specifications, configurations }) => {
  try {
   //  const cardImageURl = await handleUpload(modelInfo.cardImage);
   //  const videoURl = await handleUpload(modelInfo.video);
   //  const imageURl = await handleUpload(modelInfo.image);
    const carRef = (
      await addDoc(collection(db, "cars"), {
        ...modelInfo,
        cardImage: "",
        image: "",
        video: "",
      })
    ).id;

    //  Конфигурации

    await addDoc(
      collection(db, `cars/${carRef}/specifications`),
      specifications
    );

    configurations.forEach(async (config) => {
      const configRef = (
        await addDoc(collection(db, `cars/${carRef}/configurations`), config)
      ).id;

      // config.engineOptions.forEach(async (engine) => {
      //   await addDoc(
      //     collection(
      //       db,
      //       `cars/${carRef}/configurations/${configRef}/engineOptions`
      //     ),
      //     engine
      //   );
      // });

      // await addDoc(
      //   collection(db, `cars/${carRef}/configurations/${configRef}/features`),
      //   config.feauteres
      // );
    });
  } catch (error) {
    console.error(error);
  }
};
