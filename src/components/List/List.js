import React, { Component } from 'react';
import PropTypes from 'prop-types';


import ListItem from '../ListItem/ListItem';
import {SettingsConsumer} from '../../Context/SettingsContext';


class List extends Component {

    static contextType = SettingsConsumer;

    render() {
        const { citiesList } = this.context;

        return (
            <ul className="list-group list-group">
                {citiesList.map((item) => {
                    return (
                        <ListItem
                            id={item.id}
                            key={item.id}
                            city={item.name}/>
                    )}
                )}
            </ul>
        );
    }
}

ListItem.propTypes = {
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired
};


export default List;