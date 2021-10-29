const { expect } = require('chai');
const findTwoBeers = require('../src/findTwoBeers');

describe('findTwoBeers', () => {
  it('should be a function', () => {
    expect(findTwoBeers).to.be.a('function');
  });

  it('should return one array only', () => {
    expect(findTwoBeers([0, 1, 5, 10, 25], 3)).to.be.an('array');
  });

  it('should return [2, 3] with arguments [0, 10, 25, 50], 75', () => {
    expect(findTwoBeers([0, 10, 25, 50], 75)).to.deep.equal([2, 3]);
  });

  it('should return an empty array if no valid sum is found', () => {
    expect(findTwoBeers([0, 10, 25, 50], 40)).to.deep.equal([]);
  });
});
