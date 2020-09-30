// BASIC:
import React from 'react';
import './UploadForm.style.sass';

// COMPONENTS:
import UploadInput from '../upload-input/UploadInput.component';
import Progressbar from '../../components/progressbar/Progressbar.component';

// UTILITIES:

// COMPONENT:=>
const UploadForm = () => {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);

  const uploadHandler = (e) => {
    let selectedFile = e.target.files[0];

    const types = ['image/png', 'image/jpeg'];

    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('ERROR, You have uploaded an unsupported file type.');
    }
  };

  return (
    <section className="upload-center">
      {/* FORM */}
      <form>
        <UploadInput uploadHandler={uploadHandler} />
      </form>

      {/* upload viewer */}
      <div className="upload-viewer">
        {error && <p className="error-message">{error}</p>}
        {file && (
          <h3 className="file-name">Uploading your file: {file.name} now...</h3>
        )}
        {file && <Progressbar file={file} setFile={setFile} />}
      </div>
    </section>
  );
};

export default UploadForm;
