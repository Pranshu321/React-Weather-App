// eslint-disable-next-line
import React, { useEffect } from 'react'

const WeatherCard = ({ tempInfo }) => {
    const [WeatherState, SetWeaState] = React.useState("");



    const {
        temp,
        humidity,
        pressure,
        speed,
        weathermood,
        name,
        country,
        sunset
    } = tempInfo;


    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    SetWeaState("wi-day-cloudy");
                    break;
                case "Clear":
                    SetWeaState("wi-day-sunny");
                    break;
                case "Mist":
                    SetWeaState("wi-dust");
                    break;
                case "Haze":
                    SetWeaState("wi-fog");
                    break;
                default:
                    SetWeaState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood])

    // converting the second into
    let sec = sunset;
    let date = new Date(sec * 1000);
    let sunsetTime = `${date.getHours()}:${date.getMinutes()}`
    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${WeatherState}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}&deg;</span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{weathermood}</div>
                        <div className='place'>{name} , {country}</div>
                    </div>
                </div>
                <div className='date'><strong>{new Date().toLocaleString()}</strong></div>

                {/* Our Others Infos */}
                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {sunsetTime} <br />
                                Sunset
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {pressure} <br />
                                Pressure

                            </p>
                        </div>
                    </div>
                    <div className='weather-extra-info'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {speed}<br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard
