import { SearchProps } from "../interface/interface";


const Search = ({ cityName,handleSearch,getWeatherInfoKey }: SearchProps) => {
  return (
    <div className="p-2 w-2xl flex items-center">
      <i className="bx bxs-city bx-flashing text-3xl p-2"></i>
      <input
        className={`rounded-3xl p-3 border-x-cyan-600 border-4`}
        type="text"
        placeholder= 'Escribe tu ciudad ...'
        value={cityName}
        onChange={handleSearch}
        onKeyDown={getWeatherInfoKey}
      />
    </div>
  );
};

export default Search;
