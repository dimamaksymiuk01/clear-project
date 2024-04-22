export const mapArrToStrings = (arr: (number | string | null | undefined)[]) => {
  return arr.filter((item) => Number.isInteger(item)).map(String);
};
