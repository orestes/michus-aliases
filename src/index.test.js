var expect = require('chai').expect;
var aliases = require('./index');

describe('michus-aliases', function () {
    describe('all', function () {
        it('should return an array of strings', function () {
            expect(aliases.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function (item) {
                    return typeof item === 'string';
                })
            }
        });

        it('should contain Michusado', function () {
            expect(aliases.all).to.include('Michusado');
        });
    });

    describe('random', function () {
        it('should return a random item from the aliases.all', function () {
            var randomItem = aliases.random();
            expect(aliases.all).to.include(randomItem);
        })
    });

    it('should return an array of random items if passed a number', function () {
        var ITEM_NUMBER = 2;
        var randomItems = aliases.random(ITEM_NUMBER);
        expect(randomItems).to.have.length(ITEM_NUMBER);
    });
})
;
