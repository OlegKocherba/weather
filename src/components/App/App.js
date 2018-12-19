import React, { Component } from 'react';
import ApiData from '../../services/ApiService';

import './App.css';

import Weather from '../Weather/Weather';
import DateNow from '../Date/Date';
import Location from '../Location/Location';
import Settings from '../Settings/Settings';
import SideSwitcher from '../SideSwitcher/SideSwitcher'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

import  { SettingsProvider } from '../../Context/SettingsContext';


class App extends Component {

    apiData  = new ApiData();

    state = {
        currentCityId: null,
        currentCity: "",
        country: "",
        temperature: null,
        description: null,
        citiesList:[],
        inputError: false,
        isSettingsOn: false
    };

    componentDidMount() {
        this.loadInitData();
    }

    componentDidUpdate(prevProps, prevState) {
        this.saveToLocal();
    }

   loadInitData = () => {
       this.setState(this.loadFromLocal(), () => {
           if (!this.state.currentCityId) {
               this.apiData.getDataByCoordinates()
                   .then(({id}) => {
                       console.log(id);
                       this.updateCurrentCityData(id)
                   })
                   .catch(error => {
                       if(error.code === 1) {
                          alert('Add city in Settings or allow app get Geolocation data')
                       }
                       console.log(error);
                   })
           }
           this.updateCurrentCityData(this.state.currentCityId)
       });
   };

    // Add new city to list
    addCityListItem = (cityName) => {
        this.apiData.getCityListItem(cityName)
            .then((data) => {
                const citiesList = [...this.state.citiesList, data];
                this.setState({citiesList});
            })
            .catch((err) => {
                this.setState({inputError: true});
                console.log(`There is no city ${cityName} in data base`);
        })
    };

    // Remove city from list
    removeCityListItem = (id) => {
        let list  = [...this.state.citiesList];
        const newList = list.filter((item) => {
            return item.id !== id
        });

        this.setState({citiesList: newList});
    };

    updateCurrentCityData = (id) => {
        this.apiData.getDataById(id)
            .then((res)=> {
                this.setState({
                    currentCityId: res.id,
                    currentCity: res.cityName,
                    country: res.country,
                    temperature: res.temperature,
                    description: res.description
                })
            })
            .catch((error) => {
                console.log(error);
            });

    };

    saveToLocal = () => {
        this.apiData.saveToLocal({
            currentCityId: this.state.currentCityId,
            currentCity: this.state.currentCity,
            citiesList: this.state.citiesList
        })
    };

    loadFromLocal = () => {
        return this.apiData.getFromLocal();
    };

    resetInputError = () => {
        this.setState({inputError: false})
    };

    toggleSettings = () =>{
        this.setState((state) => {
            return {isSettingsOn: !state.isSettingsOn}
        })
    };

    render() {
        const {citiesList, currentCity, inputError, country, temperature, description} = this.state;

        const settingsClass = this.state.isSettingsOn ? 'settings-on' : "";

        return (
            <div className="App pt-5 bg-dark text-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className={`col-12 sm-col-8 ${settingsClass}`}>
                            <SideSwitcher
                                switchSides={this.toggleSettings}
                            />
                            <div className="card-flip">
                                <div className="flip">
                                    <div className="front">
                                        <div className="card bg-light text-dark">
                                            <div className="card-body app-view">
                                                <ErrorBoundry>
                                                    <Location
                                                        city={currentCity}
                                                        country={country}
                                                    />
                                                    <Weather
                                                        temperature={temperature}
                                                        description={description}
                                                    />
                                                    <DateNow/>
                                                </ErrorBoundry>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="back">
                                        <div className="card bg-light text-dark">
                                            <div className="card-body app-settings">
                                                <SettingsProvider
                                                    value={{
                                                        currentCity,
                                                        citiesList,
                                                        inputError,
                                                        resetInputError: this.resetInputError,
                                                        addCityListItem: this.addCityListItem,
                                                        removeCityListItem: this.removeCityListItem,
                                                        updateCurrentCityData: this.updateCurrentCityData
                                                    }}>
                                                    <ErrorBoundry>
                                                        <Settings />
                                                    </ErrorBoundry>
                                                </SettingsProvider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
