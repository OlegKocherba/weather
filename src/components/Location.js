import React from 'react';

const location = (props) => {
    return (
        <div className="location d-flex justify-content-between">
            <div className="city">{props.city}</div>
            <div className="country">{props.country}</div>
        </div>
    );
};

export default location;
