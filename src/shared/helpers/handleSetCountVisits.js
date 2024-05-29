import { db } from "../api/firebaseConfig";

import { collection, query, where, setDoc, doc, getDocs } from "firebase/firestore";


export const handleSetUserVisit = async () => {
    const timeToSet = localStorage.getItem("time");
    const currentTime = Date.now();

    if (!timeToSet || Number(timeToSet) < currentTime) {
      const today = new Date().toLocaleDateString();
      const visitCollectionRef = collection(db, "visit");
      const visitQuery = query(visitCollectionRef, where("date", "==", today));

      const querySnapshot = await getDocs(visitQuery);

      if (querySnapshot.empty) {
        await setDoc(doc(db, "visit", today), { date: today, count: 1 });
        return;
      } else {
        const visitDoc = querySnapshot.docs[0];
        const visitDocRef = doc(db, "visit", visitDoc.id);
        await setDoc(
          visitDocRef,
          { count: +visitDoc.data().count + 1 },
          { merge: true }
        );
      }
      localStorage.setItem("time", Date.now() + 60 * 5 * 1000);
    }
  };