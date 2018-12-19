import React, { Fragment } from 'react';
import './Weather.css'


const Weather = (props) =>  {
    return (
        <Fragment>
            <div className="m-auto col-8 text-center">
                <div className="temperature">
                    {props.temperature}°C
                </div>
                <div className="weather-details mb-2">
                    {props.description}
                </div>
            </div>
        </Fragment>
    );
};

export default Weather;