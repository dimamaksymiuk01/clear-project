import { mapArrToStrings } from './mapArrToStrings';

describe('mapArrToStrings', () => {
  test('Коректне значення', () => {
    expect(mapArrToStrings([1, 2, 3, 4, 5])).toEqual(['1', '2', '3', '4', '5']);
  });
  test('Неочікувані значення', () => {
    expect(mapArrToStrings([1, 2, 3, 4, 5])).not.toEqual(['1', '2', '3']);
  });
  test('Перемішані значення', () => {
    expect(mapArrToStrings([1, 2, 3, 4, 5, 'test', null, undefined])).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
    ]);
  });
  test('Пустий масив', () => {
    expect(mapArrToStrings([])).toEqual([]);
  });
});
