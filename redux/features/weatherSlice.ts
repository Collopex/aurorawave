import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherData: null,
  airQuality: null,
  weatherHourly: null,
  geoCode: null,
  loading: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
    setAirQualityData: (state, action) => {
      state.airQuality = action.payload;
    },
    setWeatherHourlyData: (state, action) => {
      state.weatherHourly = action.payload;
    },
    setGeoCode: (state, action) => {
      state.geoCode = action.payload;
    },

    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Dispatcher
export const {
  setWeatherData,
  setAirQualityData,
  setWeatherHourlyData,
  setGeoCode,
  setLoadingState,
} = weatherSlice.actions;

// Selector
export const selectWeatherData = (state: any) => state.weather.weatherData;
export const selectAirQualityData = (state: any) => state.weather.airQuality;
export const selectHourlyWeatherData = (state: any) =>
  state.weather.weatherHourly;
export const selectGeoCode = (state: any) => state.weather.geoCode;
export const selectLoadingState = (state: any) => state.weather.loading;

export default weatherSlice.reducer;
