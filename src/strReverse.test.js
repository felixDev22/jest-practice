// eslint-disable-next-line import/extensions
const strReverse = require('./strReverse');

test('check string is reverse', () => {
  expect(strReverse('cat')).toBe('tac');
  return 'string is reversed';
});
