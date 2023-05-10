import axios from "axios";
import { WeatherData } from "../interface/interface";
const baseUrl = import.meta.env.VITE_URL_BASE;
const key = "e9606858d9677efc127ee736ed7c8e69";

export const getWeatherInfo = async (
  lat?: number,
  lng?: number
): Promise<WeatherData> => {
  const url = `${baseUrl}weather?lat=${lat}&lon=${lng}&lang=sp&appid=${key}&units=metric`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw new Error("Tienes un error al hacer la petición");
  }
};
export const getWeatherInfoHours = async (
  lat?: number,
  lng?: number
): Promise<WeatherData> => {
  const url = `${baseUrl}forecast?lat=${lat}&lon=${lng}&lang=sp&cnt=9&appid=${key}&units=metric`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw new Error("Tienes un error al hacer la petición");
  }
};