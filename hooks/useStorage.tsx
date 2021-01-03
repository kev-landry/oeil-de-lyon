import { useEffect, useState } from 'react';
import { fireStorage } from 'config/fire-conf.js';

const useStorage = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const storageRef = fireStorage.ref('lyon');
    storageRef
      .listAll()
      .then(function (res) {
        let urls = [];
        res.items.forEach((itemRef) => {
          // All the items under listRef.
          itemRef.getDownloadURL().then((url) => {
            urls.push(url);
            setPhotos([...urls]);
          });
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });

    console.log({ storageRef });
    // return () => {
    //   cleanup
    // }
  }, []);

  console.log('final photos ->', photos);
  return { photos };
};

export default useStorage;
