import { SearchProps } from "../interface/interface";


const Search = ({ cityName,handleSearch,getWeatherInfoKey }: SearchProps) => {
  return (
    <div className="max-w-[640px] w-full flex items-center bg-white/60 p-4 rounded-3xl">
      <i className="bx bxs-city bx-flashing text-3xl p-2"></i>
      <input
        className={`rounded-3xl p-3 border-x-cyan-600 border-4 w-full`}
        type="text"
        placeholder="Escribe tu ciudad ..."
        value={cityName}
        onChange={handleSearch}
        onKeyDown={getWeatherInfoKey}
      />
    </div>
  );
};

export default Search;
