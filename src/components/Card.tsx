import CardHours from "./CardHours";
import Loader from "./Loader";
import { CardProps } from "../interface/interface";
import { icons } from "../../public/img/icons";
import { cToF } from "../utilts/temperatureConverter";

const Card = ({
  weatherInfo,
  weatherInfoHours,
  isCelsius,
  setIsCelsius,
  setCoords,
  cityName,
  handleSearch,
  getWeatherInfoKey,
}: CardProps) => {
  if (!weatherInfo) {
    return (
      <Loader
        cityName={cityName}
        getWeatherInfoKey={getWeatherInfoKey}
        handleSearch={handleSearch}
      />
    );
  }

  const { name, sys, weather, main, wind } = weatherInfo;
  const temp = isCelsius
    ? {
        temp: weatherInfo.main.temp,
        max: weatherInfo.main.temp_max,
        min: weatherInfo.main.temp_min,
        feels: weatherInfo.main.feels_like,
      }
    : {
        temp: cToF(weatherInfo.main.temp),
        max: cToF(weatherInfo.main.temp_max),
        min: cToF(weatherInfo.main.temp_min),
        feels: cToF(weatherInfo.main.feels_like),
      };
  const iconCode = weather[0].icon;
  const iconSrc = icons[iconCode].icon;
  
  return (
    <div className="flex text-center  items-center mx-auto max-w-2xl">
      <div
        className="flex flex-col gap-5 px-8 rounded-tr-[18%] rounded-bl-[18%] w-[250px] sm:w-[450px] bg-white/40 shadow-box "
      >
        <article className="flex items-center justify-center flex-wrap sm:flex-nowrap">
          <section className="p-4 flex flex-col items-center justify-center gap-4 sm:border-r-4">
            <h1 className="text-2xl font-bold">
              {`${name.toUpperCase()}, ${sys.country.toUpperCase()}`}
            </h1>
            <div className="flex flex-wrap items-center font-semibold gap-3 justify-center">
              <img
                className="w-min-[80px] animate-bounce animate-infinite animate-alternate"
                src={iconSrc}
                alt={weather[0].description}
              />
              <p>
                {weather[0].description.charAt(0).toUpperCase() +
                  weather[0].description.slice(1)}
              </p>
            </div>
            <p className="text-lg font-semibold">{`Temperatura: ${temp.temp} °${
              isCelsius ? "C" : "F"
            }`}</p>
            <button
              className="text-gray-700 font-semibold bg-white rounded-full"
              onClick={() => setIsCelsius(!isCelsius)}
            >
              {isCelsius ? (
                <i className="bx bxs-thermometer text-3xl text-red-400 "></i>
              ) : (
                <i className="bx bxs-thermometer bx-flip-horizontal text-3xl text-blue-400"></i>
              )}
            </button>
          </section>
          <section className="p-4 flex flex-col justify-center gap-2">
            <span className="text-start">{`Sensación: ${temp.feels} °${
              isCelsius ? "C" : "F"
            }`}</span>
            <span className="text-start">{`Humedad: ${main.humidity} %`}</span>
            <span className="text-start">{`Presión: ${main.pressure} hPa`}</span>
            <span className="text-start">{`Velocidad del viento: ${wind.speed} m/s`}</span>
            <section>
              <span className="flex flex-col">Temperatura:</span>
              <div className="flex justify-between">
                <p className="flex flex-col">
                  Max:
                  <span>{` ${temp.max} °${isCelsius ? "C" : "F"}`}</span>
                </p>
                <p className="flex flex-col">
                  Min:
                  <span>{` ${temp.min} °${isCelsius ? "C" : "F"}`}</span>
                </p>
              </div>
            </section>
          </section>
        </article>
        <h2 className="text-xl border-t-[1px] border-b-[1px]">
          Pronostico para las proximas horas
        </h2>
        <CardHours
          weatherInfo={weatherInfo}
          weatherInfoHours={weatherInfoHours}
          isCelsius={isCelsius}
          setIsCelsius={setIsCelsius}
          setCoords={setCoords}
          name={""}
          main={{
            feels_like: 0,
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0,
          }}
          sys={{
            country: "",
          }}
          weather={[]}
          wind={{
            speed: 0,
            gust: undefined,
          }}
        />
      </div>
    </div>
  );
};

export default Card;
