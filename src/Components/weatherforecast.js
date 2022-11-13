import "./weatherforecast.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getforecast } from "../redux/actions/actions";
import { Spinner } from "react-bootstrap";
import FCard from "./FCard";


export const WeatherForecast = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const searchedvalue = useSelector((state) => state.searchedvalue);

  useEffect(() => {
    dispatch(getforecast(searchedvalue));
  }, [searchedvalue]);
  
  const weatherfrcast= useSelector((state) => state.forecast);
  console.log(weatherfrcast)
  return (
    <div className="page-content page-container" id="page-content">
      {loading ? (
      <div>
        ...loading <br />
      <Spinner animation="border" variant="primary" />
      </div>
    ) :(
      
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-lg-8 grid-margin stretch-card">
            {weatherfrcast.map((el,i) => (
              <FCard el={el} key={i}/>
            ))}
            {/*weather card ends*/}
          </div>
        </div>
      </div>
    )}</div>
  );
};
