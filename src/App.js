// BASIC:
import React from 'react';

// COMPONENTS:
import Title from './components/title/Title.component';
import UploadForm from './components/upload-form/UploadForm.component';
import ImagesPreview from './components/images-preview/ImagesPreview.component';

// UTILITIES:

// ROOT COMPONENT:=>
function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImagesPreview />
    </div>
  );
}

export default App;
