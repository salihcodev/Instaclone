import React from 'react';
import useFirestore from '../../hooks/useFirestore.hook';
import ImageItem from '../image-item/ImageItem.component';
import './ImagesPreview.style.sass';

const ImagesPreview = () => {
  const { docs } = useFirestore('images');

  return (
    <section className="images-previewer">
      <div className="imgs-container">
        {docs ? (
          docs.map((item) => <ImageItem key={item.id} item={item} />)
        ) : (
          <h2>You have not upload any images yet.</h2>
        )}
      </div>
    </section>
  );
};

export default ImagesPreview;
