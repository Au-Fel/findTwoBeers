const findTwoBeers = require('../src/findTwoBeers');

exports.handler = async (event) => {

  const index = findTwoBeers(event.beer, event.target);

  const response = {
    status: 200,
    index
  };

  return response;
};
