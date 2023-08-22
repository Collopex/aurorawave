'use client';

import { SunsetIcon, SunnyIcon } from '@/public/icons';
import { selectWeatherData } from '@/redux/features/weatherSlice';
import { useSelector } from 'react-redux';

const SunriseAndSunset = () => {
  const weatherData: CurrentWeatherData = useSelector(selectWeatherData);

  const timezoneOffset = weatherData ? weatherData.timezone : 0;

  // Sunrise conversion
  const sunriseUnixTimestamp = weatherData?.sys.sunrise;
  const localSunriseTime = new Date(
    (sunriseUnixTimestamp + timezoneOffset) * 1000
  );
  const formattedSunriseTime = localSunriseTime.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  // Sunset conversion
  const sunsetUnixTimestamp = weatherData?.sys.sunset;
  const localSunsetTime = new Date(
    (sunsetUnixTimestamp + timezoneOffset) * 1000
  );
  const formattedSunsetTime = localSunsetTime.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div
      className={`flex  xl:w-[475px] xl:h-[200px]  md:w-[335px] md:h-[255px] w-[270px] h-[320px] rounded-[20px] bg-[#c1c1c1c1]/5 overflow-y-hidden scrollbar-hide`}
    >
      <div className='p-4'>
        <h3 className={`font-medium text-lg text-[#DEDDDD] mx-2`}>
          Sunrise & Sunset
        </h3>

        <div className='md:flex md:flex-row  flex flex-col gap-5 md:gap-14 lg:gap-12 mt-3'>
          <div className='flex md:flex-col xl:flex-row items-center'>
            <SunnyIcon width='110' height='110' />
            <div className='flex flex-col'>
              <p className={`text-lg font-semibold text-[#DEDDDD]`}>Sunrise</p>
              <p className='text-[22px]  font-bold text-[#ffffff]'>
                {formattedSunriseTime}
              </p>
            </div>
          </div>
          <div className='flex md:flex-col xl:flex-row items-center'>
            <SunsetIcon width='110' height='110' />
            <div className='flex flex-col'>
              <p className={`text-lg  font-semibold text-[#DEDDDD] `}>Sunset</p>
              <p className='text-[22px] font-bold text-[#ffffff]'>
                {formattedSunsetTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunriseAndSunset;
