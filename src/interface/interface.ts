export interface Coordinates {
  latitude: number;
  longitude: number;
}
export interface WeatherData {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  sys: {
    country: string;
  };
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
  wind: {
    speed: number;
    gust?: number;
  };
  list?: WeatherData[]| null;
  dt?: number;
  dt_txt?: string;
  weatherInfo: WeatherData;
  isCelsius: boolean;
  setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
  setCoords: (coords: Coordinates) => void;
  weatherInfoHours: WeatherData[] | null;
}
export interface WeatherIcon {
  [key: string]: {
    icon: string;
    background: string;
  };
}
export interface LoaderProps {
  cityName: string;
  getWeatherInfoKey: (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => Promise<void>;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface SearchProps {
  cityName: string;
  getWeatherInfoKey: (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => Promise<void>;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface CardProps {
  cityName: string;
  getWeatherInfoKey: (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => Promise<void>;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  weatherInfo: WeatherData;
  isCelsius: boolean;
  setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
  setCoords: (coords: Coordinates) => void;
  weatherInfoHours: WeatherData[] | null;
}