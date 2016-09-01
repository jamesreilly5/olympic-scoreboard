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
            Gold: 0, Silver: 0, Bronze: 0, Total: 0
        }
    }
    tally[medalData.country][medalData.medal]++;
    tally[medalData.country].Total++;
}

module.exports = {
    parse: function(athletes) {
        medalTally = {};

        if(!athletes) { return medalTally }

        while(athletes.length >= 1) {
            var medalData = parseMedalData(athletes.shift());
            addToTally(medalTally, medalData);
        }
        return medalTally;
    }
};
