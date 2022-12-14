// eslint-disable-next-line import/extensions
const capitalized = require('./capitalizeStr');

test('make first letter of str to be capitalized', () => {
  expect(capitalized('water')).toBe('Water');
});
