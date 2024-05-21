import {
  collection,
  doc,
  getDoc,
  getDocs,

} from "firebase/firestore";
import { db } from "@/shared/api/firebaseConfig";



export const getCarDetails = async(id) => {
  const carDocRef = doc(db, 'cars', id);
  const carDoc = await getDoc(carDocRef);
  const carData = carDoc.data();

  const specificationsCollection = collection(db, `cars/${id}/specifications`);
  const specificationsSnapshot = await getDocs(specificationsCollection);
  const specifications = specificationsSnapshot.docs[0].data()

  const configurationsCollection = collection(db, `cars/${id}/configurations`);
  const configurationsSnapshot = await getDocs(configurationsCollection);
  const configurations = configurationsSnapshot.docs.map(doc => doc.data())

  return {
    id: carDoc.id,
    ...carData,
    specifications,
    configurations
  }
}