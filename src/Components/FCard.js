import React from 'react'
import { useSelector } from 'react-redux'
 import './FCard.css'

function FCard({el,i}) {
  const city=useSelector(state=>state.searchedvalue)
console.log(city)

  return (
   
  <div className="Weather">

        <div className="Weather__info">
          <img className="Weather__icon"
            src={el.day&&el.day.condition&&el.day.condition.icon} alt="logo"/>
          <ul className="Weather__list">
            <li className="list__temperature">
            {el.day&&el.day.maxtemp_c}
              <sup className="list__temperature-symbol">°C</sup>
            </li>
            <li> Humidity:{el.day&&el.day.avghumidity} % </li>
            <li>
              {" "}
              Wind: {el.day&&el.day.maxwind_kph} km/h{" "}
            </li>
          </ul>
        </div>
        <div className="Weather__other-info">
          <h2 className="other-info__city">
                      
          </h2>
          <h3 className="other-info__clouds">{el.date}</h3>
          <h3 className="other-info__clouds">
          {el.day&&el.day.condition&&el.day.condition.text}
          </h3>
        </div>
      </div>
    
    );
  }
 

export default FCard