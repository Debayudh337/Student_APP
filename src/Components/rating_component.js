import React from 'react';
import { useRating } from './ratings_context';
import './ratings.css';

function Ratings() {
  const { stars } = useRating();

  return (
    <div className="ratings">
      {stars.map((star, index) => (
        <span key={index} className={`star ${star.filled ? 'filled' : ''}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default Ratings;
