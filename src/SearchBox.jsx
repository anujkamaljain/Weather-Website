import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useState } from 'react';
import "./SearchBox.css"

const SearchBox = ({ setWeatherinfo }) => {

 const [city, setCity] = useState("");
 const [error, setError] = useState(false);

 const API_URL = "https://api.openweathermap.org/data/2.5/weather";
 const API_KEY = "aaa0e4471d6abde9f6ab1108befbc935";
 
 const getWeatherInfo = async () => {

  try {
    const response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    const json = await response.json();
    const result = {
        city: city,
        temp: json.main.temp,
        tempMin: json.main.temp_min,
        tempMax: json.main.temp_max,
        humidity: json.main.humidity,
        feelsLike: json.main.feels_like,
        weather: json.weather[0].description
    }
    console.log(result);
    return result;
  }catch(er){
    throw er;
  }
 };

  const handleChange = (events) => {
    setCity(events.target.value)
  }

  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
    setCity("");
    let info = await getWeatherInfo();
    setWeatherinfo(info);
    }catch(err){
      setError(true);
    }
    
  }

   return(
    <div className="search-box" style={{margin:"20px"}}>
        <form onSubmit={handleSubmit}>
          <TextField
          required
          id="city"
          label="City Name"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">Search</Button>
        {error ? <p style={{color: "red"}}>Invalid Place!! Place dosent exist!!</p> : " "}
        </form>
    </div>
   )  
}

export default SearchBox;