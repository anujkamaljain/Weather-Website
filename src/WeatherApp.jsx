import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox"
import "./WeatherApp.css"

const WeatherApp = () => {

   const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        temp: 24.03,
        tempMin: 25.07,
        tempMax: 29.68,
        humidity: 25.3,
        feelsLike: 24.00,
        weather: "Haze"
   });

    return (
        <div className="weatherapp" >
            <h1> Weather App </h1>
            <SearchBox setWeatherinfo={setWeatherInfo}/>
            <InfoBox info={weatherInfo} />
        </div>

    )
}

export default WeatherApp;