import React from "react";
import "./CurrentWeather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getweather } from "../redux/actions/actions";
import { Spinner } from "react-bootstrap";

function CurrentWeather() {
  const dispatch = useDispatch();

  const searchvalue = useSelector((state) => state.searchedvalue);

  useEffect(() => {
    dispatch(getweather(searchvalue));
  }, [searchvalue]);
  // console.log(searchvalue)
  const city = useSelector((state) => state.currentweather);
  const loading = useSelector((state) => state.loading);
  
  return (
    <div className="container-fluid">
      {loading ? (
        <div>
          ...loading <br />
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 col-sm-12 col-xs-12">
            <div className="card p-4">
              <div className="d-flex">
                <h4 className="flex-grow-1">{city.location.name}</h4>
                <h5>{city.location && city.location.localtime}</h5>
              </div>
              <div className="d-flex flex-column temp mt-5 mb-3">
                <h1 className="mb-0 font-weight-bold" id="heading">
                  {" "}
                  {city.current && city.current.temp_c}°C{" "}
                </h1>
                <h6 className="small grey">
                  {city.current && city.current.condition.text}
                </h6>
              </div>
              <div className="d-flex">
                <div className="temp-details flex-grow-1">
                  <p className="my-1">
                    <img
                      src="https://i.imgur.com/B9kqOzp.png"
                      height="17px"
                      alt="logo"
                    />
                    <span> {city.current && city.current.wind_kph} km/h</span>
                  </p>
                  <p className="my-1">
                    <i className="fas fa-humidity"></i>
                    {/* <i className="fa fa-tint mr-2" aria-hidden="true" /> */}
                    <span> {city.current && city.current.humidity}% </span>
                  </p>
                  <p className="my-1">
                    <img
                      src="https://i.imgur.com/wGSJ8C5.png"
                      height="17px"
                      alt="logo"
                    />
                    <span> 0.2h </span>
                  </p>
                </div>
                <div>
                  <img
                    src={city.current && city.current.condition.icon}
                    width="100px"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrentWeather;
