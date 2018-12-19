import React from 'react';

import './ErrorIndicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
        <i className="fas fa-exclamation-circle fa-5x"></i>
      <span className="error-title">OUCH!</span>
      <span>
          something has gone wrong
      </span>
        <span>
          this element is not working
      </span>
      <span>
        we will fix it ASAP
      </span>
    </div>
  );
};

export default ErrorIndicator;
