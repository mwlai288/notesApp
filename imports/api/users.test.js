const add = (a, b) => {
  if (typeof b !== 'number') {
    return a + a;
  }
  return a + b;
};

const square = (a) => a * a;

describe('add', function() {
  it('should add two numbers', function() {
    const total = add(4, 2);
    if (total !== 6) {
      throw new Error('Your math sucks');
    }
  });

  it('should double a single number', function() {
    const res = add(44);

    if (res !== 88) {
      throw new Error('Check your math fool');
    }
  });
});

describe('square', function() {
  it('should square a number', function() {
    const squared = square(4);

    if (squared !== 16) {
      throw new Error('Boy you dumb');
    }
  });
});
