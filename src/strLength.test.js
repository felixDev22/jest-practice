// eslint-disable-next-line import/extensions
const strLength = require('./strLength');

test('check string is length Elephant will be 8', () => {
  expect(strLength('Elephant')).toBe(8);
});
test('check string is length is less than 1', () => {
  expect(strLength('')).toBe(0);
  return 'string is less than required length';
});
test('check string is length is more than 10', () => {
  expect(strLength('Kilimanjaro')).toBe(11);
  return 'string is more than required length';
});
