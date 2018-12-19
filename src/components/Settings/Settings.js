import React, { Component } from 'react';

import Form from '../Form/Form';
import List from '../List/List';

class Settings extends Component {
    render() {
        return (
            <div className="settings">
                <h2>Cities List</h2>
                <Form/>
                <List/>
            </div>
        );
    }
}

export default Settings;
