'use client';

import { useSelector } from 'react-redux';
import CurrentWeather from '../cards/CurrentWeather';
import FiveDaysForecast from '../cards/FiveDaysForecast';
import { selectLoadingState } from '@/redux/features/weatherSlice';

const LeftSidebar = () => {
  const loading = useSelector(selectLoadingState);

  return (
    <>
      {loading && (
        <div className='2xl:flex 2xl:flex-col md:flex md:flex-row flex flex-col items-center justify-center 2xl:gap-[5.12rem] xl:gap-8 gap-10'>
          <CurrentWeather />
          <FiveDaysForecast />
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
