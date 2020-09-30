import React from 'react';
import useStorage from '../../hooks/useStorage.hook';

function Progressbar({ file, setFile }) {
  const { progress, url } = useStorage(file);

  React.useEffect(() => {
    if (url) setFile(null);
  }, [url]);

  console.log(progress, url);

  return (
    <div
      className="progressbar"
      style={{
        width: `${progress}%`,
        background: 'burlywood',
        height: '0.25rem',
      }}
    ></div>
  );
}

export default Progressbar;
