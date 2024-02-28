import React, { useState } from 'react';
import './Nkot.css'; // Import the CSS file for styling
import taswira1 from './im1.png'
import taswira2 from './im2.png'




function Nkot() {
  const [selectedIm, setSelectedIm] = useState(1);

  const handleImClick = (imNumber) => {
    setSelectedIm(imNumber === selectedIm ? null : imNumber);
  };

  return (
    <div className="image-gallery">
      <div className="image-container">
        {selectedIm === 1 && (
          <img src={taswira1} alt="ima1" className="ima-image" />
        )}
        <img
          src={taswira2}
          alt="im1"
          className={`im-image ${selectedIm === 1 ? 'selected' : ''}`}
          onClick={() => handleImClick(1)}
        />
      </div>
      <div className="image-container">
        {selectedIm === 2 && (
          <img src={taswira1} alt="ima2" className="ima-image" />
        )}
        <img
          src={taswira2}
          alt="im2"
          className={`im-image ${selectedIm === 2 ? 'selected' : ''}`}
          onClick={() => handleImClick(2)}
        />
      </div>
      <div className="image-container">
        {selectedIm === 3 && (
          <img src={taswira1} alt="ima3" className="ima-image" />
        )}
        <img
          src={taswira2}
          alt="im3"
          className={`im-image ${selectedIm === 3 ? 'selected' : ''}`}
          onClick={() => handleImClick(3)}
        />
      </div>
      <div className="image-container">
        {selectedIm === 4 && (
          <img src={taswira1} alt="ima4" className="ima-image" />
        )}
        <img
          src={taswira2}
          alt="im4"
          className={`im-image ${selectedIm === 4 ? 'selected' : ''}`}
          onClick={() => handleImClick(4)}
        />
      </div>
    </div>
  );
}

export default Nkot;
