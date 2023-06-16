import Search from "./Search";
import { SearchProps } from "../interface/interface";
const Loader = ({  cityName, getWeatherInfoKey, handleSearch}: SearchProps) => {
  return (
    <div className="min-h-screen min-w-full bg-letters bg-autoFull flex flex-col items-center text-center content-center justify-evenly">
      <h2 className="text-[40px] font-fre bg-white/60 p-4 rounded-3xl">Consulta el clima de tu ciudad</h2>
      <Search
        cityName={cityName}
        getWeatherInfoKey={getWeatherInfoKey}
        handleSearch={handleSearch}
      />
      <i className="bx bx-current-location text-xl xs:text-2xl sm:text-3xl bg-white/60 p-4 rounded-3xl">
        Comparte Tu Ubicación
      </i>
    </div>
  );
};

export default Loader;
