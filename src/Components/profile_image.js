import React from 'react';
import PropTypes from 'prop-types';
import './profile_image.css'; // Optional: For styling

function ProfileImage({ imageUrl, altText, size }) {
  // Fallback to a default image if imageUrl is not provided
  const defaultImage = 'https://via.placeholder.com/150'; // Replace with your placeholder URL
  const imageSource = imageUrl || defaultImage;

  return (
    <img
      src={imageSource}
      alt={altText || 'Profile'}
      className={`profile-image profile-image--${size}`}
    />
  );
}

// Define default props
ProfileImage.defaultProps = {
  altText: 'User Profile',
  size: 'medium',
};

// Prop type validation
ProfileImage.propTypes = {
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default ProfileImage;
