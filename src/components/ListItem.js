import React, {Component} from 'react';

import SettingsContext from './SettingsContext'


class ListItem extends Component {

    static contextType = SettingsContext;

    render() {
        const { removeCity } = this.context;

        return (
            <li className="list-group-item">
                <span>{this.props.city}</span><span onClick={() => removeCity(this.props.index)}><i className="fas fa-times"></i></span>
            </li>
        );
    }
}

export default ListItem;