import React, {Component} from 'react';

import './ListItem.css';

import {SettingsConsumer} from '../../Context/SettingsContext';


class ListItem extends Component {

    static contextType = SettingsConsumer;

    render() {
        const { removeCityListItem, updateCurrentCityData, currentCity } = this.context;
        const {city, id} = this.props;


        const activeClassName = currentCity === city ? "list-group-item-success" : null;
        const hiddenClassname = currentCity === city ? "d-none" : null;
        return (
            <li
                id={id}
                className={`list-group-item list-item text-dark d-flex ${activeClassName}`}>
                <span
                    onClick={() => updateCurrentCityData(id)}>{city}</span>
                <span
                    className={`btn btn-danger btn-sm ml-auto ${hiddenClassname}`}
                    onClick={() => removeCityListItem(id)}><i className="fas fa-times"></i></span>
            </li>
        );
    }
}

export default ListItem;