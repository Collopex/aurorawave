'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { selectHourlyWeatherData } from '@/redux/features/weatherSlice';
import GenerateWeatherIcon, {
  WeatherType,
} from '@/app/utils/GenreateWeatherIcon';

const FiveDaysForecast = () => {
  const dayData: WeatherHourlyData = useSelector(selectHourlyWeatherData);

  const renderWeather = () => {
    if (!dayData) {
      return;
    }

    const filteredData = dayData.list.filter(
      (_: any, index: number) => (index - 6) % 7 === 0
    );

    return filteredData.map((day, index: number) => (
      <div
        key={index}
        className={`2xl:flex-row xl:flex-col flex  xl:justify-center items-center flex-1 mx-3 mt-[14px] }`}
      >
        <div className='2xl:flex-row xl:flex-col flex items-center flex-1 gap-1'>
          {GenerateWeatherIcon(
            day.weather[0].main.toLowerCase() as WeatherType,
            '65',
            '65'
          )}
          <p className='text-[#fff] font-bold text-2xl flex-1'>
            {Math.round(day.main.temp - 273.15)}°C
          </p>
        </div>
        <p className='font-semibold text-[#DEDDDD] mr-4 xl:mr-2'>
          {new Date(day.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'short',
            day: 'numeric',
          })}
        </p>
      </div>
    ));
  };

  return (
    <div>
      <div
        className={`2xl:flex 2xl:flex-col 2xl:w-[300px] 2xl:h-[418px] xl:w-[800px] xl:h-[250px] md:w-[350px] md:h-[330px] w-[320px] h-[418px] overflow-scroll scrollbar-hide bg-[#2f2f2f]/30 rounded-[20px] `}
      >
        <div>
          <h2 className={`text-lg text-[#DEDDDD] font-semibold mx-6 my-5`}>
            5 Days Forecast
          </h2>
          <div className={`border border-neutral-700 `} />
        </div>
        <div className='xl:flex xl:flex-row 2xl:flex-col'>
          {renderWeather()}
        </div>
      </div>
    </div>
  );
};

export default FiveDaysForecast;
