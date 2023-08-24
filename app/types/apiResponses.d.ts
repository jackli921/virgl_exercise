export interface GetWeatherData {
    latitude:              number;
    longitude:             number;
    generationtime_ms:     number;
    utc_offset_seconds:    number;
    timezone:              string;
    timezone_abbreviation: string;
    elevation:             number;
    current_weather:       CurrentWeather;
    hourly_units:          HourlyUnits;
    hourly:                Hourly;
}

export interface CurrentWeather {
    temperature:   number;
    windspeed:     number;
    winddirection: number;
    weathercode:   number;
    is_day:        number;
    time:          string;
}

export interface Hourly {
    time:           string[];
    temperature_2m: number[];
}

export interface HourlyUnits {
    time:           string;
    temperature_2m: string;
}

export interface WeatherDataItem {
  currentTimestamp: string;
  temperature: number;
}
