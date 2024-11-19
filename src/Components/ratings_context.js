import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

// Create the Rating Context
const RatingContext = createContext();

// Provider component to share logic
export function RatingProvider({ children, rating, maxRating }) {
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    stars.push({ filled: i <= rating });
  }

  return (
    <RatingContext.Provider value={{ stars }}>
      {children}
    </RatingContext.Provider>
  );
}

RatingProvider.propTypes = {
  children: PropTypes.node.isRequired,
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
};

RatingProvider.defaultProps = {
  maxRating: 5,
};

// Custom hook to consume the context
export function useRating() {
  return useContext(RatingContext);
}
