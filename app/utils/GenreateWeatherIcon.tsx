import React from 'react';

import {
  SunnyIcon,
  FewCloudsIcon,
  CloudyIcon,
  HeavyShowerIcon,
  RainIcon,
  ThunderStormIcon,
  SnowIcon,
  FogIcon,
} from '@/public/icons';

const weatherIconComponents = {
  'clear sky': SunnyIcon,
  clear: SunnyIcon,
  sunny: SunnyIcon,
  'few clouds': FewCloudsIcon,
  'scattered clouds': CloudyIcon,
  clouds: CloudyIcon,
  'broken clouds': CloudyIcon,
  drizzle: RainIcon,
  rain: RainIcon,
  'shower rain': HeavyShowerIcon,
  thunderstorm: ThunderStormIcon,
  snow: SnowIcon,
  mist: FogIcon,
  haze: FogIcon,
};
export type WeatherType = keyof typeof weatherIconComponents;

const GenerateWeatherIcon = (
  weatherType: WeatherType,
  width: string,
  height: string
) => {
  const IconComponent = weatherIconComponents[weatherType];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={width} height={height} />;
};

export default GenerateWeatherIcon;
