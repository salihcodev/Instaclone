import React from 'react';
import './Progressbar.style.sass';
import useStorage from '../../hooks/useStorage.hook';

function Progressbar({ file, setFile }) {
  const { progress, url } = useStorage(file);

  React.useEffect(() => {
    if (url) setFile(null);
  }, [url]);

  return (
    <div
      className="progressbar"
      style={{
        width: `${progress}%`,
      }}
    >

      <span className="loader"></span>
    </div>
  );
}

export default Progressbar;
