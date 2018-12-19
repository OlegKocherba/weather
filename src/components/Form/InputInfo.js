import React, {Component} from 'react';

class InputInfo extends Component {
    render() {
        return (
            <div className="input-info text-danger pt-1 pb-1">
                <i className="fas fa-exclamation-triangle"></i> {this.props.text}
            </div>
        );
    }
}

export default InputInfo;