'use client';

import { CalendarIcon, LocationIcon } from '@/public/icons';
import { useSelector } from 'react-redux';
import { selectWeatherData } from '@/redux/features/weatherSlice';
import GenerateWeatherIcon, {
  WeatherType,
} from '@/app/utils/GenreateWeatherIcon';

const CurrentWeather = () => {
  const weatherData: CurrentWeatherData = useSelector(selectWeatherData);

  if (!weatherData) {
    return;
  }

  // Current weather Icon
  const currentWeatherIcon =
    weatherData.weather[0].main.toLowerCase() as WeatherType;

  // Current weather and converting capital case of the first letter of each word.
  const currentWeather = weatherData.weather[0].description;
  const capitalizedWeather = currentWeather
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Temperatur conversion in Celsius
  const temperatureInCelsius = Math.round(weatherData.main.temp - 273.15);

  // Current Time Convertsion and Date
  const timezoneOffset = weatherData ? weatherData.timezone : 0;
  const unixTimestamp = weatherData.dt;
  const date = new Date((unixTimestamp + timezoneOffset) * 1000);

  const formattedTime = () => {
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    return `${hours % 12 || 12}:${
      minutes < 10 ? '0' + minutes : minutes
    } ${period}`;
  };

  const formattedDate = date.toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  // City Name and Country Name
  const cityName = weatherData.name;
  const countryName = weatherData.sys.country;

  return (
    <div
      className={`xl:w-[300px] xl:h-[310px] md:w-[350px] md:h-[330px] w-[320px] h-[320px] bg-[#2f2f2f]/30 rounded-[20px]`}
    >
      <div className={`flex flex-col px-6 pt-6 pb-0 text-[#DEDDDD]`}>
        <h2 className='text-lg font-semibold '>Current Weather</h2>
        <p className='text-sm font-bold ml-[2px]'>{formattedTime()}</p>
      </div>

      <div className='flex items-center gap-4'>
        <div>{GenerateWeatherIcon(currentWeatherIcon, '150', '150')}</div>
        <div className='flex flex-col items-center'>
          <p className='text-[#ffffff] font-bold text-5xl overflow-y-hidden'>
            {temperatureInCelsius}°C
          </p>
          <span
            className={`font-bold text-[#DEDDDD]
            `}
          >
            {capitalizedWeather}
          </span>
        </div>
      </div>

      <div className='flex flex-col px-6 gap-2'>
        <div className='flex items-center gap-3'>
          <div>
            <LocationIcon fill='#DEDDDD' />
          </div>
          <p
            className={`text-base font-bold text-[#DEDDDD]`}
          >{`${cityName}, ${countryName}`}</p>
        </div>

        <div className='flex items-center gap-3'>
          <div>
            <CalendarIcon />
          </div>
          <p className={`text-base font-bold text-[#DEDDDD]`}>
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
