import React from 'react';
import { firestore } from '../firebase/firebase.config';

const useFirestore = (collection) => {
  const [docs, setDocs] = React.useState([]);

  React.useEffect(() => {
    const unSubscribe = firestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];

        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        // set final documents to "docs" state:
        setDocs(documents);
      });

    return () => unSubscribe();
  }, [collection]);

  return { docs };
};

export default useFirestore;
