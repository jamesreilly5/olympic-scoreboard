var SortUtils = require('./../app/SortUtils.js');

describe('SortUtils', function() {

    describe('parse', function() {
        var parsedData = require('./fixtures/parsedData.json')
            sortedData = [
                { "country": "ETH", "gold": 2, "silver": 1, "bronze": 0, "total": 3 },
                { "country": "KEN", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
                { "country": "USA", "gold": 0, "silver": 0, "bronze": 2, "total": 2 },
                { "country": "TUR", "gold": 0, "silver": 1, "bronze": 1, "total": 2 }
            ],
            subSortedData = [
                { "country": "ETH", "gold": 2, "silver": 1, "bronze": 0, "total": 3 },
                { "country": "TUR", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
                { "country": "USA", "gold": 0, "silver": 0, "bronze": 2, "total": 2 },
                { "country": "KEN", "gold": 0, "silver": 0, "bronze": 1, "total": 1 }
            ];

        describe('when a valid sort key is provided', function() {
            it('sorts the array of hashes by that sort key', function() {
                expect(SortUtils.sortDesc(parsedData, ['gold'])).toEqual(sortedData);
            });
        });

        describe('when a multiple valid sort keys are provided', function() {
            it('sorts the array in descending order of precedence of those keys', function() {
                expect(SortUtils.sortDesc(parsedData, ['gold', 'silver', 'bronze'])).toEqual(subSortedData);
            });
        });

        describe('when an invalid key is provided', function() {
            it('does not sort the array', function() {
                expect(SortUtils.sortDesc(parsedData, ['gold', 'silver111', 'bronze'])).toEqual(
                    [
                        { "country": "ETH", "gold": 2, "silver": 1, "bronze": 0, "total": 3 },
                        { "country": "USA", "gold": 0, "silver": 0, "bronze": 2, "total": 2 },
                        { "country": "TUR", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
                        { "country": "KEN", "gold": 0, "silver": 0, "bronze": 1, "total": 1 }
                    ]
                );
            });
        });
    });

});
