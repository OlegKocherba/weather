import React, {Component} from 'react';

import InputInfo from './InputInfo';

import {SettingsConsumer} from '../../Context/SettingsContext'

class Form extends Component {

    state = {
        inputValue: ''
    };

    static contextType = SettingsConsumer;


    onChangeHandler = (e) => {
        this.setState({inputValue: e.target.value })
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.inputValue.trim()) {
            this.context.addCityListItem(this.state.inputValue);
            this.setState({inputValue: ''})
        }
    };

    resetError = (e) => {
        this.context.resetInputError();
    };

    render() {
        const {inputError} = this.context;
        const errText = inputError ?
            <InputInfo text="There is no such city in database"/>
            : null;

        return (
            <form
                className="form mb-2"
                onSubmit={this.onSubmit} >
                <div className="input-group">
                    <input
                        className="form-control"
                        type="text"
                        name="city"
                        placeholder="You can add new city here"
                        value={this.state.inputValue}
                        onChange={this.onChangeHandler}
                        onFocus={this.resetError}/>
                    <div className="input-group-append">
                        <button className="btn btn-primary">
                            Add City
                        </button>
                    </div>
                </div>
               {errText}
            </form>
        );
    }
}

export default Form;
