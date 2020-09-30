import React from 'react';
import { storage, firestore, timeStamp } from '../firebase/firebase.config';

const useStorage = (file) => {
  const [progress, setProgress] = React.useState(0);
  const [url, setUrl] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // firebase storage:
    const storageRef = storage.ref(file.name);
    const collectionRef = firestore.collection('images');
    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        // get percentage status:
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();

        const createdAt = timeStamp();
        collectionRef.add({ url, createdAt });
        // set uploaded file URL:
        setUrl(url);
      }
    );
  }, [file]); /* [file] = to run useEffect every time that [file] changes. */

  // return final results:
  return { progress, url, error };
};

export default useStorage;
