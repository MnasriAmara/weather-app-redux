import { GETFORECAST_FAILED, GETFORECAST_SUCCESS, GET_WEATHER_FAILED, GET_WEATHER_SUCCESS, LOADING, SEARCHWEATHER } from "../actiontypes/actionstypes";

const initstate = {
    currentweather:[],
    loading: true,
    erro:null,
    searchedvalue:"Gafsa",
    forecast:[]
  };
  export const weatherReducer = (state = initstate, { type, payload }) => {
    switch (type) {

      case LOADING:
        return { ...state, loading: true };

      case GET_WEATHER_SUCCESS:
        return { ...state, loading: false, currentweather: payload };

      case GETFORECAST_SUCCESS:
          return{...state,loading:false,forecast:payload}
      
      case SEARCHWEATHER:
          return {...state,searchedvalue:payload};

        case GET_WEATHER_FAILED:
          case GETFORECAST_FAILED:
               
            return { ...state, loading: false, error: payload };

      default:
        return state;
    }
  };