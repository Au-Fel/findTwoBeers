const findTwoBeers = (beer, target) => {
  let dictionary = {};
  let result = [];

  for (let i = 0; i < beer.length; i++) {

    if (dictionary[beer[i]] >= 0) {
      result = [dictionary[beer[i]], i];
      return result;
    }

    else dictionary[target - beer[i]] = i;
  }

  return result;
};

module.exports = findTwoBeers;
