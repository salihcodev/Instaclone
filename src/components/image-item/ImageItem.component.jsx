import React from 'react';
import './ImageItem.style.sass';

const ImageItem = ({ item }) => {
  const { url, id } = item;
  return (
    <div className="image-item">
      <img src={`${url}`} alt={`${id}`} />
    </div>
  );
};

export default ImageItem;
