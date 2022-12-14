const capitalized = (str) => {
  str = str.split('');
  str[0] = str[0].toUpperCase();
  str = str.join('');
  return str;
};

module.exports = capitalized;
