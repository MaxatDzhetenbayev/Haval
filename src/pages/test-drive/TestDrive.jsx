import React, { useEffect } from 'react'
import { db } from '@/shared/api/firebaseConfig'
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore'



const createTestDrive = async () => {
  const testDrive = {
    name: 'John Doe',
    phone: '1234567890',
  }

  const feedback = {
    message: 'Great service!',
    rating: 5,
  }

  const docRef = addDoc(collection(db, 'test-drives'), testDrive).then((doc) => {
    console.log('Document written with ID: ', doc.id)

    addDoc(collection(db, `test-drives/${doc.id}/feedback`), feedback).then((feedback) => {
      console.log('Feedback written with ID: ', feedback.id)
    })
  })


}


const getTestDrive = async () => {
  const testCollection = collection(db, 'test-drives')

  const testSnapshot = await getDocs(testCollection);
  const testDriveDataPromises  = testSnapshot.docs.map(async (doc) => {
    const feedbackCollection = collection(db, `test-drives/${doc.id}/feedback`)
    const feedbackSnapshot = await getDocs(feedbackCollection);
    const feedbackData = feedbackSnapshot.docs.map(feedback => {
      return { id: feedback.id, ...feedback.data() }
    })
    return { id: doc.id, ...doc.data(), feedback: feedbackData}
  });
  
  const testDriveData = await Promise.all(testDriveDataPromises);
  console.log(testDriveData)

}


export const TestDrive = () => {

  useEffect(() => {
    // createTestDrive()
    getTestDrive()

  }, [])

  return (
    <div>TestDrive</div>
  )
}
