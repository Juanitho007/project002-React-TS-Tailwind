import { useState, useEffect } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { getWeatherInfo, getWeatherInfoHours } from "./services/getWeatherInfo";
import { getCityCoordinates } from "./services/getCityCoordinates";
import { getCoordinates } from "./services/getCoordinates";
import { Coordinates, WeatherData } from "./interface/interface";
import { icons } from "../public/img/icons";

const App = () => {
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [weatherInfo, setWeatherInfo] = useState<WeatherData | null>(null);
  const [weatherInfoHours, setWeatherInfoHours] = useState<
    WeatherData[] | null
  >(null);
  const [isCelsius, setIsCelsius] = useState<boolean>(false);
  const [cityName, setCityName] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { latitude, longitude } = await getCoordinates();
        setCoords({ latitude, longitude });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (coords) {
        try {
          const dataDay = await getWeatherInfo(
            coords.latitude,
            coords.longitude
          );
          const dataHours = await getWeatherInfoHours(
            coords.latitude,
            coords.longitude
          );
          setWeatherInfo(dataDay);
          if (dataHours && dataHours.list) {
            setWeatherInfoHours(dataHours.list);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [coords]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const getWeatherInfoKey = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && cityName.trim() !== "") {
      try {
        const { latitude, longitude } = await getCityCoordinates(cityName);
        setCoords({ latitude, longitude });
        setCityName("");
      } catch (error) {
        console.error(error);
      }
    }
  };
  if (!weatherInfo) {
    return (
      <Loader
        cityName={cityName}
        getWeatherInfoKey={getWeatherInfoKey}
        handleSearch={handleSearch}
      />
    );
  }
  const backgroundColor = weatherInfo && icons[weatherInfo.weather[0].icon].background

  return (
    <div
      style={{backgroundColor}}
      className= "min-h-screen min-w-full flex flex-col items-center content-center justify-between mx-auto"
    >
      <Search
        cityName={cityName}
        getWeatherInfoKey={getWeatherInfoKey}
        handleSearch={handleSearch}
      />
      <Card
        cityName={cityName}
        getWeatherInfoKey={getWeatherInfoKey}
        handleSearch={handleSearch}
        weatherInfo={weatherInfo}
        weatherInfoHours={weatherInfoHours}
        isCelsius={isCelsius}
        setIsCelsius={setIsCelsius}
        setCoords={setCoords}
      />
      <Footer />
    </div>
  );
};

export default App;
