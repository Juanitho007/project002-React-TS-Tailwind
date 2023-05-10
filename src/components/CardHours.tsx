import { useState } from "react";
import { WeatherData } from "../interface/interface";
import { icons } from "../../public/img/icons";
import { cToF } from "../utilts/temperatureConverter";

const CardHours = ({ weatherInfoHours, isCelsius }: WeatherData) => {
  const [actualCard, setActualCard] = useState<number>(0);
  const changeActualCard = (direction: "back" | "forward") => {
    if (direction === "back") {
      if (actualCard === 0) return;
      setActualCard(actualCard - 1);
    } else if (direction === "forward") {
      const lastCardIndex = weatherInfoHours && weatherInfoHours.length - 1;
      if (actualCard === lastCardIndex) return;
      setActualCard(actualCard + 1);
    }
  };

  if (!weatherInfoHours) return null;

  const CardHour = ({
    weatherInfoHours,
  }: {
    weatherInfoHours: WeatherData;
  }) => {
    const { dt_txt, weather } = weatherInfoHours;
    const iconCode = weather[0].icon;
    const iconSrc = icons[iconCode].icon;
    const temp = isCelsius
      ? {
          temp: weatherInfoHours?.main.temp,
          max: weatherInfoHours?.main.temp_max,
          min: weatherInfoHours?.main.temp_min,
          feels: weatherInfoHours?.main.feels_like,
        }
      : {
          temp: cToF(weatherInfoHours?.main.temp),
          max: cToF(weatherInfoHours?.main.temp_max),
          min: cToF(weatherInfoHours?.main.temp_min),
          feels: cToF(weatherInfoHours?.main.feels_like),
        };
const backgroundColor =
  weatherInfoHours && icons[weatherInfoHours.weather[0].icon].background;
    return (
      <div
        key={weatherInfoHours.dt}
        className="flex flex-col items-center text-center gap-5 p-5 rounded-[15%] max-w-[300px] mx-auto"
        style={{ backgroundColor }}
      >
        <div className="flex w-full gap-5 justify-between">
          <span>{`${
            dt_txt && dt_txt.split(" ")[1].split(":").slice(0, 2).join(":")
          } hrs`}</span>
          <span>{
            dt_txt && dt_txt.split(" ")[0].split("-").reverse().join("/")
          }</span>
        </div>
        <div className="flex items-center gap-4 font-bold">
          <img src={iconSrc} alt={weather[0].description} />
          <p>
            {weather[0].description.charAt(0).toUpperCase() +
              weather[0].description.slice(1)}
          </p>
        </div>
        <p className="font-semibold">{`Temperatura: ${temp.temp} °${
          isCelsius ? "C" : "F"
        }`}</p>

        <div className="flex flex-col justify-between w-full">
          <span className="text-start">{`Sensación térmica: ${temp.feels} °${
            isCelsius ? "C" : "F"
          }`}</span>
          <span className="text-start">{`Temp. Max: ${temp.max} °${
            isCelsius ? "C" : "F"
          }`}</span>
          <span className="text-start">{`Temp. Min: ${temp.min} °${
            isCelsius ? "C" : "F"
          }`}</span>
          <span className="text-start">{`Humedad: ${weatherInfoHours.main.humidity}%`}</span>
        </div>
      </div>
    );
  };

  return (
    <div>
      {weatherInfoHours.map((hour, index) => {
        if (index !== actualCard) return null;
        return <CardHour key={hour.dt} weatherInfoHours={hour} />;
      })}
      <div className="flex mx-auto justify-between max-w-[300px]">
        <button onClick={() => changeActualCard("back")}>
          <i className="bx bxs-skip-previous-circle bx-tada text-3xl"></i>
        </button>
        <button onClick={() => changeActualCard("forward")}>
          <i className="bx bxs-skip-next-circle bx-tada text-3xl"></i>
        </button>
      </div>
    </div>
  );
};

export default CardHours;
