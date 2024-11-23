import React from 'react';
import PropTypes from 'prop-types';
import AddMoreImage from '../Assets/AddMoreImage.svg';

const AddFile = ({ fileName }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img
        src={AddMoreImage}
        alt="add-file"
        style={{
          width: '24px',   // Adjust the width to a reasonable size
          height: '24px',  // Match height to maintain a square shape
          objectFit: 'contain', // Prevent image distortion
        }}
      />
      <h3 style={{ margin: 0 }}>{fileName}</h3> {/* Ensures no extra margins around text */}
    </div>
  );
};

AddFile.propTypes = {
  fileName: PropTypes.string.isRequired,
};

export default AddFile;
