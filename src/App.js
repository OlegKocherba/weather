import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Weather from './components/Weather';
import DateNow from './components/Date';
import Location from './components/Location';
import Settings from './components/Settings';
import SettingsContext from './components/SettingsContext'


const API_KEY = "7f6d3160d36a1495be69da295f3e25eb";

class App extends Component {

    state = {
        currentCity: null,
        country: null,
        temperature: null,
        description: null,
        citiesList:["Odessa", "Kiev"],
        error: null
    }

    componentDidMount() {
        this.getWeatherData()
    }

    getWeatherData = async (e) => {
        // e.preventDefault();
        // const city = e.target.elements.city.value;
        const city = "Odessa,UA";
        if(city) {
            const api_url = await
                axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`);
            const data = await api_url.data;

            this.setState({
                currentCity: data.name,
                country: data.sys.country,
                temperature: data.main.temp,
                description: data.weather[0].description,
            });
        }
    }


    addCity = (cityName) => {
        const citiesList = [...this.state.citiesList, cityName];
        this.setState({citiesList})

    };

    removeCity = (index) => {
        let list  = [...this.state.citiesList];
        list.splice(index, 1);
        this.setState({citiesList: list})

    };

    render() {
        const {citiesList, currentCity, country, temperature, description} = this.state;

        return (
            <div className="App">
                <div className="d-flex ">
                    <div className="card full-center col-6">
                        <div className="card-body">
                            <Location
                                city={currentCity}
                                country={country}
                            />
                            <Weather
                                temperature={temperature}
                                description={description}
                                />
                            <DateNow/>
                        </div>
                    </div>
                </div>
                <SettingsContext.Provider value={{
                    citiesList,
                    addCity: this.addCity,
                    removeCity: this.removeCity
                }}>
                <Settings />
                </SettingsContext.Provider>
            </div>
        );
    }
}

export default App;
