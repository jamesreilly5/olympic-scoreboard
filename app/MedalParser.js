// Data isn't complex enough to warrant a separate module yet.
var parseMedalData = function(athlete) {
    return {
        country : athlete.country,
        medal : athlete.medal
    };
};

var addToTally = function(tally, medalData) {
    if (!tally[medalData.country]) {
        tally[medalData.country] = {
            Country: medalData.country, Gold: 0, Silver: 0, Bronze: 0, Total: 0
        }
    }
    tally[medalData.country][medalData.medal]++;
    tally[medalData.country].Total++;
}

var values = function(hash) {
    var keys = Object.keys(hash);
    var values = keys.map(
        function(v) {
            return hash[v];
        }
    );
    return values;
}

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
