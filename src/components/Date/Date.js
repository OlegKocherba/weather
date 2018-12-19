import React, { Component } from 'react';
import moment from 'moment';
import './Date.css';


class Date extends Component {
    state = {
        now: moment()
    };

    currentMoment = () => {
         this.setState({now: moment()});
    };

    componentDidMount() {
        this.nowID = setInterval(this.currentMoment,1000)
    };

    componentWillUnmount() {
        clearInterval(this.nowID);
    };

    render() {
        let year = this.state.now.format('YYYY');
        let month = this.state.now.format('MMM');
        let day = this.state.now.format('DD');
        let hour = this.state.now.format('kk');
        let min = this.state.now.format('mm');

        return (
            <div>
                <div
                    onLoad={this.currentMoment}
                    className="date d-flex justify-content-between align-content-end">
                    <div className="time">{hour} : {min}</div>
                    <div className="calendar-date text-right">
                        <span className="day">{day}</span>
                        <span className="month">{month}</span>
                        <span className="year">{year}</span>
                    </div>
                </div>
            </div>
        );
    }
};

export default Date;
