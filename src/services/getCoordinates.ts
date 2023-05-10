import { Coordinates } from "../interface/interface";

export const getCoordinates = async (): Promise<Coordinates> => {
  const position = await new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
};
