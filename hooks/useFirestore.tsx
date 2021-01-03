import { useState, useEffect} from 'react';
// import firebase from 'firebase/app';

import { fireStore } from 'config/fire-conf';
import 'firebase/firestore';

const useFirestore = (collection : string) => {

  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const subscription = fireStore
      .collection(collection)
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach(doc => {
          // console.log("-- doc --", doc.data());
          documents.push({...doc.data(), id: doc.id})
        });
        setDocs(documents);
      });
    // cleanup function unsub
    return () => subscription();
  }, [collection])

  return { docs };
}

export default useFirestore;