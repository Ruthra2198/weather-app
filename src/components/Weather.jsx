import '../animation.css'
import cloud1 from '../assets/cloud1.png'
import cloud2 from '../assets/cloud2.png'
import React, { useState } from 'react';
import axios from 'axios';


function Weather() {

  const [city, setCity] = useState("")

  const [weather, setWeather] = useState("")
  const [temp, setTemp] = useState("")
  const [desc, setDesc] = useState("")

  function handleCity(evt) {
    setCity(evt.target.value)
  }

  function getWeather() {
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=796ade609f663528be6ab31ae59c993e`)

    weatherData.then(function (success) {
      console.log(success.data)

      setWeather(success.data.weather[0].main)
      setTemp(success.data.main.temp)
      setDesc(success.data.weather[0].description)
    })
  }
  return (

    <div className="container">
      <div className="container-1">
        <div className="cloud">
          <img src={cloud1} alt="" style={{ "--i": 3 }} />
          <img src={cloud2} alt="" style={{ "--i": 4 }} />
          <img src={cloud1} alt="" style={{ "--i": 5 }} />
          <img src={cloud2} alt="" style={{ "--i": 6 }} />
          <img src={cloud1} alt="" style={{ "--i": 7 }} />
        </div>


        <div className="report backdrop-brightness-50 text-center p-10 px-28 rounded-md">
          <h1 className="text-2xl font-medium">Weather Report</h1>

          <input className="mt-5 text-black border border-black rounded-md p-2 outline-none" onChange={handleCity} type="text" placeholder="Enter your City Name" />
          <br />
          <button className="bg-gray-700 text-white p-1 rounded-lg mt-4" onClick={getWeather}>Get Report</button>
          <div className="mt-6">
            <p><b>Weather:</b> {weather}</p>
            <p><b>Temperature:</b> {temp}</p>
            <p><b>Description:</b> {desc}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Weather
