import { db } from "@/shared/api/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";


export const fetchCreateCar = async ({ modelInfo, specifications, configurations }) => {
  try {
    const carRef = (
      await addDoc(collection(db, "cars"), {
        ...modelInfo,
      })
    ).id;

    //  Конфигурации

    await addDoc(
      collection(db, `cars/${carRef}/specifications`),
      specifications
    );

    configurations.forEach(async (config) => {
      await addDoc(collection(db, `cars/${carRef}/configurations`), config)


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
