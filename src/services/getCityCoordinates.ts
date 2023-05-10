import { Coordinates } from "../interface/interface";
import axios from "axios";
const key = "e9606858d9677efc127ee736ed7c8e69";

export const getCityCoordinates = async (
  city?: string
): Promise<Coordinates> => {
  if (!city) {
    throw new Error("No se ha especificado una ciudad para buscar");
  }

  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`;
  try {
    const response = await axios.get(url);
    return {
      latitude: response.data[0].lat,
      longitude: response.data[0].lon,
    };
  } catch (error) {
    throw new Error("Tienes un error al hacer la petición");
  }
};