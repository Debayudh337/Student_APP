// RectangularButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './RectangularButton.css';

const RectangularButton = ({ content, onClick, disabled }) => {
  return (
    <div className={`button-box ${disabled ? 'disabled' : ''}`} onClick={!disabled ? onClick : null}>
      {typeof content === 'string' ? <span>{content}</span> : content}
    </div>
  );
};

RectangularButton.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string, // For text
    PropTypes.element, // For JSX (e.g., an image)
  ]).isRequired,
  onClick: PropTypes.func, // Function to handle button clicks
  disabled: PropTypes.bool, // Whether the button is disabled
};

RectangularButton.defaultProps = {
  disabled: false,
};

export default RectangularButton;
