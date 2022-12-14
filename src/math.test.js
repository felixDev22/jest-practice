// eslint-disable-next-line import/extensions
const math = require('./math');

describe('Add', () => {
  test('gets a free book', () => {
    expect(math.add(120, 150)).toBeTruthy();
  });
  test('can subtract 50', () => {
    expect(math.subtract(40, 150)).toBeFalsy();
  });
  test('table of 6', () => {
    expect(math.divide(6, 24)).toBe(4);
  });
  test('divisible by 10', () => {
    expect(math.multiply(10, 8)).toBe(80);
  });
});
