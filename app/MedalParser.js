var Enums = require('./config/Enums');

var VALID_VALUES = [Enums.MEDALS.GOLD, Enums.MEDALS.SILVER, Enums.MEDALS.BRONZE]

// Data isn't complex enough to warrant a separate module yet.
var parseMedalData = function(athlete) {
    return {
        country : athlete.country,
        medal : athlete.medal
    };
};

var addToTally = function(tally, parsedData) {
    var medal = parsedData.medal.toLocaleLowerCase()
    if(VALID_VALUES.indexOf(medal) === -1) {
        return;
    }
    if (!tally[parsedData.country]) {
        tally[parsedData.country] = createMedalData(parsedData);
    }
    incrementMedalData(tally, parsedData.country, medal);
};

var createMedalData = function(parsedData) {
    return { country: parsedData.country, gold: 0, silver: 0, bronze: 0, total: 0 };
};

var incrementMedalData = function(tally, country, medal) {
    tally[country][medal]++;
    tally[country].total++;
};

var values = function(hash) {
    var keys = Object.keys(hash);
    var values = keys.map(function(v) { return hash[v]; });
    return values;
};

module.exports = {
    parse: function(athletes) {
        medalTally = {};

        if(!athletes) { return medalTally }

        while(athletes.length >= 1) {
            var medalData = parseMedalData(athletes.shift());
            addToTally(medalTally, medalData);
        }
        return values(medalTally);
    }
};
