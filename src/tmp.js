import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Form from './components/Form';



const API_KEY = "7f6d3160d36a1495be69da295f3e25eb";


class App extends Component {

    getWeatherData = async () => {
        const api_url = await
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Odessa,ua&units=metric&lang=ru&APPID=${API_KEY}`);
        const data = await api_url.data;
        console.log(data);
}


    render() {
        return (
            <div className="App">
                <Form/>

                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-4">
                            <div className="card panel">
                                <div className="card-header">Weather App</div>
                                <div className="card-body panel-front text-center">
                                    <div className="d-flex justify-content-between">
                                        <div>10:10</div>
                                        <div>13 маюля</div>
                                    </div>
                                    <div className="icon ">{}</div>
                                    <div className="temperature">10 ℃</div>
                                    <div className="weather">CLoudy</div>
                                    <div className="location d-flex justify-content-between">
                                        <div className="city">Odessa</div>
                                        <div className="country">UA</div>
                                    </div>
                                </div>
                                <button onClick={this.getWeatherData}>TEST</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
