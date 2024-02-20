import React from 'react'
import "./Weather.css"
import search_icon from "./Assets/search.png"
import part_icon from "./Assets/sun.png"
import humidity_icon from "./Assets/humidity.png"
import wind_icon from "./Assets/wind.png"



function WeatherApp() {
  let Api_Key=`c5e61bd113b73369a921a7dbdb2ecb35`;
  const search=async()=>{
       const element=document.getElementsByClassName("cityinput")
       if(element[0].value===""){
        return 0;
       }
       let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${Api_Key}`;
       let response=await fetch(url);
       let data= await response.json();
       const humidity=document.getElementsByClassName("humidity_percent")
       const wind=document.getElementsByClassName("wind_rate")
       const temperature=document.getElementsByClassName("weather_temp")
       const location=document.getElementsByClassName("weather_location")
       humidity[0].innerHTML=data.main.humidity+"%";
       wind[0].innerHTML=data.wind.apeed+"km/h";
       temperature[0].innerHTML=data.main.temp+"°C";
       location[0].innerHTML=data.name;
  }
  return (
    <>
    <center>
    <h1 className='hii'>Weather App</h1>
    </center>
    <div className='container'>


      <div className='top-bar'>
        <input type="text" className='cityinput' placeholder='search' />
        <div className='search' onClick={()=>{search()}}>
          <img src={search_icon} alt="" />


        </div>
      </div>
      <div className='weather'>
        <img src={part_icon} alt="" />

      </div>
      <div className='weather_temp'>24°C</div>
      <div className='weather_location'>London</div>
      <div className='data_container'>
        <div className='element'>
          <img src={humidity_icon} alt="" className='icon' />
          <div className='data'>
            <div className='humidity_percent'>
              64%
            </div>
            <div className='text'>humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} alt="" className='icon' />
          <div className='data'>
            <div className='wind_rate'>
              18 km/h
            </div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default WeatherApp;