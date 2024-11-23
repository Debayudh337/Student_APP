// MultiStageProgress.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './MultiStageProgress.css';

const MultiStageProgress = ({ currentStage }) => {
  return (
    <div className="progress-container">
      {[1, 2, 3, 4].map((stage) => (
        <div
          key={stage}
          className={`progress-oval ${stage <= currentStage ? 'active' : ''}`}
        ></div>
      ))}
    </div>
  );
};

MultiStageProgress.propTypes = {
  currentStage: PropTypes.number.isRequired, // Accepts a number between 1 and 4
};

export default MultiStageProgress;
