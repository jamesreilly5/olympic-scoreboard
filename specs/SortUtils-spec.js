var SortUtils = require('./../app/SortUtils.js');

describe('SortUtils', function() {

    describe('parse', function() {
        var parsedData = require('./fixtures/parsedData.json')
            sortedData = [
                { "Country": "ETH", "Gold": 2, "Silver": 1, "Bronze": 0, "Total": 3 },
                { "Country": "KEN", "Gold": 0, "Silver": 0, "Bronze": 1, "Total": 1 },
                { "Country": "USA", "Gold": 0, "Silver": 0, "Bronze": 2, "Total": 2 },
                { "Country": "TUR", "Gold": 0, "Silver": 1, "Bronze": 1, "Total": 2 }
            ],
            subSortedData = [
                { "Country": "ETH", "Gold": 2, "Silver": 1, "Bronze": 0, "Total": 3 },
                { "Country": "TUR", "Gold": 0, "Silver": 1, "Bronze": 1, "Total": 2 },
                { "Country": "USA", "Gold": 0, "Silver": 0, "Bronze": 2, "Total": 2 },
                { "Country": "KEN", "Gold": 0, "Silver": 0, "Bronze": 1, "Total": 1 }
            ];

        describe('when a valid sort key is provided', function() {
            it('sorts the array of hashes by that sort key', function() {
                expect(SortUtils.sortDesc(parsedData, ['Gold'])).toEqual(sortedData);
            });
        });

        describe('when a multiple valid sort keys are provided', function() {
            it('sorts the array in descending order of precedence of those keys', function() {
                expect(SortUtils.sortDesc(parsedData, ['Gold', 'Silver', 'Bronze'])).toEqual(subSortedData);
            });
        });

        describe('when an invalid key is provided', function() {
            it('does not sort the array', function() {
                expect(SortUtils.sortDesc(parsedData, ['Gold', 'Silver111', 'Bronze'])).toEqual(
                    [
                        { "Country": "ETH", "Gold": 2, "Silver": 1, "Bronze": 0, "Total": 3 },
                        { "Country": "USA", "Gold": 0, "Silver": 0, "Bronze": 2, "Total": 2 },
                        { "Country": "TUR", "Gold": 0, "Silver": 1, "Bronze": 1, "Total": 2 },
                        { "Country": "KEN", "Gold": 0, "Silver": 0, "Bronze": 1, "Total": 1 }
                    ]
                );
            });
        });
    });

});
