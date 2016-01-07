var uniqueRandomArray = require('unique-random-array');
var michusAliases = require('./michus-aliases.json');

var getRandomItem = uniqueRandomArray(michusAliases);
module.exports = {
    all: michusAliases,
    random: random
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    }

    var randomItems = [];
    while (randomItems.length < number) {
        randomItems.push(getRandomItem());
    }

    return randomItems;
}
