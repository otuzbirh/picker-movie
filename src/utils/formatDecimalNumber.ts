export const formatDecimalNumber = (number: number, decimals: number = 1) => {
  if (number === Math.floor(number)) {
    return number.toString();
  }
  return number.toFixed(decimals);
};
