var uniqueRandomArray = require('unique-random-array');
var michusAliases = require('./michus-aliases.json');

module.exports = {
    all: michusAliases,
    random: uniqueRandomArray(michusAliases)
};
