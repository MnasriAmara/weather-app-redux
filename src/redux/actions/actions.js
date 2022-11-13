import axios from "axios";
import {
  LOADING,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILED,
  SEARCHWEATHER,
  GETFORECAST_FAILED,
  GETFORECAST_SUCCESS,
} from "../actiontypes/actionstypes";

export const getweather = (searchedvalue) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=ea6eddd3d66749cea6d202430220711&q=${searchedvalue}&aqi=no`
    );

    dispatch({
      type: GET_WEATHER_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: GET_WEATHER_FAILED,
      payload: error,
    });
  }
};
export const search = (value) => {
  return {
    type: SEARCHWEATHER,
    payload: value
  };
};

export const getforecast = (searchedvalue) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=ea6eddd3d66749cea6d202430220711&q=${searchedvalue}&days=3&aqi=no&alerts=no`
    );
    dispatch({
      type: GETFORECAST_SUCCESS,
      payload: data.forecast.forecastday
    });
  } catch (error) {
    dispatch({
      type: GETFORECAST_FAILED,
      payload: error,
    });
  }
};
