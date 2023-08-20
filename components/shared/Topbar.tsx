'use client';

import { useCallback, useEffect, useState } from 'react';
import useWeather from '@/app/hooks/useWeather';
import { CloseIcon, LocationIcon, Logo, SearchIcon } from '@/public/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGeoCode,
  setAirQualityData,
  setGeoCode,
  setWeatherData,
  setWeatherHourlyData,
  setLoadingState,
} from '@/redux/features/weatherSlice';
import { PulseLoader } from 'react-spinners';
import debounce from 'lodash.debounce';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

type LocationData = {
  loc: string;
};

const Topbar = () => {
  const dispatch = useDispatch();
  const {
    fetchCurrentWeather,
    fetchAirQuality,
    fetch24HourWeather,
    fetchGeoCode,
  } = useWeather();
  const geoData: GeoCode[] = useSelector(selectGeoCode);

  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedLat, setSelectedLat] = useState<number | null>(null);
  const [selectedLng, setSelectedLng] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const debouncedFetchData = useCallback(
    debounce(async (input: string) => {
      setLoading(true);
      try {
        const data = await fetchGeoCode(input);
        dispatch(setGeoCode(data));
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    }, 520),
    []
  );

  useEffect(() => {
    if (searchInput.length > 2) {
      debouncedFetchData(searchInput);
    } else {
      dispatch(setGeoCode([]));
    }
  }, [searchInput, debouncedFetchData]);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };

  const handleLocationClick = (lat: number, lng: number) => {
    setSelectedLat(lat);
    setSelectedLng(lng);
  };

  // Fetch weather data based on latitude and longitude values and initialize the default weather

  const initialLat = 40.1885;
  const initialLng = 29.061;

  useEffect(() => {
    const fetchCurWeather = async () => {
      const lat = selectedLat !== null ? selectedLat : initialLat;
      const lng = selectedLng !== null ? selectedLng : initialLng;

      try {
        const data = await fetchCurrentWeather(lat, lng);
        dispatch(setWeatherData(data));
      } catch (error) {
        console.error('Error fetching current weather data:', error);
      } finally {
        dispatch(setLoadingState(true));
      }
    };

    fetchCurWeather();
  }, [selectedLat, selectedLng, dispatch]);

  useEffect(() => {
    const fetchAirQualityIndex = async () => {
      const lat = selectedLat !== null ? selectedLat : initialLat;
      const lng = selectedLng !== null ? selectedLng : initialLng;
      try {
        const data = await fetchAirQuality(lat, lng);
        dispatch(setAirQualityData(data));
      } catch (error) {
        console.error('Error fetching current weather data:', error);
      } finally {
        dispatch(setLoadingState(true));
      }
    };

    fetchAirQualityIndex();
  }, [selectedLat, selectedLng, dispatch]);

  useEffect(() => {
    const fetchHourly = async () => {
      const lat = selectedLat !== null ? selectedLat : initialLat;
      const lng = selectedLng !== null ? selectedLng : initialLng;

      try {
        const data = await fetch24HourWeather(lat, lng);
        dispatch(setWeatherHourlyData(data));
      } catch (error) {
        console.error('Error fetching current weather data:', error);
      } finally {
        dispatch(setLoadingState(true));
      }
    };

    fetchHourly();
  }, [selectedLat, selectedLng, dispatch]);

  // Getting current lat and lng data from IPINFO API service

  const handleGetCurrentLocation = async () => {
    try {
      const response = await axios.get<LocationData>(
        `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPINFO_API_KEY}`
      );
      const { loc } = response.data;
      const [lat, lng] = loc.split(',');

      setSelectedLat(parseFloat(lat));
      setSelectedLng(parseFloat(lng));
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  const handleButtonClick = () => {
    setExpanded(!expanded);
    setSearchInput('');
  };

  // If
  useEffect(() => {
    if (expanded) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [expanded]);

  //  Close the overlay if the user try to open overlay in large devices
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!geoData) {
    return;
  }

  return (
    <div className='flex items-center justify-between'>
      <div
        className={`flex items-center gap-3 text-[#DEDDDD] font-semibold tracking-wide text-lg xl:text-3xl `}
      >
        <div className='lg:visible hidden lg:block'>
          <Logo size='large' />
        </div>

        <div className='visible lg:hidden'>
          <Logo size='small' />
        </div>

        <h1>AuroraWave</h1>
      </div>

      <div className='lg:visible hidden lg:flex lg:items-center gap-3'>
        <div
          className={`relative flex items-center flex-1 lg:w-[370px] w-[280px] h-[40px] border-b bg-[#202020] border-neutral-700 ${
            geoData?.length > 0 && searchInput.length > 1
              ? 'rounded-t-[20px]'
              : 'rounded-[20px]'
          }`}
        >
          <div className='flex items-center gap-14 '>
            <div className='flex items-center gap-[10px] mx-5 flex-1'>
              <SearchIcon width='16' height='16' />
              <input
                type='text'
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder='Search'
                className={`text-base font-medium  bg-transparent outline-none border-none 'placeholder:text-[#b8c4c2] text-[#DEDDDD]
                `}
              />
            </div>
            {loading && searchInput.length > 1 && (
              <div className=''>
                <PulseLoader color='#fff' size={5} />
              </div>
            )}
          </div>
          {searchInput.length > 1 && geoData?.length > 0 && (
            <div
              className={`absolute top-10 lg:w-[370px] w-[280px] bg-[#202020] shadow-2xl ${
                geoData.length > 0 && searchInput.length > 1
                  ? 'rounded-b-[20px]'
                  : 'rounded-[20px]'
              }`}
            >
              {geoData.map((data, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleLocationClick(data.lat, data.lon);
                    setSearchInput('');
                  }}
                  className={`w-full flex  gap-3 p-2 cursor-pointer hover:bg-[#27272A]`}
                >
                  <div className='w-full flex items-center gap-4'>
                    <div className='ml-2'>
                      <LocationIcon fill='#DEDDDD' />
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-left text-base tracking-wide text-[#ffffff] font-medium'>
                        {data.name}
                      </p>
                      <div
                        className={`flex items-center gap-2 -mt-1 text-[#b8c4c2] `}
                      >
                        {data.state && <p>{data.state}</p>}{' '}
                        <p> {data.country}</p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className='flex my-auto gap-[10px]  '>
        <div className='relative'>
          <AnimatePresence>
            {expanded && (
              <motion.div
                className={`fixed top-0 left-0 w-full h-screen bg-black z-10 ${
                  expanded ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className=' relative flex items-center gap-4 top-10 left-8 transform '>
                  <SearchIcon width='16' height='16' />
                  <input
                    type='text'
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    placeholder='Search'
                    className={`w-3/5  font-medium  bg-transparent outline-none border-none 'placeholder:text-[#b8c4c2] text-[#DEDDDD] text-lg
                `}
                  />
                  {loading && searchInput.length > 1 && (
                    <div className='absolute right-28'>
                      <PulseLoader color='#fff' size={5} />
                    </div>
                  )}
                  <button
                    onClick={handleButtonClick}
                    aria-label='Search'
                    className={`absolute -mt-1 right-12 flex items-center justify-center w-9 h-9 rounded-full bg-[#303030]/90 active:bg-[#2f2f2f]/30 cursor-pointer`}
                  >
                    <CloseIcon />
                  </button>
                </div>
                {searchInput.length > 1 && geoData?.length > 0 && (
                  <div
                    className={`absolute top-24 left-0 w-screen shadow-2xl ${
                      geoData.length > 0 && searchInput.length > 1
                        ? 'rounded-b-[20px]'
                        : 'rounded-[20px]'
                    }`}
                  >
                    {geoData.map((data, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          handleLocationClick(data.lat, data.lon);
                          setSearchInput('');
                          handleButtonClick();
                        }}
                        className={`w-full flex  gap-3 p-2 cursor-pointer hover:bg-[#27272A]`}
                      >
                        <div className='w-full flex items-center gap-5'>
                          <div className='ml-6'>
                            <LocationIcon fill='#DEDDDD' />
                          </div>
                          <div className='flex flex-col'>
                            <p className='text-left text-lg tracking-wide text-[#ffffff] font-medium'>
                              {data.name}
                            </p>
                            <div
                              className={`flex items-center gap-2 -mt-1 text-[#b8c4c2] `}
                            >
                              {data.state && <p>{data.state}</p>}{' '}
                              <p> {data.country}</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={handleButtonClick}
            aria-label='Search'
            className={`z-50 lg:hidden flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-[#303030]/90 active:bg-[#2f2f2f]/30`}
          >
            <SearchIcon width='20' height='20' />
          </button>
        </div>

        <button
          aria-label='Get Current Location'
          onClick={handleGetCurrentLocation}
          className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-[#303030]/90 active:bg-[#2f2f2f]/30`}
        >
          <LocationIcon fill='#FFFF' />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
