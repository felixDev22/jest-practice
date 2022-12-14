const strReverse = (str) => {
  if (str.length > 0) {
    return str.split('').reverse().join('');
  }
  return 'no string to reverse';
};

module.exports = strReverse;
