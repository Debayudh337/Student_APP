import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FilePreviewer.css';

const FilePreviewer = ({ files }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : files.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < files.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className={styles.container}>
      {/* File Preview */}
      <div className={styles.preview}>
        {files[currentIndex].type === 'image' ? (
          <img
            src={files[currentIndex].url}
            alt={files[currentIndex].name}
            className={styles.image}
          />
        ) : (
          <div className={styles.filePlaceholder}>
            <span style={{ fontSize: '24px', marginBottom: '5px' }}>📄</span>
            <span>{files[currentIndex].name}</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className={styles.navigation}>
        <button onClick={handlePrev} className={styles.navButton}>
          &lt;
        </button>
        {files.map((_, index) => (
          <span
            key={index}
            className={`${styles.circle} ${index === currentIndex ? styles.circleActive : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
        <button onClick={handleNext} className={styles.navButton}>
          &gt;
        </button>
      </div>
    </div>
  );
};

FilePreviewer.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['image', 'file']).isRequired,
    })
  ).isRequired,
};

export default FilePreviewer;
