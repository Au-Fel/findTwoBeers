const findTwoBeers = require('../src/findTwoBeers');

const target = process.argv.pop();
const beer = process.argv.splice(2).join('');

console.log(findTwoBeers(JSON.parse(beer), Number(target)));
