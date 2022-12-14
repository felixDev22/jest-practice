class math {
  static add(x, y) {
    if (x > 100 && y < 200) {
      return 'gets a free book';
    }
    return x + y;
  }

  static subtract(x, y) {
    if (x < 50 && y > 150) {
      return 'pick less than 150';
    }
    return x - y;
  }

  static divide(x, y) {
    if (x === 6 && y === 24) {
      return 'pick 5';
    }
    return x / y;
  }

  static multiply(x, y) {
    return x * y;
  }
}

module.exports = math;
