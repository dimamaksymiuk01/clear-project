export const square = (number: number) => {
  return number * number;
};

export const squareMath = (number: number) => {
  if (number === 1) {
    return 1;
  }
  const res = Math.pow(number, 2);
  return res * 2;
};
