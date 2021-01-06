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
          console.log(itemRef.name);
          // All the items under listRef.
          itemRef.getDownloadURL().then((url) => {
            urls.push({ name: itemRef.name, url });
            setPhotos([...urls]);
          });
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.error(error);
      });

    // return () => {
    //   cleanup
    // }
  }, []);

  console.log('final photos ->', photos);
  return { photos };
};

export default useStorage;
