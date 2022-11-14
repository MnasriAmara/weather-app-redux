import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WeatherForecast } from './Components/weatherforecast';
import { Route, Routes } from 'react-router-dom';
import CurrentWeather from './Components/CurrentWeather';
import Navbarr from './Components/Navbarr';
import { useSelector } from 'react-redux';

function App() {
  const city=useSelector(state=>state.searchedvalue)
  // console.log(process.env)
  return (
    <div className="App">
      <Navbarr/>
      <h3> Weather APP </h3>
      <h3> {city} </h3>
      <Routes>
        <Route path="/" element={<CurrentWeather/>} />
        <Route path="/forecast" element={<WeatherForecast/>} />
      </Routes>





    </div>
  );
}

export default App;


