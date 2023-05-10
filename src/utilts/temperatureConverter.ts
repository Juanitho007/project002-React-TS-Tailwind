export const kToC = (temp:number) => {
  return (temp - 273.15).toFixed(2);
};
export const cToF = (temp:number) => {
  return ((temp * 9) / 5 + 32).toFixed(2);
};
