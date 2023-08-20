'use client';

import { WindIcon } from '@/public/icons';
import { useSelector } from 'react-redux';
import { selectAirQualityData } from '@/redux/features/weatherSlice';

const AirQuality = () => {
  const airQualityData: AirQualityData = useSelector(selectAirQualityData);

  const aqiIndexMap: Record<number, string> = {
    1: 'Good',
    2: 'Fair',
    3: 'Moderate',
    4: 'Poor',
    5: 'Very Poor',
  };

  const aqiColorMap: Record<number, string> = {
    1: '#00FF00',
    2: '#B4E877',
    3: '#FFF000',
    4: '#FFA500',
    5: '#F44250',
  };

  const aqi = airQualityData?.list[0].main.aqi;
  const aqiValue = aqiIndexMap[aqi];
  const aqiColor = aqiColorMap[aqi];

  const pm25 = airQualityData?.list[0].components.pm2_5;
  const so2 = airQualityData?.list[0].components.so2;
  const no2 = airQualityData?.list[0].components.no2;
  const o3 = airQualityData?.list[0].components.o3;

  return (
    <div
      className={`xl:w-[475px] xl:h-[200px] md:w-[335px] md:h-[200px] w-[270px] h-[260px] rounded-[20px] bg-[#c1c1c1c1]/5
      `}
    >
      <div className='p-4'>
        <div className='flex items-center'>
          <h3 className={`flex-1 font-medium text-lg text-[#DEDDDD] mx-2`}>
            Air Quality Index
          </h3>

          <div
            className='flex items-center w-[75px] h-[20px] rounded-[10px]'
            style={{ backgroundColor: aqiColor }}
          >
            <span className='text-[#001E2B] font-semibold text-sm mx-auto'>
              {aqiValue}
            </span>
          </div>
        </div>

        <div className='md:flex md:flex-row flex flex-col  items-center mt-3 gap-5 md:gap-14 lg:gap-14 '>
          <div>
            <WindIcon width='110' height='110' />
          </div>

          <div className='flex flex-row xl:flex-row md:flex-col  xl:gap-7 gap-4 '>
            <div className='flex flex-row gap-5'>
              <div className='xl:flex xl:flex-col'>
                <h3
                  className={`text-base font-semibold text-[#DEDDDD]
                `}
                >
                  PM<sub>2.5</sub>
                </h3>
                <span className='xl:text-[26px] xl:leading-10 text-[22px] text-[#ffffff] font-bold'>
                  {pm25}
                </span>
              </div>
              <div className='flex flex-col'>
                <h3
                  className={`text-base font-semibold text-[#DEDDDD]
                `}
                >
                  SO<sub>2</sub>
                </h3>
                <span className='xl:text-[26px] xl:leading-10 text-[22px] text-[#ffffff] font-bold'>
                  {so2}
                </span>
              </div>
            </div>

            <div className='flex flex-row gap-4'>
              <div className='flex flex-col'>
                <h3
                  className={`text-base font-semibold text-[#DEDDDD] 
                `}
                >
                  NO<sub>2</sub>{' '}
                </h3>
                <span className='xl:text-[26px] xl:leading-10 text-[22px] text-[#ffffff] font-bold'>
                  {no2}
                </span>
              </div>
              <div className='flex flex-col'>
                <h3
                  className={`text-base font-semibold text-[#DEDDDD]
                `}
                >
                  O<sub>3</sub>
                </h3>
                <span className='xl:text-[26px] xl:leading-10 text-[22px] text-[#ffffff] font-bold'>
                  {o3}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
