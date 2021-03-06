var JsonParser = require('./../app/MedalParser.js');

describe('MedalParser', function() {

    describe('parse', function() {
        var validResponseData = require('./fixtures/athletes.json'),
            expectedOutput = require('./fixtures/parsedData.json');

        describe('when valid data is supplied', function() {
            it('parses the expected output necessary for calculation', function() {
                expect(JsonParser.parse(validResponseData)).toEqual(expectedOutput);
            });
        });

        describe('when no data is supplied', function() {
            it('returns an empty array', function() {
                expect(JsonParser.parse(null)).toEqual({});
            });
        });

        describe('when an invalid medal name is provided', function() {
            var invalidResponseData = require('./fixtures/invalidData.json');
            it('it is ignored in the results', function() {
                expect(JsonParser.parse(invalidResponseData)).toEqual(
                    [ { country: 'USA', gold: 1, silver: 0, bronze: 0, total: 1 } ]
                );
            });
        });
    });

});
