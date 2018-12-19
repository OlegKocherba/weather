import React from 'react';

import  './SideSwitcher.css';

const SideSwitcher = ({switchSides}) => {

    return (
        <div className="settings-switcher pt-3 pb-3 text-right">
            <span className="settings-button "
                  onClick={switchSides}>
                <i className="fas fa-lg fa-cog"></i>
            </span>
        </div>
    );
};

export default SideSwitcher;
