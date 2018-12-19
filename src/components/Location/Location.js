import React from 'react';
import './Location.css';

const location = ({city, country}) => {
    return (
        <div className="location d-flex justify-content-between">
            <div className="city">{city}</div>
            <div className="country">{country}</div>
        </div>
    );
};

export default location;
