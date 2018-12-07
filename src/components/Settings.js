import React, { Component } from 'react';

import Form from './Form';
import List from './List';

class Settings extends Component {
    render() {
        return (
            <div>
                <Form/>
                <List/>
            </div>
        );
    }
}

export default Settings;
