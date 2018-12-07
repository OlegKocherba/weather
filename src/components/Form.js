import React, {Component} from 'react';

import SettingsContext from './SettingsContext'


class Form extends Component {

    state = {
        inputValue: ''
    };

    static contextType = SettingsContext;


    onChangeHandler = (e) => {
        this.setState({inputValue: e.target.value })
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.inputValue) {
            this.context.addCity(this.state.inputValue)
        }
    }


    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <input
                    type="text"
                    name="city"
                    placeholder="New City"
                    value={this.state.inputValue}
                    onChange={this.onChangeHandler}/>
                <button className="btn btn-primary">
                    Add City
                </button>
            </form>
        );
    }
}

export default Form;
