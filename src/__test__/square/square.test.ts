import { square, squareMath } from './square';
import clearAllMocks = jest.clearAllMocks;

describe('square', () => {
  let mockValue: string;
  const mockMath = jest.spyOn(Math, 'pow');

  //перед кожним
  beforeEach(() => {
    // mockMath.mockReset()
    mockValue = 'Test log beforeEach';
    clearAllMocks();
  });

  //один раз перед усіма тестами
  beforeAll(() => {
    mockValue = 'Test log beforeAll';
  });

  test('Коректні значення', () => {
    expect(square(2)).toBe(4); //тут ми очікуємо 4
    expect(square(2)).toBeLessThan(5); //тут ми очікуємо що число менше за 5
    expect(square(2)).toBeGreaterThan(3); //тут ми очікуємо що число більше за 5
    expect(square(2)).not.toBeUndefined(); // перевірямо чи це не андефайнед
  });

  test('Mocks ', () => {
    mockMath.mockReturnValue(40);
    const result = squareMath(2);
    expect(result).toEqual(80);
  });
  test('Mocks2 ', () => {
    mockMath.mockRestore();
    const result = squareMath(2);
    expect(result).toEqual(8);
  });
});
