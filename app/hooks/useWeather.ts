'use client';
import axios from 'axios';

const useWeather = () => {
  const fetchCurrentWeather = async (lat: number, lon: number) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Error loading current weather data');
    }
  };

  const fetchAirQuality = async (lat: number, lon: number) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Error loading current air quality index');
    }
  };

  const fetch24HourWeather = async (lat: number, lon: number) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Error loading 24 hour forecast data');
    }
  };

  const fetchGeoCode = async (input: string | number) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Error loading 24 hour forecast data');
    }
  };

  return {
    fetchCurrentWeather,
    fetchAirQuality,
    fetch24HourWeather,
    fetchGeoCode,
  };
};

export default useWeather;
