'use client';

import {
  FeelsLikeIcon,
  HumidityIcon,
  PressureIcon,
  VisibilityIcon,
} from '@/public/icons';
import AirQuality from '../cards/AirQuality';
import Conditions from '../cards/Conditions';
import SunriseAndSunset from '../cards/SunriseAndSunset';
import HourlyTime from '../cards/HourlyTime';
import { useSelector } from 'react-redux';
import {
  selectHourlyWeatherData,
  selectLoadingState,
  selectWeatherData,
} from '@/redux/features/weatherSlice';
import GenerateWeatherIcon, {
  WeatherType,
} from '@/app/utils/GenreateWeatherIcon';

const RightSidebar = () => {
  const weatherData: CurrentWeatherData = useSelector(selectWeatherData);
  const loading = useSelector(selectLoadingState);

  const humidity = weatherData?.main.humidity;
  const feelsLike = weatherData?.main.feels_like;
  const feelsLikeInCelsius = Math.round(feelsLike - 273.15);
  const pressure = weatherData?.main.pressure;
  const visiblity = weatherData?.visibility / 1000;

  // 3 Hourly weather
  const hourlyData: WeatherHourlyData = useSelector(selectHourlyWeatherData);

  const formattedTime = (unixTimestamp: number) => {
    const timezoneOffset = weatherData ? weatherData.timezone : 0;
    const date = new Date((unixTimestamp + timezoneOffset) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    return `${hours % 12 || 12}:${minutes} ${period}`;
  };

  const selectedData = hourlyData?.list.slice(0, 8);

  return (
    <>
      {loading && (
        <div className='flex flex-col gap-5 overflow-y-hidden scrollbar-hide'>
          {/*Upper Part  */}
          <div
            className={`flex mx-auto 2xl:w-[1085px] 2xl:h-[535px] xl:w-[1130px] xl:h-[530px] lg:w-[735px] lg:h-[580px] md:w-[700px] md:h-[600px] w-[320px] h-[1130px] rounded-[20px] bg-[#2f2f2f]/30`}
          >
            <div className='px-[calc(0.95vw+20px)] py-[calc(0.7vw+10px)]'>
              <h2 className='text-[#DEDDDD] text-lg font-semibold mt-2 md:mt-0'>
                Today's Forecast
              </h2>

              <div className='md:flex md:flex-row flex flex-col mt-5 gap-10 md:gap-5 lg:gap-10 '>
                <div className='flex flex-col gap-4'>
                  <div>
                    <SunriseAndSunset />
                  </div>
                  <div>
                    <AirQuality />
                  </div>
                </div>

                <div className='flex flex-col gap-4'>
                  <div className='flex flex-row  gap-5'>
                    <Conditions
                      label='Humidity'
                      logo={<HumidityIcon />}
                      result={`${humidity}%`}
                    />
                    <Conditions
                      label='Feels Like'
                      logo={<FeelsLikeIcon />}
                      result={`${feelsLikeInCelsius}°C`}
                    />
                  </div>
                  <div className='flex flex-row  gap-5'>
                    <Conditions
                      label='Pressure'
                      logo={<PressureIcon />}
                      result={`${pressure}mb`}
                    />
                    <Conditions
                      label='Visibility'
                      logo={<VisibilityIcon />}
                      result={`${visiblity}km`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* UNDERNEATH PART */}
          <div>
            <div
              className={`mx-auto flex flex-col  2xl:w-[1085px] 2xl:h-[255px]  xl:w-[1130px] xl:h-[259px]  lg:w-[735px]  md:w-[700px] md:h-[480px] w-[320px] h-[860px] rounded-[20px] bg-[#2f2f2f]/30`}
            >
              <h2 className={`text-[#DEDDDD] text-lg font-semibold mx-8 mt-4 `}>
                Today at
              </h2>
              <div className='xl:flex xl:flex-row  flex flex-wrap justify-center items-center px-6 py-4 gap-4'>
                {selectedData?.map((hourlyWeather) => (
                  <HourlyTime
                    key={hourlyWeather.dt}
                    logo={GenerateWeatherIcon(
                      hourlyWeather.weather[0].main.toLowerCase() as WeatherType,
                      '95',
                      '95'
                    )}
                    result={`${Math.round(hourlyWeather.main.temp - 273.15)}°C`}
                    time={formattedTime(hourlyWeather.dt)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RightSidebar;
