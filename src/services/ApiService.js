export default class ApiService {


    _apiBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?'; // API common URL
    // API_KEY = '7f6d3160d36a1495be69da295f3e25eb';
    API_KEY = '4c8455162030fd01c7d82a15894f8bb6';
    /**
     * dataUrl = String =>
     * 1) id=2172797 (city ID)
     * 2) q=London (city Name)
     * 3) lat=35&lon=139 (city coords)
     * */

    getResource = async(dataUrl) => {
        const options = `&lang=en&units=metric&APPID=${this.API_KEY}`;
        const res = await fetch(`${this._apiBaseUrl}${dataUrl}${options}`);

        if (!res.ok) {
            throw new Error(`Could not fetch data, received ${res.status}`);
        }
        return await res.json();
    };

    getDataByCityName = async(cityName) => {
        const dataUrl =`q=${cityName}`;
        const allData = await this.getResource(dataUrl);
        return await this._transformData(allData);
    };

    getDataByCoordinates = async() => {
        const { coords } = await this.getCurrentCoordinates();
        const dataUrl = `lat=${coords.latitude}&lon=${coords.longitude}`;
        const allData = await this.getResource(dataUrl);
        return await this._transformData(allData);
    };

    getDataById = async(id) => {
        const dataUrl =`id=${id}`;
        const allData = await this.getResource(dataUrl);
        return await this._transformData(allData);
    };

    getCurrentCoordinates = (options) => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    };

    // if city exist in Open weather base (for list component)
    getCityListItem = async(inputData) => {
        const newCity = await this.getDataByCityName(inputData);
        if (inputData.trim().toLowerCase() === 'odessa') {
            return {
                name: "Odessa",
                id: 698740
            };
        }else if (inputData.trim().toLowerCase() === newCity.cityName.toLowerCase()) {
            return {
                name: newCity.cityName,
                id: newCity.id
            };
        } else {
            return false
        }

    };

    // Work with local storage
    saveToLocal = (data) => {
        const serialData = JSON.stringify(data);
        localStorage.setItem('localState', serialData);
    };

    getFromLocal = () => {
        return JSON.parse(localStorage.getItem('localState'));
    };

    // Return only needed data
    _transformData = (data) => {
        return {
            id: data.id,
            cityName: data.name, // city name
            country: data.sys.country, // country name
            temperature: data.main.temp, // current temperature
            description: data.weather[0].description, //weather description
        };
    };
}
