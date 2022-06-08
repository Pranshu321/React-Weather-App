import axios from 'axios';
import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';

const App = () => {
    const [city, setcity] = useState("Delhi");
    const [tempInfo , setTempInfo] = useState({});

    async function weatherInfo() {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2b010c10e01d9ea26f7f5df3e41678ec`;

            const res = await axios.get(url);
            const data = res.data;

            const { temp, humidity, pressure } = data.main;
            const { speed } = data.wind;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { country, sunset } = data.sys;


            const mynewweatherinfo = {
                temp,
                humidity,
                pressure,
                speed,
                weathermood,
                name,
                country,
                sunset
            }

            setTempInfo(mynewweatherinfo);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        weatherInfo();
    }, []);


    return (
        <>
            <div className='wrap'>
                <div className="search">
                    <input type="search" placeholder='Enter Your City...' autoFocus id='search' className='searchTerm' value={city} onChange={(event) => setcity(event.target.value)} />
                    <button className='searchButton' type='button' onClick={weatherInfo}> Search </button>
                </div>
            </div>
            <WeatherCard 
                tempInfo = {tempInfo}
            />
        </>
    )
}

export default App
