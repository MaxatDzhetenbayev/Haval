import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../shared/api/firebaseConfig";

export const crossoversModelAPi = async () => {
  const carsCollectionRef = collection(db, "cars");

  const carsDocs = await getDocs(carsCollectionRef);

  const cars = await Promise.all(
    carsDocs.docs.map(async (doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    })
  );

  return cars;
};
