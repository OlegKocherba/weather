import React, { Component } from 'react';

import ListItem from './ListItem';
import SettingsContext from './SettingsContext';


class List extends Component {

    static contextType = SettingsContext;

    render() {
        const { citiesList } = this.context;

        return (
            <ul className="list-group list-group-flush">
                {citiesList.map((item, index) => {
                    return (
                        <ListItem
                            key={index}
                            index={index}
                            city={item}/>
                    )}
                )}
            </ul>
        );
    }
}

export default List;