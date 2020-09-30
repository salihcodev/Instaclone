// BASIC:
import React from 'react';
import './UploadInput.style.sass';

// UTILITIES:

// COMPONENT:=>
const UploadInput = ({ uploadHandler }) => (
  <input
    className="upload-input"
    type="file"
    name="upload-file"
    id="input-upload"
    onChange={uploadHandler}
  />
);

export default UploadInput;
