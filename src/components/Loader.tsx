import Search from "./Search";
import { SearchProps } from "../interface/interface";
const Loader = ({  cityName, getWeatherInfoKey, handleSearch}: SearchProps) => {
  return (
    <div className="min-h-screen w-screen bg-cyan-400 flex flex-col items-center text-center content-center justify-between overflow-hidden p-4">
      <h2 className="text-3xl font-fre">Consulta el clima de tu ciudad</h2>
      <Search
        cityName={cityName}
        getWeatherInfoKey={getWeatherInfoKey}
        handleSearch={handleSearch}
      />
      <i className="bx bx-current-location bx-flip-horizontal bx-burst text-[1rem]">
        Comparte Tu Ubicación
      </i>
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
