import React from 'react';
import useFirestore from '../../hooks/useFirestore.hook';

const ImagesPreview = () => {
  const { docs } = useFirestore('images');

  return (
    <>
      {docs && (
        <div className="images-preview" style={{ display: 'flex' }}>
          {docs.map((doc) => (
            <section
              style={{ width: '150px', height: '150px' }}
              className="item"
              key={doc.id}
            >
              <img
                src={`${doc.url}`}
                style={{ width: '100%', height: '100%' }}
              />
            </section>
          ))}
        </div>
      )}
    </>
  );
};

export default ImagesPreview;
