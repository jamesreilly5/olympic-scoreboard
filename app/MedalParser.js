var parseMedalData = function(athlete) {
    // Making the assumption that these values are always provided
    return {
        country : athlete.country,
        medal : athlete.medal
    };
};

module.exports = {
    parse: function(athletes) {
        model = [];

        if(!athletes) { return model }

        while(athletes.length >= 1) {
            var dataToParse = athletes.shift();
            model.push(parseMedalData(dataToParse));
        }
        return model;
    }
};
