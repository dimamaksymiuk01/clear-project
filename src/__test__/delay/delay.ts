export function delay<T>(callback: () => T, ms: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, ms);
  });
}

delay(() => 5 + 5, 1000).then((res) => res); // Виведе "10" після затримки.
