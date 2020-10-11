import DateTimeFormat = Intl.DateTimeFormat;

export interface IWeatherObject {
  consolidated_weather: ConsolidatedWeather[];
  time: DateTimeFormat;
  sun_rise: DateTimeFormat;
  sun_set: DateTimeFormat;
  timezone_name: string;
  parent: Parent;
  sources: Source[];
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
  timezone: string;
}

export interface ConsolidatedWeather {
  id: bigint;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: DateTimeFormat;
  applicable_date: DateTimeFormat;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface Source {
  title: string;
  slug: string;
  url: string;
  crawl_rate: 180 | 360 | 480 | 720;
}

export interface Parent {
  title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
}
