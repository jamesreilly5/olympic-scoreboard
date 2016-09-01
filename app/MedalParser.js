// Data isn't complex enough to warrant a separate module yet.
var parseMedalData = function(athlete) {
    return {
        country : athlete.country,
        medal : athlete.medal
    };
};

var addToTally = function(tally, parsedData) {
    if (!tally[parsedData.country]) {
        tally[parsedData.country] = createMedalData(parsedData);
    }
    incrementMedalData(tally, parsedData.country, parsedData.medal);
};

var createMedalData = function(parsedData) {
    return { Country: parsedData.country, Gold: 0, Silver: 0, Bronze: 0, Total: 0 };
};

var incrementMedalData = function(tally, country, medal) {
    tally[country][medal]++;
    tally[country].Total++;
};

var values = function(hash) {
    var keys = Object.keys(hash);
    var values = keys.map(
        function(v) {
            return hash[v];
        }
    );
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
