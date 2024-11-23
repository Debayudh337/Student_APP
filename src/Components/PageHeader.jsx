// PageHeader.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.css'; 

const PageHeader = ({ heading }) => {
  return (
    <header className="page-header">
      <h1>{heading}</h1>
    </header>
  );
};

PageHeader.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default PageHeader;
